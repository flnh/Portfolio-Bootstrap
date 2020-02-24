var iframes = document.querySelectorAll('iframe');

window.addEventListener('load', function () {
  iframes.forEach(function (iframe) {
    iframe.contentWindow.document.addEventListener('click', function (e) {
      window.open(e.toElement.baseURI, '_blank');
      console.log(e.toElement.baseURI);
    })
  })
})