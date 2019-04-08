var express = require('express');
var router = express.Router();
var par,usr,pss

// === login ============================
const son= require("./son/usr");

// === get ============================

const getUsr = function(req, res, next) {
if (req.body.usr==son.usr && req.body.pss==son.pss) {
usr = son.usr;
pss=son.pss
req.session.usr=usr
req.session.pss=pss
} else if (req.session.usr==son.usr && req.session.pss==son.pss){
usr = son.usr;
pss=son.pss
}else{
usr = null;
console.log("no usr");
}
  next()};

var getPar=function(req, res, next) {
par=req.params.id
next()}

var chk=function(req, res, next) {
console.log(usr)
console.log(req.session)
next()}

var gcb= function(req, res, next) {

res.render("index", {
title: par,par:par,usr:usr,pss:pss
});
}

router.get('/', [getUsr,getPar,chk,gcb])
router.post('/', [getUsr,getPar,chk,gcb])

module.exports = router;
