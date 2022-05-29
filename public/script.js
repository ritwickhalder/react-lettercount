$("#text").keyup(function(){
  var count = $(this).addClass("bb").val().length;
  $("#count").html(count);
  if($(this).val() == "" || $(this).val() == " "){
    $(this).addClass("nn").removeClass("bb");
  }else {
    $(this).addClass("bb").removeClass("nn");
  }
})