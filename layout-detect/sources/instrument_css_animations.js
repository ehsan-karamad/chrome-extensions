// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let background_port = null;

function BoundsMonitor(elements_to_monitor, raf_period, notify_changed) {
  this.elements = () => { return elements_to_monitor;}
  this.period = () => { return raf_period; }
  this.notify = notify_changed;
}

BoundsMonitor.prototype.monitor = function() {
  let monitoring = true;
  let raf_count = 0;
  this.on_release = () => { monitoring = false; };

  function on_raf() {
    if (raf_count % this.period() === 0)
      this.sample();
    raf_count++;
    if (!monitoring)
      return;
    window.requestAnimationFrame(on_raf.bind(this));
  }
  window.requestAnimationFrame(on_raf.bind(this));
};

BoundsMonitor.prototype.sample = function() {
  for (var index = 0; index < this.elements().length; ++index) {
    let changed = this.elements()[index].sample();
    if (changed && this.notify)
      this.notify();
  }
};


function TwoStateAnimation(animated_element, css_property, duration) {
  css_property.randomize();
  let starting_style = css_property.value();
  css_property.randomize();
  let ending_style = css_property.value();

  this.element = () => { return animated_element.element(); };
  this.length = () => { return duration; };
  this.property = () => { return css_property; };
  this.from_style = () => { return starting_style; };
  this.to_style = () => {return ending_style; };
};

TwoStateAnimation.prototype.run = function() {
  return new Promise( (resolve) => {
    let self = this;
    function on_animationend() {
      resolve();
      self.element().removeEventListener("animationend", on_animationend);
    }
    this.element().addEventListener("animationend", on_animationend);
    let keyframes = [];
    let property_name = self.property();
    let frame_1_style = self.from_style();
    let frame_2_style = self.to_style();
    let keyframes = [ {property_name: frame_1_style}, {property_name: frame_2_style}];
    this.element().animate(keyframes, {duration: this.length()});
  });
};

TwoStateAnimation.prototype.summary = function() {
  return {
    from: this.from_style(),
    to: this.to_style(),
    html: document.body.outerHTML,
    duration: this.length(),
  };
};

async function startTest(root_element, params) {
  // Initialize RNG.
  set_global_prng_seed(params.seed);

  var tree = new ElementTree(root_element);
  var all_elements = tree.all_elements();
  var animated_elements = random_subarray(all_elements, params.animated_elements_percentage / 100);
  var violating_animations = [];

  var css_properties = Object.keys(g_css_properties_map);
  for (var index = 0; index < css_properties.length; ++index) {
    let property = g_css_properties_map[css_properties[index]];
    console.log(`Testing property: ${property.name()}`);
    let caused_layout = false;
    function on_layout() { caused_layout = true; }
    for (var jndex = 0; jndex < animated_elements.length; jndex++) {
      let el = animated_elements[jndex];
      for (var kndex = 0; kndex < params.n_runs; ++kndex) {
        let animation = new TwoStateAnimation(element, property, params.animation_duration);
        let bm = new BoundsMonitor(all_elements, params.sample_period, on_layout);
        await animation.run();
        bm.release();
        if (caused_layout) {
          violating_animations.push(animation);
          break;
        }
      }
      if (caused_layout)
        break;
    }
  }

  console.log(violating_animations);
  downloadData(summarize_results(violating_animations));
  notify_background({type: "test-done"});
}

function notify_background(msg) {
  if (!background_port) {
    background_port = chrome.runtime.connect({name: "contents"});
  }
  background_port.postMessage(msg, "*");
}



function summarize_results(animations) {
  let layout_animations = {};
  for (var index = 0; index < animations.length; ++index) {
    var a = animations[index];
    if (!(a.property().name() in layout_animations)) {
      layout_animations[a.property().name()] = [];
    }
    layout_animations[a.property().name()].push(a.summary());
  }
  return layout_animations;
}

function downloadData(d) {
  var data = JSON.stringify(d , null, 2); //indentation in json format, human readable

  var link = document.createElement("a");
  var blob = new Blob([data], {type: "octet/stream"});
  var file_name = "layout-animations.json";
  var url = window.URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", file_name);
  link.click();
}


