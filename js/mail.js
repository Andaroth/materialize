$(document).ready(function(){
  $("#select1").val("none");
  $("#sendbtn").attr("disabled",true);
  $("#sendbtn,#name,#email,#textarea1,.formlabel").addClass("hide");
  $("#select1").change(function() {
    var type = $("#select1").val();
    if (type == "none") {
      $("#sendbtn,#name,#email,#textarea1,.formlabel").addClass("hide");
      $("#sendbtn,#name,#email,#textarea1").attr("disabled",true);
    } else {
      $("#sendbtn,#name,#email,#textarea1,.formlabel").removeClass("hide"); 
      $("#name,#email,#textarea1").removeAttr("disabled");
    } // else/if end
  }); // change end
  $(".forminput").keyup(function(){
    var name = $("#name").val(), email = $("#email").val(), type = $("#select1").val(), msg = $("#textarea1").val();
    switch(type){
      case "onepage": type="Site une page"; break;
      case "multipage": type="Site multi-page"; break;
      case "eshop": type="Boutique en ligne"; break;
      case "pro": type="Site pro sur mesure"; break;
      default: type="Message"; break;
    } // switch end
    $("#sendbtn").attr("href","mailto:ax.fiolle@gmail.com?subject=["+type+"] "+name+" (mail: "+email+")&body="+msg);
    if((name.length > 0) && (email.length > 0) && (msg.length > 0) ){
      $("#sendbtn").removeAttr("disabled");
    } else {$("#sendbtn").attr("disabled",true);}
  }); // keyup end
}); // ready end