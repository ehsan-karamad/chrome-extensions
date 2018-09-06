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
}

document.getElementById("element-count").addEventListener("click", () => {
    chrome.devtools.inspectedWindow.eval(
      "reportElementCound($0);",
      {useContentScriptContext: true});
});

let background_port = chrome.runtime.connect({name: "devtools"});

background_port.onMessage.addListener(function(message) {
  if (message.type === "count") {
    document.getElementById("element-count-value").innerHTML = `<<${message.count}>>`;
  }
});
