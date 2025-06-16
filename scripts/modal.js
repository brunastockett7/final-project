/* eslint-env browser */
/* eslint-disable no-undef */
 

// Get the modal, button, and close elements
const modal = document.getElementById("workoutModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-btn");

// Check if modal elements exist before attaching events to avoid errors
if (openModalBtn && closeModalBtn && modal) {
  // When the user clicks the button, open the modal
  openModalBtn.onclick = function() {
    modal.style.display = "block";  // Show the modal
  }

  // When the user clicks on the close button, close the modal
  closeModalBtn.onclick = function() {
    modal.style.display = "none";  // Hide the modal
  }

  // When the user clicks anywhere outside the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";  // Hide the modal if clicked outside
    }
  }
}


