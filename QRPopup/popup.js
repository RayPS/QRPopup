chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    popQR(tablink)
});
init()


function popQR(chl,size) {
  if (size == null){var size = 300}
  var wndTitle = chl
  var qrUrl = "https://chart.googleapis.com/chart?cht=qr&chs="+size+"x"+size+"&chl="+chl
  var popUrl ="data:text/html;charset=utf-8,<html><head><title>"+wndTitle+"</title></head><body style=\"margin: 0px;\"><img style=\"-webkit-user-select: none\" src=\"" + qrUrl + "\"></body></html>"
  var _l = (screen.width/2)-(size/2);
  var _t = (screen.height/2)-(size/2);

  chrome.windows.create(
    {
      'url':popUrl,
      'type':'popup',
      'width':size,
      'height':size,
      'left':_l,
      'top':_t,
    })
}