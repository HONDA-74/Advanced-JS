$(document).ready(function () {
  $("<img src='images/31.jpg' id='droppable'>")
    .css({ position: "absolute", left: "700px" , top: "100px"})
    .appendTo("body");
  $("<img src='images/21.jpg' id='dragable'>")
    .css({ position: "absolute", left: "0px" })
    .appendTo("body").draggable();

  $("#droppable").droppable({
    drop: function (event, ui) {
      $("#dragable").fadeOut(1000);
    },
  });
});
