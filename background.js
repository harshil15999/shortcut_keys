console.log("hello");
function create_new_tab(url) {
  chrome.tabs.create(
    {
      url: url,
      active: false,
    },
    
  );
}
var link;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
 

  if (request.status==200) {
    console.log(request)
   
    create_new_tab(request.url);

  }
  
});




