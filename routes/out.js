var express = require('express');
var router = express.Router();
var usr

var clrSes= function(req, res, next) {
usr=null;
req.session.destroy()
    //req.session = null;
next()};

var chk = function(req, res, next) {
  console.log('=== log out === ');
  console.log(usr)
  console.log(req.session);
  next()};

var rcb = function(req, res) {
res.render('out', {
title: 'logged out',
usr: usr
});
};

router.get('/out', [clrSes, chk, rcb]);
router.post('/out', [clrSes, chk, rcb]);

module.exports = router;
