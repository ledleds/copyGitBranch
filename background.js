chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, {file: "copyBranchScript.js"}, () => {
    setIcon();
  });
});

function setIcon() {
  chrome.browserAction.setIcon({
    path: { 48: "images/clippy128-tick.png" },
  });

  setTimeout(() => { chrome.browserAction.setIcon({
    path: { 48: "images/clippy128-orange.png" },
  });
 }, 2000);
};