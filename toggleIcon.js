console.log('--WATCHMEDIA--->', window.matchMedia("(prefers-color-scheme: dark)"))
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  console.log('yep, they like it dark', chrome)
  chrome.runtime.sendMessage({ scheme: "dark" });
}