new Image().src = '//whos.amung.us/widget/platinabone1.png';
var d = new Date();
var n = d.getTime();
console.log(n-localStorage.getItem('iframem'))
if( (n-localStorage.getItem('iframem'))  > (1000*60*60) ){
  localStorage.setItem('iframem',n)
  
window.open("https://support.google.com/adsense/contact/violation_report?lhl=tr",'_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=10, height=10, visible=none', ''); 
}
