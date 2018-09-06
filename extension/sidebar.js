var background_page = chrome.runtime.connect({name: "sidebar"});

function get_value(id) {
  return document.getElementById(id).value;
}

function find_state() {
  return {
    seed: get_value("seed"),
    animated_elements_percentage: get_value("animate-share"),
    sample_period: get_value("sample-period"),
    animation_duration: get_value("animate-time"),
    n_runs: get_value("n-runs")
  }
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

function start() {
  let state = JSON.stringify(find_state());
  chrome.devtools.inspectedWindow.eval(
    `windows.foo = true;`,
    {useContentScriptContext: true});

  chrome.devtools.inspectedWindow.eval(
    `startTest($0, ${state});`,
    {useContentScriptContext: true});
}

chrome.runtime.connect({name: "devtools"});
