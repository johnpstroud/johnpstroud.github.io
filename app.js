// Types out the namecard at the top of the page
var i = 0;
var text = "Hey, I'm John Stroud. I create functional and mobile-friendly web applications."
var speed = 50;

setTimeout(write, 300);
function write() {
  if (i < text.length) {
    document.getElementById("namecard").innerHTML += text.charAt(i);
    i++;
    setTimeout(write, speed);
  }
}

// Turns on an indicator to scroll down if the user does nothing for 6 seconds
setTimeout(indicator, 6000);
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