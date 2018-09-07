// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  All CSS constants used as CSS Property values
  */

  all_css_values = ["inherit", "initial", "none", "hidden", "inset", "groove", "outset", "ridge", "dotted", "dashed", "solid", "double", "caption", "icon", "menu", "message-box", "small-caption", "-webkit-mini-control", "-webkit-small-control", "-webkit-control", "status-bar", "italic", "oblique", "all", "common-ligatures", "no-common-ligatures", "discretionary-ligatures", "no-discretionary-ligatures", "historical-ligatures", "no-historical-ligatures", "contextual", "no-contextual", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "unicase", "titling-caps", "jis78", "jis83", "jis90", "jis04", "simplified", "traditional", "full-width", "proportional-width", "ruby", "lining-nums", "oldstyle-nums", "proportional-nums", "tabular-nums", "diagonal-fractions", "stacked-fractions", "ordinal", "slashed-zero", "normal", "bold", "bolder", "lighter", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large", "smaller", "larger", "serif", "sans-serif", "cursive", "fantasy", "monospace", "-webkit-body", "-webkit-pictograph", "swap", "fallback", "optional", "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow", "transparent", "-webkit-link", "-webkit-activelink", "activeborder", "activecaption", "appworkspace", "background", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "captiontext", "graytext", "highlight", "highlighttext", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infobackground", "infotext", "menutext", "scrollbar", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "window", "windowframe", "windowtext", "-internal-active-list-box-selection", "-internal-active-list-box-selection-text", "-internal-inactive-list-box-selection", "-internal-inactive-list-box-selection-text", "-webkit-focus-ring-color", "currentcolor", "grey", "-internal-quirk-inherit", "repeat", "repeat-x", "repeat-y", "no-repeat", "clear", "copy", "source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "xor", "plus-lighter", "baseline", "middle", "sub", "super", "text-top", "text-bottom", "top", "bottom", "-webkit-baseline-middle", "-webkit-auto", "left", "right", "inline-start", "inline-end", "center", "justify", "-webkit-left", "-webkit-right", "-webkit-center", "-webkit-match-parent", "-internal-center", "inter-word", "distribute", "outside", "inside", "disc", "circle", "square", "decimal", "decimal-leading-zero", "arabic-indic", "bengali", "cambodian", "khmer", "devanagari", "gujarati", "gurmukhi", "kannada", "lao", "malayalam", "mongolian", "myanmar", "oriya", "persian", "urdu", "telugu", "tibetan", "thai", "lower-roman", "upper-roman", "lower-greek", "lower-alpha", "lower-latin", "upper-alpha", "upper-latin", "cjk-earthly-branch", "cjk-heavenly-stem", "ethiopic-halehame", "ethiopic-halehame-am", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "hangul", "hangul-consonant", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "hebrew", "armenian", "lower-armenian", "upper-armenian", "georgian", "cjk-ideographic", "simp-chinese-formal", "simp-chinese-informal", "trad-chinese-formal", "trad-chinese-informal", "hiragana", "katakana", "hiragana-iroha", "katakana-iroha", "inline", "block", "flow-root", "list-item", "inline-block", "table", "inline-table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption", "-webkit-box", "-webkit-inline-box", "flex", "inline-flex", "grid", "inline-grid", "contents", "-webkit-flex", "-webkit-inline-flex", "layout", "inline-layout", "auto", "crosshair", "default", "pointer", "move", "vertical-text", "cell", "context-menu", "alias", "progress", "no-drop", "not-allowed", "zoom-in", "zoom-out", "e-resize", "ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "text", "wait", "help", "all-scroll", "grab", "grabbing", "-webkit-grab", "-webkit-grabbing", "-webkit-zoom-in", "-webkit-zoom-out", "ltr", "rtl", "capitalize", "uppercase", "lowercase", "visible", "collapse", "a3", "a4", "a5", "above", "absolute", "always", "avoid", "b4", "b5", "below", "bidi-override", "blink", "both", "close-quote", "embed", "fixed", "hand", "hide", "isolate", "isolate-override", "plaintext", "-webkit-isolate", "-webkit-isolate-override", "-webkit-plaintext", "landscape", "ledger", "legal", "letter", "line-through", "local", "no-close-quote", "no-open-quote", "nowrap", "open-quote", "overlay", "overline", "portrait", "pre", "pre-line", "pre-wrap", "relative", "scroll", "separate", "show", "static", "thick", "thin", "underline", "wavy", "-webkit-nowrap", "stretch", "start", "end", "clone", "slice", "reverse", "horizontal", "vertical", "inline-axis", "block-axis", "flex-start", "flex-end", "space-between", "space-around", "space-evenly", "unsafe", "safe", "row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse", "auto-flow", "dense", "read-only", "read-write", "read-write-plaintext-only", "element", "-webkit-min-content", "-webkit-max-content", "-webkit-fill-available", "-webkit-fit-content", "min-content", "max-content", "fit-content", "clip", "ellipsis", "discard", "break-all", "keep-all", "break-word", "space", "loose", "strict", "after-white-space", "manual", "checkbox", "radio", "push-button", "square-button", "button", "button-bevel", "inner-spin-button", "listbox", "listitem", "media-enter-fullscreen-button", "media-exit-fullscreen-button", "media-mute-button", "media-play-button", "media-overlay-play-button", "media-toggle-closed-captions-button", "media-slider", "media-sliderthumb", "media-volume-slider-container", "media-volume-slider", "media-volume-sliderthumb", "media-controls-background", "media-controls-fullscreen-background", "media-current-time-display", "media-time-remaining-display", "-internal-media-cast-off-button", "-internal-media-overlay-cast-off-button", "-internal-media-track-selection-checkmark", "-internal-media-closed-captions-icon", "-internal-media-subtitles-icon", "-internal-media-overflow-button", "-internal-media-download-button", "-internal-media-remoting-cast-icon", "-internal-media-control", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "meter", "progress-bar", "progress-bar-value", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "caret", "searchfield", "searchfield-cancel-button", "textfield", "textarea", "caps-lock-indicator", "round", "border", "border-box", "content", "content-box", "padding", "padding-box", "margin-box", "contain", "cover", "logical", "visual", "alternate", "alternate-reverse", "forwards", "backwards", "infinite", "running", "paused", "flat", "preserve-3d", "fill-box", "view-box", "ease", "linear", "ease-in", "ease-out", "ease-in-out", "step-start", "step-middle", "step-end", "steps", "frames", "cubic-bezier", "document", "reset", "zoom", "visiblePainted", "visibleFill", "visibleStroke", "painted", "fill", "stroke", "bounding-box", "spell-out", "digits", "literal-punctuation", "no-punctuation", "antialiased", "subpixel-antialiased", "optimizespeed", "optimizelegibility", "geometricprecision", "crispedges", "economy", "exact", "lr", "rl", "tb", "lr-tb", "rl-tb", "tb-rl", "horizontal-tb", "vertical-rl", "vertical-lr", "after", "before", "over", "under", "filled", "open", "dot", "double-circle", "triangle", "sesame", "ellipse", "closest-side", "closest-corner", "farthest-side", "farthest-corner", "mixed", "sideways", "sideways-right", "upright", "vertical-right", "on", "off", "optimizequality", "pixelated", "-webkit-optimize-contrast", "from-image", "nonzero", "evenodd", "at", "alphabetic", "fullscreen", "standalone", "minimal-ui", "browser", "sticky", "coarse", "fine", "on-demand", "hover", "multiply", "screen", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "scale-down", "balance", "-webkit-paged-x", "-webkit-paged-y", "drag", "no-drag", "span", "minmax", "each-line", "progressive", "interlace", "markers", "-internal-extend-to-zoom", "pan-x", "pan-y", "pan-left", "pan-right", "pan-up", "pan-down", "manipulation", "pinch-zoom", "last-baseline", "first-baseline", "first", "last", "self-start", "self-end", "legacy", "smooth", "scroll-position", "revert", "unset", "linear-gradient", "radial-gradient", "conic-gradient", "repeating-linear-gradient", "repeating-radial-gradient", "repeating-conic-gradient", "paint", "-webkit-cross-fade", "-webkit-gradient", "-webkit-linear-gradient", "-webkit-radial-gradient", "-webkit-repeating-linear-gradient", "-webkit-repeating-radial-gradient", "-webkit-image-set", "from", "to", "color-stop", "radial", "attr", "counter", "counters", "rect", "polygon", "format", "invert", "grayscale", "sepia", "saturate", "hue-rotate", "opacity", "brightness", "contrast", "blur", "drop-shadow", "url", "rgb", "rgba", "hsl", "hsla", "matrix", "matrix3d", "perspective", "rotate", "rotateX", "rotateY", "rotateZ", "rotate3d", "scale", "scaleX", "scaleY", "scaleZ", "scale3d", "skew", "skewX", "skewY", "translate", "translateX", "translateY", "translateZ", "translate3d", "x", "y", "z", "path", "ray", "sides", "calc", "-webkit-calc", "mandatory", "proximity", "style", "size", "auto-fill", "auto-fit", "var", "-internal-variable-value", "env", "avoid-page", "page", "recto", "verso", "avoid-column", "p3", "rec2020", "aliceblue", "antiquewhite", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "limegreen", "linen", "magenta", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rebeccapurple", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen", "alpha", "luminance", "accumulate", "new", "sRGB", "linearRGB", "butt", "miter", "bevel", "before-edge", "after-edge", "central", "text-before-edge", "text-after-edge", "ideographic", "hanging", "mathematical", "use-script", "no-change", "reset-size", "dynamic", "non-scaling-stroke"];

/*
  PSEUDO RANDOM NUMBER GENERATOR LOGIC
  */

  var g_default_prng = null;

  function set_global_prng_seed(seed) {
    g_default_prng = new PRNG(seed);
  }

// Pseudo Random Number Generator.
// Uses a recursive formula x[n] = (a * x[n - 1] + b) % m with x[0] = seed.
function PRNG(seed, a, b, m) {
  if (!seed)
    seed = 0;

  if (!a) {
    a = 13;
    b = 961748941 /* some prime */;
    m = 1e9 + 9 /* some nice prime */;
  }

  this.seed = () => {return seed; };

  let current = seed;

  this.nextInt = () => {
    current = (a * current + b) % m;
    return current;
  };

  this.getMaxInteger = () => {
    return m;
  };
  let dummy = this.nextInt();
}

PRNG.prototype.rand = function() {
  return this.nextInt() / this.getMaxInteger();
};

PRNG.prototype.randInt = function(a, b) {
  if (a > b) return this.randInt(b, a);
  return a + Math.floor((b - a) * this.rand());
};

// The default global.
g_default_prng = new PRNG(0);

// Tosses an unbalanced coin. Heads occurs with probability |p|.
function CoinToss(p, seed) {
  var rng = !!seed ? new PRNG(seed) : g_default_prng;
  this.Heads = {toString: () => { return "heads"; }};
  this.Tails = {toString: () => {return "tails"; }};
  p = Math.min(1.0, Math.max(0, p));

  this.toss = function() {
    return rng.rand() < p ? this.Heads : this.Tails;
  }
}

// Randomly select a subarray of the array. Each index might get selected
// independently from others WP "p".
function random_subarray(array, p, seed) {
  let coint_toss = new CoinToss(p, seed);
  var new_arr = [];
  for (var index = 0; index < array.length; ++index) {
    if (coint_toss.toss() === coint_toss.Heads) {
      new_arr.push(array[index]);
    }
  }
  return new_arr;
}

function global_id(len) {
  let alphabet = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(",");
  let id = "";
  for (var i = 0; i < len; ++i) {
    id += alphabet[g_default_prng.randInt(0, alphabet.length)];
  }
  return id;
}

/*
  Extract CSSProperty Structs from CSS Properties.

  Such an struct will be a container of an actual CSS Property and can be
  used to generate random CSS values.

  */

  g_css_property_gen_js_loaded = true;

  g_css_properties_map = {};

  function ReinitCSSPropertyGenerators(default_list) {
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

   if (accepts_color)
     generators.push(global_random_color_gen);
   if (accepts_numeric_pixels)
     generators.push(global_random_pixel_gen);
   if (accepts_numeric_percent)
     generators.push(global_random_percent_gen);
   if (keyword_values.length > 0)
     generators.push(new RandomKeywordGenerator(keyword_values));
 };

 CSSProperty.prototype.randomize = function() {
   if (!this.generators().length)
     return;
   // Pixel and Color generators are implicitly prioritized over the rest. They
   // are better things for animations.
   let g = this.generators()[0];
   if (this.generators().length > 1 &&
       (g_default_prng.rand() > 0.5)) {
    g = this.generators()[1];
   }
   s = g.next();
   this.value = () => { return s; };
 };

 g_css_properties_map = {};
 let keys = default_list;
 if (!keys || !keys.length) {
  keys = [];
  for (var index = 0; index < cs.length; ++index)
    keys.push(cs[index]);
 }

 keys.forEach( (key) => {
  g_css_properties_map[key] = new CSSProperty(key);
 });

 document.body.removeChild(div);
}

ReinitCSSPropertyGenerators();

/*
  DOM Helpers.

  Tools used to traverse trees and get all elements.

  */

  function ElementTree(root_el) {
    this.root = () => { return !!root_el ? root_el : document.body; }
  }

  function Element(e) {
    this.element = () => { return e; };
    let bounds = [];
    this.sample = (clear) => {
      if (clear)
        bounds = [];
      let last_id = bounds.length;
      bounds.push(new ElementRect(this.element()));
      let not_changed = last_id < 1 || bounds[last_id].approximatelyEquals(
        bounds[last_id - 1]);
      return not_changed ? null : bounds[last_id].diff(bounds[last_id - 1]);
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
    var body_bounds = document.body.getBoundingClientRect();
    let left = bounds.left - body_bounds.left,
        top = bounds.top - body_bounds.top;
    this.left = () => { return left; };
    this.top = () => { return top; };
    this.width = () => { return bounds.width; };
    this.height = () => { return bounds.height; };
  }

  ElementRect.prototype.diff = function(o) {
    return {
      left: (this.left() - o.left()),
      top: (this.top() - o.top()),
      width: (this.width() - o.width()),
      height: (this.height() - o.height())
    };
  };

  ElementRect.prototype.toString = function() {
    return `(${this.left()}, ${this.top()}) ${this.width()}x${this.height()}`;
  };

  ElementRect.prototype.approximatelyEquals = function(other, err) {
    let delta = this.diff(other);
    if (!err) err = 0.1;
    for (key in delta) {
      if (Math.abs(delta[key]) > err)
        return false;
    }
    return true;
  };

/*
   Instrumentation Logic.

   The actual test is implemented below.

   */

   let background_port = null;

   layout_animation_properties = {};

   function add_violating_animation(animation) {
    var css_property = animation.property().name();
    if (!(css_property in layout_animation_properties)) {
      layout_animation_properties[css_property] = [animation.summary()];
    } else {
      layout_animation_properties[css_property].push(animation.summary());
    }
  }

  function AnimationMonitor(animated_element, elements_to_monitor, property, raf_period, duration, callback) {
    let is_running = false, self = this;
    self.next_animation = null;
    self.element = () => { return animated_element; };
    self.all_elements = () => { return elements_to_monitor; };
    self.property = () => { return property; };
    self.raf_period = () => { return raf_period; };
    self.duration = () => { return duration; };
    self.set_is_running = (r) => { is_running = r; };
    self.is_running = () => { return is_running; };

    let raf_count = 0;
    function test_bounds() {
      for (var index = 0; index < self.all_elements().length; ++index) {
        let diff = self.all_elements()[index].sample();
        if (diff) {
          self.bounds_diff = diff;
          add_violating_animation(self);
        }
      }
    }

    function on_raf() {
      if (!self.is_running())
        return;

      if (raf_count++ % self.raf_period() === 0
        && !test_bounds()) {
        self.stop_monitoring();
      return;
    }

    window.requestAnimationFrame(on_raf);
  };
  self.start_monitoring = () => {
    is_running = true;
    window.requestAnimationFrame(on_raf);
  };
  self.stop_monitoring = () => { is_running = false; };
}

let animation_errors = [];
function record_animation_error(animation, error) {
  animation_errors.push({animation: animation, error: error});
}

AnimationMonitor.prototype.run = function(callback) {
  let new_progess = Math.floor(100 * window.current_animation_run_count++ / window.total_count_of_animations);
  if (new_progess !== progress) {
    progress = new_progess;
    console.log(`Progress ${progress}%`);
  }

  let self = this;
  self.all_elements().forEach( (e) => { e.sample(true); });
  let dom_element = self.element().element();
  function on_animationend() {
    self.stop_monitoring();
    if (!self.next_animation) {
      callback();
    }
    else {
      self.next_animation.run(callback);
    }
  }

  if (self.property().name() in layout_animation_properties) {
    if (self.next_animation)
      self.next_animation.run(callback);
    return;
  }

  self.frame_from = {};
  self.property().randomize();
  self.frame_from[self.property().name()] = self.property().value();
  self.frame_to = {};
  self.property().randomize();
  self.frame_to[self.property().name()] = self.property().value();
  try {
    dom_element.animate(
      [self.frame_from, self.frame_to],
      {duration: self.duration()});
  } catch(e) {
    record_animation_error(this, e);
    on_animationend();
  }
  self.start_monitoring();
  window.setTimeout(on_animationend, self.duration() + 10);
};

AnimationMonitor.prototype.summary = function() {
  return {
    property: this.property().name(),
    frames: [this.frame_from, this.frame_to],
    page_html: document.body.outerHTML,
    element_gid: this.element().element().getAttribute("global-unique-id"),
    bounds_diff: this.bounds_diff,
  }
}

var violating_animations = [];

async function startTest(root, params) {
  console.log("Creating test animations...");
  var animations = create_animations(root, params);
  window.total_count_of_animations = animations.length;
  window.current_animation_run_count = 0;
  window.progress = 0;
  console.log(`A total of ${total_count_of_animations} animations to run.`);
  animations[0].run(() => {
    console.log(layout_animation_properties);
    downloadData(layout_animation_properties);
    sendMessage(
      JSON.stringify({type: "test-done", result: layout_animation_properties}));
  });
}

function create_animations(root_element, params) {
  // Initialize RNG.
  set_global_prng_seed(params.seed);

  var tree = new ElementTree(root_element);
  var all_elements = tree.all_elements();
  all_elements.forEach( (e) => {
    e.element().setAttribute("global-unique-id", global_id(16));
  });
  var animated_elements = random_subarray(all_elements, params.animated_elements_percentage / 100);
  var css_properties = Object.keys(g_css_properties_map);
  if (params.css_properties !== "null") {
    css_properties = JSON.parse(params.css_properties);
    ReinitCSSPropertyGenerators(css_properties);
  }
  var all_animations =[];

  for (var index = 0; index < css_properties.length; ++index) {
    let property = g_css_properties_map[css_properties[index]];
    if (property.generators().length === 0) {
      // Did not find a way to generate random CSS values for this. Good chance
      // it is not an element style to begin with (e.g., 'animation-delay').
      continue;
    }
    for (var jndex = 0; jndex < animated_elements.length; jndex++) {
      let element = animated_elements[jndex];
      for (var kndex = 0; kndex < params.n_runs; ++kndex) {
        let animation = new AnimationMonitor(
          element,
          all_elements,
          property,
          params.sample_period,
          params.animation_duration * 1);
        all_animations.push(animation);
      }
    }
  }

  for (var index = 0; index < all_animations.length - 1; ++index) {
    all_animations[index].next_animation = all_animations[index + 1];
  }
  return all_animations;
}

function sendMessage(msg) {
  if (!background_port) {
    background_port = chrome.runtime.connect({name: "contents"});
  }
  background_port.postMessage(msg, "*");
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

function reportElementCound(e) {
  let t = new ElementTree(e);
  let c = t.all_elements().length;
  sendMessage({type: "count", count: c});
}
