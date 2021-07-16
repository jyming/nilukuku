let u = navigator.userAgent;
let device = u.indexOf("iPhone") > -1 ? 'iPhone' : u.indexOf("Android") > -1 ? 'Android' : '';
let mutual = function (type, fn) {
  if (device == 'Android') {
    try {
      window.AndroidWebView.showInfoFromJs(type);
    } catch (e) {
      console.log(e)
      if (fn) fn();
    }
  } else if (device == 'iPhone') {
    try {
      window.webkit.messageHandlers.sendContent.postMessage(type);
    } catch (e) {
      if (fn) fn();
    }
  } else {
    if (fn) fn();
  }
}
