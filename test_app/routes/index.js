var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET learn page. */
router.get('/learn', function(req, res, next) {
    res.render('learn', { title: 'Express' });
});
/* GET login page. */
router.get('/login', function(req, res, next) {
    res.render('login', {title: 'Express'});
});
/* GET forgot_pass page. */
router.get('/forgot_pass', function(req, res, next) {
    res.render('forgot_pass', {title: 'Express'});
});

module.exports = router;


