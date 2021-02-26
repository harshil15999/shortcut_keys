console.log("hello");
function create_new_tab(url, id) {
  chrome.tabs.create({
    url: url,
    active: false,
    index: id,
  });
}
var link;
chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request.status == 200) {
    console.log(request);
    console.log(sender.tab.index + request.count);
    create_new_tab(request.url, sender.tab.index + request.count);
  }
  console.log("sent from tab.id ", sender.tab.index);
});
