// Store DOM elements for each form and set them to be 
// hidden by default
var nameLink = document.getElementById("name-link");
var nameForm = document.getElementById("name-form");
nameForm.open = false;

var stylingLink = document.getElementById("styling-link");
var stylingForm = document.getElementById("styling-form");
stylingForm.open = false;

var storeLink = document.getElementById("store-link");
var storeForm = document.getElementById("store-form");
storeForm.open = false;

var storeSelectionLeft = document.getElementById("store-selection-left");
var storeSelectionRight = document.getElementById("store-selection-right");


// Set link opacity depending on whether that form is visible
function linkOpacity(form, link) {
  if (form.open) {
    link.classList.remove("half-opacity");
  } else {
    link.classList.add("half-opacity");
  }  
}

// Reusable function for hiding a visible form when clicked
function hideForm(form, link) {
  form.style.height = 0;
  form.style.opacity = 0;
  form.open = false;
  linkOpacity(form, link);
}

// Shows a hidden form when it's link is clicked
function showForm(form, link) {
  form.style.height = '275px';
  form.style.opacity = 1;
  form.open = true;
  linkOpacity(form, link);
}

// Event listener for name form link
nameLink.addEventListener("click", function() {
  if(nameForm.open){
    hideForm(nameForm, nameLink);
  } else {
    //If the form is hidden, show it and hide other forms
    showForm(nameForm, nameLink);
    hideForm(stylingForm, stylingLink);
    hideForm(storeForm, storeLink);
  }
});

// Event listener for styling form link
stylingLink.addEventListener("click", function() {
  if(stylingForm.open){
    hideForm(stylingForm, stylingLink);
  } else {
    //If the form is hidden, show it and hide other forms
    showForm(stylingForm, stylingLink);
    hideForm(nameForm, nameLink);
    hideForm(storeForm, storeLink);
  }
});

// Event listener for store info form link
storeLink.addEventListener("click", function() {
  if(storeForm.open){
    hideForm(storeForm, storeLink);
  } else {
    //If the form is hidden, show it and hide other forms
    showForm(storeForm, storeLink);
    hideForm(nameForm, nameLink);
    hideForm(stylingForm, stylingLink);
  }
});


// When a store selection is clicked, toggle all store
// selections active statuses
function toggleActiveStore () {
  storeSelectionRight.classList.toggle("store-selection-active");
  storeSelectionLeft.classList.toggle("store-selection-active");
}

storeSelectionRight.addEventListener("click", toggleActiveStore);
storeSelectionLeft.addEventListener("click", toggleActiveStore);