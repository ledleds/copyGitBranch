chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, {file: "copyBranchScript.js"}, (result) => {
    result && result.length && result[0] !== null && showTickIcon();
  });
});

function showTickIcon() {
  chrome.browserAction.setIcon({
    path: { 48: "images/clippy128-tick.png" },
  });

  setTimeout(() => { chrome.browserAction.setIcon({
    path: { 48: "images/clippy128-orange.png" },
  });
 }, 1000);
};