chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, {file: "copyBranchScript.js"})
});

chrome.browserAction.onClicked.addListener(() => {
  chrome.browserAction.setIcon({
    path: { 48: "images/clippy128-tick.png" },
  });

  setTimeout(() => { chrome.browserAction.setIcon({
    path: { 48: "images/clippy128-orange.png" },
  });
 }, 2000);
});