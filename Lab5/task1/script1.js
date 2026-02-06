$(document).ready(function () {
  var nav = $("<div id='nav'></div>").appendTo("body");

  var about = $("<span class='menu'>About</span>").appendTo(nav);
  var gallery = $("<span class='menu'>Gallery</span>").appendTo(nav);
  var services = $("<span class='menu'>Services</span>").appendTo(nav);
  var complain = $("<span class='menu'>Complain</span>").appendTo(nav);

  var servicesBox = $(`
    <div id="servicesBox">
      <div class="service-item">item #1</div>
      <div class="service-item">item #2</div>
      <div class="service-item">item #3</div>
      <div class="service-item">item #4</div>
      <div class="service-item">item #5</div>
      <div class="service-item">item #6</div>
    </div>
  `)
    .hide()
    .appendTo(nav);

  var aboutBox = $(`
    <div class="box">
      <h3>Story about snow man</h3>
    </div>
  `)
    .hide()
    .appendTo("body");

  var galleryBox = $(`
    <div id="galleryBox">
      <img id="left" src="../images/left.png">
      <img id="img">
      <img id="right" src="../images/right.png">
    </div>
  `)
    .hide()
    .appendTo("body");

  var imgs = [
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/3.jpg",
    "../images/4.jpg",
    "../images/5.jpg",
    "../images/6.jpg",
    "../images/7.jpg",
    "../images/8.jpg",
  ];
  var index = 0;

  var complainBox = $(`
  <div class="box">
    <h3>Complain</h3>
    <input id="name" placeholder="Name"><br><br>
    <input id="email" placeholder="Email"><br><br>
    <textarea id="msg" placeholder="Message"></textarea><br><br>
    <button id="send">Send</button>
  </div>
`)
    .hide()
    .appendTo("body");

  var previewSec = $(`
  <div id="previewSec" class="box">
    <h3>Preview</h3>
    <p><b>Name:</b> <span id="pName"></span></p>
    <p><b>Email:</b> <span id="pEmail"></span></p>
    <p><b>Message:</b> <span id="pMsg"></span></p>
    <button id="edit">Edit</button>
  </div>
`)
    .hide()
    .appendTo("body");

  function closeAll() {
    aboutBox.slideUp();
    galleryBox.slideUp();
    complainBox.slideUp();
    servicesBox.slideUp();
  }

  about.click(function () {
    closeAll();
    aboutBox.slideDown();
  });

  gallery.click(function () {
    closeAll();
    galleryBox.slideDown();
    index = 0;
    $("#img").attr("src", imgs[index]);
  });

  complain.click(function () {
    closeAll();
    complainBox.slideDown();
  });

  services.click(function () {
    aboutBox.slideUp();
    galleryBox.slideUp();
    complainBox.slideUp();
    servicesBox.slideToggle();
  });

  $("#send").click(function () {
    $("#pName").text($("#name").val());
    $("#pEmail").text($("#email").val());
    $("#pMsg").text($("#msg").val());
    complainBox.slideUp();
    previewSec.slideDown();
  });

  $("#edit").on("click", function () {
    previewSec.slideUp();
    complainBox.slideDown();
  });

  $("#left").click(function () {
    $("#img").fadeOut(300, function () {
      index--;
      if (index < 0) index = imgs.length - 1;
      $(this).attr("src", imgs[index]).fadeIn(300);
    });
  });

  $("#right").click(function () {
    $("#img").fadeOut(300, function () {
      index++;
      if (index >= imgs.length) index = 0;
      $(this).attr("src", imgs[index]).fadeIn(300);
    });
  });
});
