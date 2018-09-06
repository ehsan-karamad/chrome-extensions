// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let devtools_port = null;
let contents_port = null;

chrome.runtime.onConnect.addListener(on_connect);

function on_connect(incomming_port) {
    if (incomming_port.name === "devtools") {
        devtools_port = incomming_port;
        devtools_port.onMessage = on_devtools_message;
    }
    if (incomming_port.name === "contents") {
        contents_port = incomming_port;
        contents_port.onMessage = on_contents_message;
    }
};


function on_devtools_message(message) {

}

function on_contents_message(message) {
    if (message.type === "test-done") {
        devtools_port.postMessage({type: "test-done"}, "*");
    }
}


