var nameLink = document.getElementById("name-link");
var nameForm = document.getElementById("name-form");

nameLink.addEventListener("click", function() {
  console.log("Name link clicked.");
  nameForm.classList.toggle("fade");
  setTimeout(function() {
    nameForm.classList.toggle("noshow");
  }, 500);
})