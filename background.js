chrome.runtime.onMessage.addListener((request) => {
  if (request.scheme === "dark") {
    chrome.browserAction.setIcon({
      path: { 48: "images/clippy128-orange.png" },
    });
  }
});

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, { file: "copyBranchScript.js" });
});