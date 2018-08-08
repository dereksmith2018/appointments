$(document).ready(function(){
  $("#formOne").submit(function(event){
    var name = $("input#name").val();
    var reason = $("input#description").val();
    var date = $("input#appointment").val();
    var time = $("input#time").val();

    $("#name5").text(name);
    $("#describe5").text(reason);
    $("#date5").text(date);
    $("#time5").text(time);

    event.preventDefault();

  });


});
