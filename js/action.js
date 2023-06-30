var leftCornerButton = document.getElementById("left-corner");
var footer = document.getElementById("footer");
// var leftCorner = document.getElementById("left-corner");

leftCornerButton.addEventListener("click", function () {
  footer.classList.toggle("shrunk");
  leftCornerButton.classList.toggle("flip");
  // if (footer.classList.contains("shrunk")) {
  //   leftCorner.style.left = "0px";
  // } else {
  //   leftCorner.style.left = "20px";
  // }
});
