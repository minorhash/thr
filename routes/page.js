var express = require('express');
var router = express.Router();
var par,arr

var getArr=function(req, res, next) {
arr=["cub","par","geo","ste"]

next()}

var chk=function(req, res, next) {
par=req.params.id

next()}

// get
var pcb= function(req, res, next) {
console.log(par)
var bod=req.body
//console.log(bod)

res.render("page", {
par: par,bod:bod,arr:arr
});
}

// router.get("/page-:id",function(req,res){
// console.log(req.baseUrl)
//})

router.get('/page-:id', [getArr,chk,pcb])
router.post('/page-:id', [getArr,chk,pcb])
// post


module.exports = router;
