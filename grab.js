var url1 = require('system').args[1];

if (/http:.*\.dev/.test(url1)) {
  url2 = url1.replace(/^http:/, 'https:').replace(/.dev/,'.com');
} else {
  url2 = url1.replace(/^https:/, 'http:').replace(/.com/,'.dev');;
}

var page = require('webpage').create();

// PhantomJS defaults to a transparent background
page.evaluate(function() {
  var style = document.createElement('style'),
      text = document.createTextNode('body { background: #fff }');
  style.setAttribute('type', 'text/css');
  style.appendChild(text);
  document.head.insertBefore(style, document.head.firstChild);
});
page.viewportSize = { width: 1366, height: 768 };

page.open(url1, function () {
  console.log('Saved '+url1);
  page.render('url1.png');
  page.open(url2, function () {
    console.log('Saved '+url2);
    page.render('url2.png');
    phantom.exit();
  });
});