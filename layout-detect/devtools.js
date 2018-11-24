// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.devtools.panels.elements.createSidebarPane("Find Layout Animations",
  (sidebar) => {
    sidebar.setPage("sidebar.html");
  });
