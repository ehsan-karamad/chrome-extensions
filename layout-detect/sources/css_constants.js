// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

all_css_values = ["inherit", "initial", "none", "hidden", "inset", "groove", "outset", "ridge", "dotted", "dashed", "solid", "double", "caption", "icon", "menu", "message-box", "small-caption", "-webkit-mini-control", "-webkit-small-control", "-webkit-control", "status-bar", "italic", "oblique", "all", "common-ligatures", "no-common-ligatures", "discretionary-ligatures", "no-discretionary-ligatures", "historical-ligatures", "no-historical-ligatures", "contextual", "no-contextual", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "unicase", "titling-caps", "jis78", "jis83", "jis90", "jis04", "simplified", "traditional", "full-width", "proportional-width", "ruby", "lining-nums", "oldstyle-nums", "proportional-nums", "tabular-nums", "diagonal-fractions", "stacked-fractions", "ordinal", "slashed-zero", "normal", "bold", "bolder", "lighter", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large", "smaller", "larger", "serif", "sans-serif", "cursive", "fantasy", "monospace", "-webkit-body", "-webkit-pictograph", "swap", "fallback", "optional", "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow", "transparent", "-webkit-link", "-webkit-activelink", "activeborder", "activecaption", "appworkspace", "background", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "captiontext", "graytext", "highlight", "highlighttext", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infobackground", "infotext", "menutext", "scrollbar", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "window", "windowframe", "windowtext", "-internal-active-list-box-selection", "-internal-active-list-box-selection-text", "-internal-inactive-list-box-selection", "-internal-inactive-list-box-selection-text", "-webkit-focus-ring-color", "currentcolor", "grey", "-internal-quirk-inherit", "repeat", "repeat-x", "repeat-y", "no-repeat", "clear", "copy", "source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "xor", "plus-lighter", "baseline", "middle", "sub", "super", "text-top", "text-bottom", "top", "bottom", "-webkit-baseline-middle", "-webkit-auto", "left", "right", "inline-start", "inline-end", "center", "justify", "-webkit-left", "-webkit-right", "-webkit-center", "-webkit-match-parent", "-internal-center", "inter-word", "distribute", "outside", "inside", "disc", "circle", "square", "decimal", "decimal-leading-zero", "arabic-indic", "bengali", "cambodian", "khmer", "devanagari", "gujarati", "gurmukhi", "kannada", "lao", "malayalam", "mongolian", "myanmar", "oriya", "persian", "urdu", "telugu", "tibetan", "thai", "lower-roman", "upper-roman", "lower-greek", "lower-alpha", "lower-latin", "upper-alpha", "upper-latin", "cjk-earthly-branch", "cjk-heavenly-stem", "ethiopic-halehame", "ethiopic-halehame-am", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "hangul", "hangul-consonant", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "hebrew", "armenian", "lower-armenian", "upper-armenian", "georgian", "cjk-ideographic", "simp-chinese-formal", "simp-chinese-informal", "trad-chinese-formal", "trad-chinese-informal", "hiragana", "katakana", "hiragana-iroha", "katakana-iroha", "inline", "block", "flow-root", "list-item", "inline-block", "table", "inline-table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption", "-webkit-box", "-webkit-inline-box", "flex", "inline-flex", "grid", "inline-grid", "contents", "-webkit-flex", "-webkit-inline-flex", "layout", "inline-layout", "auto", "crosshair", "default", "pointer", "move", "vertical-text", "cell", "context-menu", "alias", "progress", "no-drop", "not-allowed", "zoom-in", "zoom-out", "e-resize", "ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "text", "wait", "help", "all-scroll", "grab", "grabbing", "-webkit-grab", "-webkit-grabbing", "-webkit-zoom-in", "-webkit-zoom-out", "ltr", "rtl", "capitalize", "uppercase", "lowercase", "visible", "collapse", "a3", "a4", "a5", "above", "absolute", "always", "avoid", "b4", "b5", "below", "bidi-override", "blink", "both", "close-quote", "embed", "fixed", "hand", "hide", "isolate", "isolate-override", "plaintext", "-webkit-isolate", "-webkit-isolate-override", "-webkit-plaintext", "landscape", "ledger", "legal", "letter", "line-through", "local", "no-close-quote", "no-open-quote", "nowrap", "open-quote", "overlay", "overline", "portrait", "pre", "pre-line", "pre-wrap", "relative", "scroll", "separate", "show", "static", "thick", "thin", "underline", "wavy", "-webkit-nowrap", "stretch", "start", "end", "clone", "slice", "reverse", "horizontal", "vertical", "inline-axis", "block-axis", "flex-start", "flex-end", "space-between", "space-around", "space-evenly", "unsafe", "safe", "row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse", "auto-flow", "dense", "read-only", "read-write", "read-write-plaintext-only", "element", "-webkit-min-content", "-webkit-max-content", "-webkit-fill-available", "-webkit-fit-content", "min-content", "max-content", "fit-content", "clip", "ellipsis", "discard", "break-all", "keep-all", "break-word", "space", "loose", "strict", "after-white-space", "manual", "checkbox", "radio", "push-button", "square-button", "button", "button-bevel", "inner-spin-button", "listbox", "listitem", "media-enter-fullscreen-button", "media-exit-fullscreen-button", "media-mute-button", "media-play-button", "media-overlay-play-button", "media-toggle-closed-captions-button", "media-slider", "media-sliderthumb", "media-volume-slider-container", "media-volume-slider", "media-volume-sliderthumb", "media-controls-background", "media-controls-fullscreen-background", "media-current-time-display", "media-time-remaining-display", "-internal-media-cast-off-button", "-internal-media-overlay-cast-off-button", "-internal-media-track-selection-checkmark", "-internal-media-closed-captions-icon", "-internal-media-subtitles-icon", "-internal-media-overflow-button", "-internal-media-download-button", "-internal-media-remoting-cast-icon", "-internal-media-control", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "meter", "progress-bar", "progress-bar-value", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "caret", "searchfield", "searchfield-cancel-button", "textfield", "textarea", "caps-lock-indicator", "round", "border", "border-box", "content", "content-box", "padding", "padding-box", "margin-box", "contain", "cover", "logical", "visual", "alternate", "alternate-reverse", "forwards", "backwards", "infinite", "running", "paused", "flat", "preserve-3d", "fill-box", "view-box", "ease", "linear", "ease-in", "ease-out", "ease-in-out", "step-start", "step-middle", "step-end", "steps", "frames", "cubic-bezier", "document", "reset", "zoom", "visiblePainted", "visibleFill", "visibleStroke", "painted", "fill", "stroke", "bounding-box", "spell-out", "digits", "literal-punctuation", "no-punctuation", "antialiased", "subpixel-antialiased", "optimizespeed", "optimizelegibility", "geometricprecision", "crispedges", "economy", "exact", "lr", "rl", "tb", "lr-tb", "rl-tb", "tb-rl", "horizontal-tb", "vertical-rl", "vertical-lr", "after", "before", "over", "under", "filled", "open", "dot", "double-circle", "triangle", "sesame", "ellipse", "closest-side", "closest-corner", "farthest-side", "farthest-corner", "mixed", "sideways", "sideways-right", "upright", "vertical-right", "on", "off", "optimizequality", "pixelated", "-webkit-optimize-contrast", "from-image", "nonzero", "evenodd", "at", "alphabetic", "fullscreen", "standalone", "minimal-ui", "browser", "sticky", "coarse", "fine", "on-demand", "hover", "multiply", "screen", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "scale-down", "balance", "-webkit-paged-x", "-webkit-paged-y", "drag", "no-drag", "span", "minmax", "each-line", "progressive", "interlace", "markers", "-internal-extend-to-zoom", "pan-x", "pan-y", "pan-left", "pan-right", "pan-up", "pan-down", "manipulation", "pinch-zoom", "last-baseline", "first-baseline", "first", "last", "self-start", "self-end", "legacy", "smooth", "scroll-position", "revert", "unset", "linear-gradient", "radial-gradient", "conic-gradient", "repeating-linear-gradient", "repeating-radial-gradient", "repeating-conic-gradient", "paint", "-webkit-cross-fade", "-webkit-gradient", "-webkit-linear-gradient", "-webkit-radial-gradient", "-webkit-repeating-linear-gradient", "-webkit-repeating-radial-gradient", "-webkit-image-set", "from", "to", "color-stop", "radial", "attr", "counter", "counters", "rect", "polygon", "format", "invert", "grayscale", "sepia", "saturate", "hue-rotate", "opacity", "brightness", "contrast", "blur", "drop-shadow", "url", "rgb", "rgba", "hsl", "hsla", "matrix", "matrix3d", "perspective", "rotate", "rotateX", "rotateY", "rotateZ", "rotate3d", "scale", "scaleX", "scaleY", "scaleZ", "scale3d", "skew", "skewX", "skewY", "translate", "translateX", "translateY", "translateZ", "translate3d", "x", "y", "z", "path", "ray", "sides", "calc", "-webkit-calc", "mandatory", "proximity", "style", "size", "auto-fill", "auto-fit", "var", "-internal-variable-value", "env", "avoid-page", "page", "recto", "verso", "avoid-column", "p3", "rec2020", "aliceblue", "antiquewhite", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "limegreen", "linen", "magenta", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rebeccapurple", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen", "alpha", "luminance", "accumulate", "new", "sRGB", "linearRGB", "butt", "miter", "bevel", "before-edge", "after-edge", "central", "text-before-edge", "text-after-edge", "ideographic", "hanging", "mathematical", "use-script", "no-change", "reset-size", "dynamic", "non-scaling-stroke"];