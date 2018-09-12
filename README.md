# layout-animation-detect

This repositorry contains a simple chrome (devtools) extension to run a series of random CSS animations on a web page. The test then looks for any layout changes by repeatedly sampling the bounding rects off all the *important* elements on the page.

Bundled with the extension, comes two sample set of top 50 most popular animations used on Chrome for two different dates in September 2018. For more recent resuts see [chromestatus](https://www.chromestatus.com/metrics/css/animated).

# Usage

Follow these steps:
  1. Goto chrome://extensions
  2. Select developers mode.
  3. Load Unpacked extension (navigate to the extension folder).
  4. Open any page and inspect the page.
  5. On the elements sidebar, choose "Find Layout Animations" tab.
  6. Choose some simulation parameters as well as provide the list of test animated properties in json format (list of strings).
  7 Start.
  
 # What happens then?
 
 The extension will start a series of animations, one after another and during each animation will repeatedly sample `getBoundingClientRect()` of all the elements involved (this will be all the elments in the subtree of the selected element). The test will then subtract the `(left, top)` of the bounds for `document.body` and compares each sample with its previous value. If a noticeable change is observed, the currently running animation is flagged.
 
# Results
When the testing is done, a dict struct is downloaded as a `json` file. The keys of the dictioary are the CSS properties which have been found to cause a layout change. The value for each key is a list of upto three sample animations which have caused layout (as in the bounds for one or more elements have changed). The data for the animation will include the two keyframes in the animation, a `global-unique-id` for the element which was animated as well as the element which experienced the bounds change, and a snapshot of the whole page at that point.
