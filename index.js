var express = require('express');
var fs = require('fs');

var app = express();

app.set('port', 3000);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Express Sample' });
});

app.get('/svg', function (req, res) {
  var sys = require('util')
  var execSync = require('child_process').execSync;
  var inkscape = 'inkscape -z -T -f ./sample.svg -l /tmp/out.svg';
  var result = execSync(inkscape).toString();
  console.log(result);
  var buf = fs.readFileSync('/tmp/out.svg');
  res.send(buf, { 'Content-Type': 'image/svg+xml' }, 200);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
