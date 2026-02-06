$(document).ready(function () {
  $('<img src="images/12.gif" id="car">')
    .css({
      position: "relative",
      left: "0px",
    })
    .appendTo("body");
  $('<button id="btn">Move</button>')
    .css({ position: "relative", top: "100px" })
    .appendTo("body");
  $('<div id="changes"></div>').appendTo("body");

  $("#btn").click(function () {
    $("#car").animate(
      {
        left: "1000px",
      },
      {
        duration: 1500,
        // easing: "easeInBounce",
        easing: "swing",
        step: function (now) {
          $("#changes").text("Left position: " + Math.round(now) + "px");
        },
        complete: function () {
          $("#changes").text("Animation finished at 1000px");
        },
      },
    );
  });
});
