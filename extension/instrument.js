// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Updated by the devtools panel.
let selected_element_ = null;
let state_ = {monitor_bounds: false, monitor_interval: 30, highlight: false, threshold: 1};

// Internal
let previous_bounds_ = null;
let new_bounds_ = {};
let unique_id_counter_ = 0;
let uid_map_ = {};
let raf_count_ = 0;
let failed_nodes_ = [];
let subtree_nodes_ = [];
let detected_layout_change_ = {};
let element_to_monitor_ = null;
let element_to_monitor_previous_bounds_ = null;
let element_to_monitor_observer_ = null;
let animation_test_raf_interval_ = 10;


function ElementRect(el) {
  let r = el.getBoundingClientRect();
  this.top = r.top;
  this.left = r.left;
  this.width = r.width;
  this.height = r.height;
  return this;
}

ElementRect.prototype.toArray = function() {
  return [this.left, this.top, this.width, this.height];
};

ElementRect.prototype.approximatelyEqual = function(other, eps) {
  if (!eps)
    eps = 0.01;
  let arr = this.toArray(), otherarr = other.toArray();
  for (var i = 0; i < 4; ++i) {
    let err = Math.abs(arr[i] - otherarr[i]);
    let max = Math.max(arr[i], otherarr[i]);
    if (eps < (err / (1e-9 + max)))
      return false;
  }
  return true;
};

ElementRect.prototype.toString = function() {
  return `(${this.left},${this.top}), ${this.width}x${this.height}`;
};

function getUniqueId(node) {
  let uidstr = "unique-layout-id";
  if (!node.getAttribute(uidstr)) {
    node.setAttribute("unique-layout-id", unique_id_counter_++);
    uid_map_[node.getAttribute("unique-layout-id")] = node;
  }
  return node.getAttribute("unique-layout-id");
}

function getNode(uid) {
  return uid_map_[uid];
}

function findNewBounds(node) {
    new_bounds_[getUniqueId(node)] = new ElementRect(node);
    if (!node.hasChildNodes())
      return;
    for (var i = 0; i < node.childNodes.length; ++i)
      findNewBounds(node.childNodes[i]);
}

function findAndCompareAllBounds() {
  previous_bounds_ = new_bounds_;
  new_bounds_ = {};
  findNewBounds(selected_element_);
  for (uid in new_bounds_) {
    let new_bound = new_bounds_[uid];
    let previous_bound = null;
    if (uid in previous_bounds_) {
      previous_bound = previous_bounds_[uid];
    }
    if (previous_bound &&
        !previous_bound.approximatelyEqual(new_bound, state_.threshold)) {
      reportBoundChange(uid, new_bound, previous_bound);
    }
  }
}

function reportBoundChange(uid, new_bound, previous_bound) {
  let msg = `INFO: The following node has had a layout change; bounds changed from ${previous_bound.toString()} to ${new_bound.toString()}.`;
  let node = getNode(uid);
  console.log(msg);
  console.log(node);
  if (state_.highlight)
    node.animate(state_.animation.keyframes, state_.animation.settings);
}

function onRaf() {
  if (state_.monitor_bounds && (raf_count_ % state_.monitor_interval === 0)) {
    findAndCompareAllBounds();
  }

  if (state_.is_animation_test && element_to_monitor_ &&
    (raf_count_ % animation_test_raf_interval_) === 0) {
    updateElementBounds();
  }

  window.requestAnimationFrame(onRaf);
  raf_count_++;
}
window.requestAnimationFrame(onRaf);

function updateElementBounds() {
  let bounds = new ElementRect(element_to_monitor_);
  if (element_to_monitor_previous_bounds_ &&
      !element_to_monitor_previous_bounds_.approximatelyEqual(bounds)) {
    element_to_monitor_observer_.boundsChanged();
  }
  element_to_monitor_previous_bounds_ = bounds;
}

function setState(selected_element, state) {
  selected_element_ = selected_element;
  state_ = state;
  if (state_.message)
    console.log("MSG:" + state_.message);
  if (state_.is_animation_test)
    beginAnimationTest();
}

function getAllNodes(el) {
  if (!(el instanceof HTMLElement))
    return;

  subtree_nodes_.push(el);
  if (!el.hasChildNodes)
    return;
  for (var c = 0; c < el.childNodes.length; ++c)
    getAllNodes(el.childNodes[c]);
}



function TestAnimation(element, property, keyframes, default_css, duration) {
  return new Promise( (resolve) => {
    if ((property in detected_layout_change_ ) && detected_layout_change_[property]) {
      resolve();
    }
    element.why_failed = [];
    if (default_css) {
      for (key in default_css) {
        element.style[key] = default_css[key];
      }
    }
    detected_layout_change_[property] = false;
    element_to_monitor_observer_ = this;
    element_to_monitor_ = element;
    function onAnimationEnd() {
      element_to_monitor_observer_ = null;
      element.removeEventListener("animationend", onAnimationEnd);
      resolve();
    }

    function onAnimationStart() {
      element_to_monitor_observer_ = this;
      element_to_monitor_ = element;
      console.log(`Started animation for property '${property}' and node:`);
      console.log(element);
      element.removeEventListener("animationstart", onAnimationStart);
    }

    this.boundsChanged = () => {
      detected_layout_change_[property] = true;
      failed_nodes_.push(element);
      element.why_failed.push(property);
    };

    element.addEventListener("animationstart", onAnimationEnd);
    element.addEventListener("animationend", onAnimationEnd);
    element.animate(keyframes, {duration: Number(duration)});
  });
}

async function beginAnimationTest() {
  failed_nodes_ = [];
  subtree_nodes_ = [];
  detected_layout_change_ = {};
  getAllNodes(selected_element_);
  let tests = [];
  let animations = state_.animations;
  let current_test = null;
  for (var i = 0; i < subtree_nodes_.length; ++i) {
    let node = subtree_nodes_[i];
    if ((Math.random() * 100) > state_.node_percentage)
      continue;
    for (var j = 0; j < state_.animations.length; ++j) {
      let test = new TestAnimation(node, animations[j].property,
        animations[j].keyframes, animations[j].default_css, state_.duration);
      tests.push(test);
      current_test = await test.then(current_test);
    }
  }
  await current_test;
  console.log(detected_layout_change_);
  console.log(failed_nodes_);
}
