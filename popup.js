console.log("starting");
// !send the weblink json file before executing the document event listeners

function printing_values() {
  var store = new Array();
  let weblinks;
  var links = {};
  weblinks = document.querySelectorAll(".yuRUbf");
  var i;
  for (i of weblinks) {
    var x = i.querySelector("a").href;
    store.push(x);
  }
  var i;
  for (i = 0; i < weblinks.length; i++) {
    link_status = {}; // will have the weblink and opened status
    link_status["site"] = store[i].href;
    link_status["opened"] = false;
    links[i + 1] = link_status;
  }

  return links;
}

var weblinks = printing_values();

document.addEventListener("keydown", (event) => {
  var l = [];
  var time = [];
  console.log(event);
  if (event.key == "Control") {
    console.log("s");
    l.push(event.code);
    time.push(event.timeStamp);

    document.addEventListener("keydown", (event) => {
      if (event.key == "Shift") {
        l.push(event.code);
        time.push(event.timeStamp);

        console.log("h");

        document.addEventListener("keydown", (event) => {
          var x = event.code;
          var y = x.charAt(x.length - 1);
          y = parseInt(y);

          l.push(event.code);
          time.push(event.timeStamp);
          //console.log(l);
          /* TO DO:
                      instead of opening and switching tab 
                      the new link be opened in new tab and current tab remains*/
          console.log("hello");
          chrome.runtime.sendMessage({ url: weblinks[y] }, function (response) {
            console.log(response.farewell);
          });

          //window.open(weblinks[y], "_self");
          //window.focus();
        });
      }
    });
  }
});
