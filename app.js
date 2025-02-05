// Turns on an indicator to scroll down if the user does nothing for 2 seconds
setTimeout(indicator, 2000);
function indicator() {
  document.getElementById("indicator").style.visibility = 'visible';
}

// Hides the scroll indicator if the user scrolls down
window.addEventListener('scroll',(event) => {
  document.getElementById("indicator").style.visibility = 'hidden';
});

// Each of these make the buttons send to their respective places
function github() {
  location.href="https://github.com/johnpstroud?tab=repositories";
}

function linkedin() {
  location.href="http://linkedin.com/in/jpstroud";
}

function gmail() {
  location.href="mailto:johnstroud701@gmail.com";
}
