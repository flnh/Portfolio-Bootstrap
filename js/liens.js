var iframes = document.querySelectorAll('iframe');

window.addEventListener('load', function () {
  iframes.forEach(function (iframe) {
    iframe.contentWindow.document.querySelector('body').insertAdjacentHTML('afterBegin', '<div style="width:100vw;height:100vh;position:absolute;background-color:rgba(255,255,255,0.8);top:0;left:0;z-index:9999;margin:0;padding:0;"><h2 style="font-size:24px;color:black;text-align:center;">'+iframe.innerHTML+'</h2></div>')

    iframe.contentWindow.document.addEventListener('click', function (e) {
      window.open(e.toElement.baseURI, '_blank');
      console.log(e.toElement.baseURI);
    })
  })
})