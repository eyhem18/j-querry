
var boldButton = $("#bold");
boldButton.click(function(){
$("#txt").css("font-weight", "bold");
})

var boldButton = $("#underline");
boldButton.click(function(){
$("#txt").css("textDecoration", "underline");
})


var boldButton = $("#italic");
boldButton.click(function(){
$("#txt").css("fontStyle", "ITALIC");
})


$("#bagra").change(function(){
  var selectedValue = $("#bagra").val();
  $("#txt").css("fontSize", selectedValue + "px");
})
$("#hayawan").change(function(){
  var selectedValue = $("#hayawan").val();
  $("#txt").css("fontFamily", selectedValue );
})
 



