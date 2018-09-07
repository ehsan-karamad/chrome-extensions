function get_value(id) {
  return document.getElementById(id).value;
}

css_properties_from_user = null;

function find_state(callback) {
  return {
    seed: get_value("seed"),
    animated_elements_percentage: get_value("animate-share"),
    sample_period: get_value("sample-period"),
    animation_duration: get_value("animate-time"),
    n_runs: get_value("n-runs"),
    css_properties: JSON.stringify(css_properties_from_user)
  };
}

function disable_button() {
  let b = document.getElementById("start");
  b.disabled = true;
  b.textContent = "Working...";
}

function enable_button() {
  let b = document.getElementById("start");
  b.disabled = false;
  b.textContent = "Start";
}

document.getElementById("start").addEventListener("click", start);

var loading_input_file = false;
document.getElementById("input-json").addEventListener("change", (e) => {
  disable_button();
  let reader = new FileReader();
  reader.addEventListener("load", (load_event) => {
    css_properties_from_user = JSON.parse(load_event.target.result);
    enable_button();
  });
  reader.readAsText(e.target.files[0]);
});

function start() {
  let state = JSON.stringify(find_state());
  chrome.devtools.inspectedWindow.eval(
    `startTest($0, ${state});`,
    {useContentScriptContext: true});
  disable_button();
}

let background_port = chrome.runtime.connect({name: "devtools"});

background_port.onMessage.addListener(function(message) {
  if (message.type === "count") {
    on_element_count_received(message.data);
  } else if (message.type === "test-done") {
    enable_button();
  }
});


var area_min_input = document.getElementById("area-min");
var area_max_input = document.getElementById("area-max");

area_min_input.addEventListener("change", on_area_changed);
area_max_input.addEventListener("change", on_area_changed);

function on_area_changed() {
  let min = area_min_input.value;
  let max = area_max_input.value;
  if (max <= min) {
    max = min + 1;
    area_max_input.value = max;
  }

  chrome.devtools.inspectedWindow.eval(
      `reportElementCountWithinAreaRange($0, ${min}, ${max});`,
      {useContentScriptContext: true});
}
