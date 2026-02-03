var img1 = document.getElementById("icon1");
var img2 = document.getElementById("icon2");
var img3 = document.getElementById("top");

img1.style.position = "absolute";
img1.style.left = "0px";
img1.style.top = "230px";

img2.style.position = "absolute";
img2.style.left = "450px";
img2.style.top = "230px";

img3.style.position = "absolute";
img3.style.left = "250px";
img3.style.top = "460px";

var interval = null;

var dx1 = dx2  = dy3 = 10;

btn = document.getElementById("go");
document.getElementById("go").onclick = function () {
  if (interval) {
    clearInterval(interval);
    interval = null;
    btn.innerHTML = "Go";
    return;
  }
  btn.innerHTML = "Stop";
  interval = setInterval(function () {
    var cWidth = parseInt(getComputedStyle(container).width);
    var cHeight = parseInt(getComputedStyle(container).height);

    let img1Left = parseInt(getComputedStyle(img1).left);
    let img1Width = parseInt(getComputedStyle(img1).width);

    if (img1Left + img1Width + 10 >= cWidth || (img1Left <= 0 && dx1 < 0)) {
      dx1 = -dx1;
    }


    img1.style.left = img1Left + dx1 + "px";




    let img2Left = parseInt(getComputedStyle(img2).left);
    let img2Width = parseInt(getComputedStyle(img2).width);


    if (img2Left + img2Width + 10 >= cWidth || (img2Left <= 0 && dx2 < 0)) {
      dx2 = -dx2;
    }


    img2.style.left = img2Left + dx2 + "px";





    let img3Top = parseInt(getComputedStyle(img3).top);
    let img3Height = parseInt(getComputedStyle(img3).height);


    if (img3Top + img3Height + 10 >= cHeight || (img3Top <= 0 && dy3 < 0)) {
      dy3 = -dy3;
    }

    img3.style.top = img3Top + dy3 + "px";
  }, 100);
};

document.getElementById("stop").onclick = function () {
  clearInterval(interval);
};

document.getElementById("reset").onclick = function () {
  clearInterval(interval);
  img1.style.left = "0px";
  img1.style.top = "230px";
  img2.style.left = "450px";
  img2.style.top = "230px";
  img3.style.top = "460px";
  dx1 = dx2 = dy3 = 10;
};


