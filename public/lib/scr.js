$(document).ready(function(){
$(window).scroll(function(){
var scroll = $(window).scrollTop();
console.log(scroll)
if (scroll > 840) {
$(".scr").css("background-color" , "rgba(0, 0, 0, 1)");
}else{
$(".scr").css("background-color" , "rgba(0, 0, 0, 0.1)");
}
})
})
