$(document).ready(function(){
  $("#name,#email,#select1,#textarea1").val("");
  $("#sendbtn").attr("disabled",true);
  $(".forminput").keyup(function(){
    var name = $("#name").val(),
        email = $("#email").val(),
        type = $("#select1").val(),
        msg = $("#textarea1").val();
    switch(type){
      case "onepage": type="Site une page"; break;
      case "multipage": type="Site multi-page"; break;
      case "eshop": type="Boutique en ligne"; break;
      case "pro": type="Site pro sur mesure"; break;
      default: type="Message"; break;
    }
    $("#sendbtn").attr("href","mailto:ax.fiolle@gmail.com?subject="+type+" par "+name+" (mail: "+email+")&body="+msg);
    if((name.length > 0) &&
      (email.length > 0) &&
      (msg.length > 0) ){
      $("#sendbtn").removeAttr("disabled");
    } else {$("#sendbtn").attr("disabled",true);}
  });
});