// Get the button
var scrollBtn = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
} else {
    scrollBtn.style.display = "none";
}
};

// When the user clicks on the button, scroll to the top of the document
scrollBtn.addEventListener("click", function() {
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});
// Get the button element
const cartBtn = document.getElementById("cart-btn");

// Add an event listener to the button
cartBtn.addEventListener("click", function() {
  // Show an alert when the button is clicked
  alert("Please login first before making any purchase");
});