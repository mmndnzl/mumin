$(function(){
$(".nav ul li a").click(function(){
  
  $(".container").load("hakkimda.html");
       
$( ".ust" ).animate({
    top:topUstData/200+"%",
   
  },500 );


$( ".alt" ).animate({
    bottom:topAltData/200+"%"
  },500,function(){
    
  });

    
  
  $(".nav").animate({
  opacity:"0"
 },500)
  
});

var topUstData=$(".ust").data("top");    
var topAltData=$(".alt").data("top");
setTimeout(function(){

   
$( ".ust" ).animate({
    top:topUstData+"%",
   
  }, 1500 );


$( ".alt" ).animate({
    bottom:topAltData+"%"
  }, 1500,function(){
     $(".nav").animate({
  opacity:"1"
 },1500)

  });



},500)




});