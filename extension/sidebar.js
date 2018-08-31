let state = { monitor_bounds: false, monitor_interval: 1, threshold: 0.05, highlight: true };

let animation = {
  keyframes: [
    {filter: "invert(0%)"}, {filter: "invert(100%)"}, {filter: "invert(0%)"}
  ],
  settings: {
    duration: 1000
  }
};
state.animation = animation;

document.getElementById("bounds-monitor").addEventListener("click", onMonitorBounds);
document.getElementById("update-interval").addEventListener("mouseup", onUpdateInterval);
document.getElementById("update-interval").addEventListener("keyup", onUpdateInterval);
document.getElementById("test-animations").addEventListener("click", onStartTest);

chrome.runtime.onMessage.addListener(onMessage);

// Logic
function onMonitorBounds() {
  if (!state.monitor_bounds) {
    state.monitor_bounds = true;
    this.textContent = "Stop Monitoring";
  } else {
    state.monitor_bounds = false;
    this.textContent = "Start Monitoring";
  }
  updateState();
};

function onUpdateInterval() {
  state.monitor_interval= this.value;
  updateState();
}

function evalCode(code) {
  chrome.devtools.inspectedWindow.eval(
      code,
      { useContentScriptContext: true});
}

function updateState() {
  console.log(state);
  state.threshold = 0.01 * document.getElementById("threshold").value;
  evalCode(`setState($0, ${JSON.stringify(state)});`);
}

function onStartTest() {
  let optional_animations = {};
  let input_animations = document.getElementById("animations").value;
  let message = "Starting animations.";
  if (input_animations.length > 0) {
    try {
      optional_animations = JSON.parse(input_animations);
    } catch(e) {
      message += " Failed to parse input animations. Choosing default.";
      optional_animations = {};
    }
  }
  var animations = Object.keys(optional_animations).length === 0 ? default_animations : optional_animations;
  state.monitor_bounds = false;
  state.is_animation_test = true;
  state.monitor_interval = 1;
  state.node_percentage = document.getElementById("node-percentage").value;
  state.duration = document.getElementById("animation-duration").value;
  state.animations = JSON.parse(JSON.stringify(animations));
  state.message = message;
  evalCode(`setState(document.body, ${JSON.stringify(state)});`);
}

function onMessage(req, sender, sendResponse) {
  if (req.type === "test-results") {
  }
}
