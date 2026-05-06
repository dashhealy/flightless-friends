document.getElementById("unlockButton").addEventListener("click", function () {
  // Re-enable scrolling by resetting styles
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto"; // Refers to the <html> tag

  // Optional: Hide the button after use
  this.style.display = "none";
});
