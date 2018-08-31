// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Create a connection to the background page
var backgroundPageConnection = chrome.runtime.connect({
  name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    // Handle responses from the background page, if any
  });

// Relay the tab ID to the background page
chrome.runtime.sendMessage({
  tabId: chrome.devtools.inspectedWindow.tabId,
  scriptToInject: "instrument.js"
});


chrome.devtools.panels.elements.createSidebarPane("Layout Animation",
  (sidebar) => {
    sidebar.setPage("sidebar.html");
  });
