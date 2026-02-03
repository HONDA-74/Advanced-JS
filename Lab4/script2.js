var img = document.images[0];

img.addEventListener("click", function () {
  img.style.position = "absolute";
  img.style.right = "0px";
  img.style.top = "0px";

  var img2 = img.cloneNode(true);
  img2.style.position = "absolute";
  img2.style.left = "0px";
  img2.style.top = "70%";
  document.body.append(img2);

  var navContainer = document.getElementById("navigation");
  var ul = document.getElementById("nav");

  navContainer.style.position = "absolute";
  navContainer.style.left = "50%";
  navContainer.style.top = "50%";

  ul.style.listStyleType = "circle";
});
