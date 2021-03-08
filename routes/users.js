var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function (req, res, next) {
  console.log('headers : ' + JSON.stringify(req.headers));
  console.log('body : ' + JSON.stringify(req.body));
  var userpass = new Buffer.from((req.headers.authorization || '').split(' ')[1] || '', 'base64').toString();

  res.send('respond with a resource');
});

module.exports = router;
