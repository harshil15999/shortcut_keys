console.log("hello");
function create_new_tab(url) {
  chrome.tabs.create(
    {
      url: url,
      active: false,
    },
    () => {
      console.log("success");
    }
  );
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.url) {
    create_new_tab(request.url);
    console.log(sender.tab.url);
    console.log(request.url);

    sendResponse({ farewell: "success" });
  }
});
