var iframes = document.querySelectorAll('iframe');

window.addEventListener('load', function () {
  iframes.forEach(function (iframe) {
    iframe.contentWindow.document.addEventListener('click', function (e) {
      e.preventDefault;
      console.log(e.toElement.baseURI);
    })
  })
})