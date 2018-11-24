// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function ElementTree(root_el) {
  this.root = () => { return !!root_el ? root_el : document.body; }
}

function Element(e) {
  this.element = () => { return e; };
  let bounds = [];
  this.sample = (clear) => {
    if (clear)
      bounds = [];
    bounds.push(new ElementRect(this.element()));
  };
  this.sampled_bounds = () => { return bounds; }
}

ElementTree.prototype.all_elements = function() {
  let elements = [];
  function addElement(e) {
    if (!(e instanceof HTMLElement))
      return;
    elements.push(new Element(e));
    let child = e.firstChild;
    while(child) {
      addElement(child);
      child = child.nextSibling;
    }
  }
  addElement(this.root());
  return elements;
};

function ElementRect(e) {
  var bounds = e.getBoundingClientRect();
  this.left = () => { return bounds.left; };
  this.top = () => { return bounds.top; };
  this.width = () => { return bounds.width; };
  this.height = () => { return bounds.height; };
}

ElementRect.prototype.toString = function() {
  return `(${this.left()}, ${this.top()}) ${this.width()}x${this.height()}`;
};

ElementRect.prototype.approximatelyEquals = function(other, err) {
  return Math.abs(this.left() - other.left()) < err &&
         Math.abs(this.top() - other.top()) < err &&
         Math.abs(this.width() - other.width()) < err &&
         Math.abs(this.height() - other.height()) < err;
};
