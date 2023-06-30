var leftCornerButton = document.getElementById("left-corner");
var footer = document.getElementById("footer");

leftCornerButton.addEventListener("click", function () {
  footer.classList.toggle("shrunk");
  leftCornerButton.classList.toggle("flip");
});
