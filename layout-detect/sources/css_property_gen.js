// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

g_css_property_gen_js_loaded = true;

g_css_properties_map = {};

function ReinitCSSPropertyGenerators() {
  let rng = g_default_prng;

   // Holds all the required information about a certain CSS property.
  function CSSProperty(name) {
   this.name = () => { return name; };
   this.init();
   let v = cs[name];
   this.value = () => { return v; };
  };

  // Get CSSStyleDeclaration instance to work with.
  let div = document.createElement("div");
  document.body.appendChild(div);
  let cs = window.getComputedStyle(div);

  let patterns = {
    color: /rgba\([ ]*\d+[ ],[ ]*\d+[ ],[ ]*\d+[ ]\)/,
    numeric_percent: /\d+\%/,
    numeric_pixel: /\d+px/
  };

  // Generates random colors (uniform distribution).
 function RandomCSSColorGenerator() {
  this.next = () => {
    let r = rng.randInt(0, 256);
    let g = rng.randInt(0, 256);
    let b = rng.randInt(0, 256);
    let a = rng.rand();
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
 }
 let global_random_color_gen = new RandomCSSColorGenerator();

 // Returns a random pixel value within the range [min, max).
 function RandomNumberValue(min, max, id) {
   this.next = () => {
     return `${rng.randInt(min, max)}${id}`;
   };
 }
 let global_random_pixel_gen = new RandomNumberValue(0, 500, "px");
 let global_random_percent_gen = new RandomNumberValue(0, 500, "%");

 // Returns a random keyword from the list of keywords |values_array|.
 function RandomKeywordGenerator(values_array) {
   this.values = values_array.slice();
   this.next = () => {
     return this.values[rng.randInt(0, this.values.length)];
   };
 }


// Initialize a property to find out the valid CSSValues it can support.
CSSProperty.prototype.init = function() {
  // Figure out the keywords that can be set for this current style.
  let keyword_values = [];
  let generators = [];
  this.keyword_values = () => { return keyword_values; };
  this.generators = () => { return generators; };

  for (var index = 0; index < all_css_values.length; ++index) {
     let value = all_css_values[index];
     div.style[this.name()] = value;
     let new_value = cs.getPropertyValue(this.name());
     if (new_value.indexOf(value) === -1)
       continue;

     if ((new_value === value) ||
        !!(new RegExp(`[,; ]+${value}[,; ]+`)).exec(new_value)) {
        keyword_values.push(value);
     }
   }

   // Does it accept color?
   div.style[this.name()] = "rgba(0, 1, 2)";
   let accepts_color = !!patterns["color"].exec(cs.getPropertyValue(this.name()));

   div.style[this.name()] = "37%";
   let accepts_numeric_percent = !!patterns["numeric_percent"].exec(cs.getPropertyValue(this.name()));

   div.style[this.name()] = "37px";
   let accepts_numeric_pixels = !!patterns["numeric_pixel"].exec(cs.getPropertyValue(this.name()));

   if (keyword_values.length > 0)
     generators.push(new RandomKeywordGenerator(keyword_values));
   if (accepts_color)
     generators.push(global_random_color_gen);
   if (accepts_numeric_percent)
     generators.push(global_random_percent_gen);
   if (accepts_numeric_pixels)
     generators.push(global_random_pixel_gen);
 };

 CSSProperty.prototype.randomize = function() {
   if (!this.generators().length)
     return;
   let g = this.generators()[rng.randInt(0, this.generators().length)];
   s = g.next();
   this.value = () => { return s; };
 };

 g_css_properties_map = {};
 for (var index = 0; index < cs.length; ++index) {
   g_css_properties_map[cs[index]] = new CSSProperty(cs[index]);
 }

 document.body.removeChild(div);
}

ReinitCSSPropertyGenerators();
