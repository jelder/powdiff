var url1 = require('system').args[1];

if (/http:.*\.dev/.test(url1)) {
  url2 = url1.replace(/^http:/, 'https:').replace(/.dev/,'.com');
} else {
  url2 = url1.replace(/^https:/, 'http:').replace(/.com/,'.dev');;
}

// url2 = 'http://www.reddit.com/'

// PhantomJS defaults to a transparent background
var reset = function() {
  var style = document.createElement('style'),
      text = document.createTextNode('body { background: #fff }');
  style.setAttribute('type', 'text/css');
  style.appendChild(text);
  document.head.insertBefore(style, document.head.firstChild);
};

var page1 = require('webpage').create();
page1.evaluate(reset);
page1.viewportSize = { width: 1366, height: 768 };

var page2 = require('webpage').create();
page2.evaluate(reset);
page2.viewportSize = { width: 1366, height: 768 };

page1.open(url1, function () {
  console.log('Saved '+url1);
  page1.render('url1.png');
  page2.open(url2, function () {
    console.log('Saved '+url2);
    page2.render('url2.png');
    phantom.exit();
  });
});

