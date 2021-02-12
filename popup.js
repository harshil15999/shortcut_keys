console.log("starting");

var basic_key_codes = new Set([17, 16]);
var number_codes = new Set([49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]);
var number_key_codes = new Set([97, 98, 99]);
var links={}
var number_mapping = {49:1, 50:2, 51:3, 52:4, 53:5, 54:6, 55:7, 56:8, 57:9,48:0};

function convert_keycode_integer(keycode){
  //*convert the pressed keycode to the dictionary reference
  if(number_mapping[keycode]){
    
    return number_mapping[keycode]
  }else{
    return NaN
  }

}


function fetch_first_ten_weblinks(class_name){
  //*get a dictionary of all website links 
  let weblinks = document.querySelectorAll(class_name);
  console.log(weblinks)
  for (i = 0; i < weblinks.length; i++){
      if(weblinks[i].querySelector(".LC20lb")){
        console.log(weblinks[i])
        let temp={}
        temp["site"]=weblinks[i].querySelector("a").href;
        temp["opened"]=false
        links[i+1]=temp
        console.log(links)
    }
  }
  console.log(links)
return links
}

function send_message(status, url_link) 
{
  //*Sending the chrome api a request to open a new tab url
  chrome.runtime.sendMessage(
    { status: status, url: url_link },
    function (response) {
      console.log(response);
    }
  );
}

//* Re implementation of the addition of event listerrs
var events_log = new Set();

function add_events_log() 
{
  document.addEventListener("keydown", (event) => {
    var temp = [];
    console.log(event);
    if (event.keyCode == 17 || event.keyCode == 16) {
      events_log.add(event.keyCode);
    }
    if (number_codes.has(parseInt(event.keyCode)) == true) 
    {
      events_log.add(event.keyCode);

      if ((events_log.size >= 3) & events_log.has(17) & events_log.has(16)) {
        console.log(events_log)
        console.log(links)
        //*TODO: 
        let x=convert_keycode_integer(event.keyCode)
        if(x){
          console.log(links[x].site)
          send_message(200,links[x].site)
        }else{
          console.log("FAILE")
        }
        
      }
    }
    console.log(events_log);
  });

  document.addEventListener("keyup", (event) => {
    if (event.keyCode == 17 || event.keyCode == 16) {
      events_log.clear();
    }
    console.log("this is the cleaned up one :" + events_log);
  });
}

fetch_first_ten_weblinks(".yuRUbf");
add_events_log();
