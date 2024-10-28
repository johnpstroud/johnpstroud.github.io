// Turns on an indicator to scroll down if the user does nothing for 2 seconds
setTimeout(myFunction, 2000);
function myFunction() {
  document.getElementById("indicator").style.visibility = 'visible';
}

// Hides the scroll indicator if the user scrolls down
window.addEventListener('scroll',(event) => {
  document.getElementById("indicator").style.visibility = 'hidden';
});