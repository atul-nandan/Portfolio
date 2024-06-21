var tabtitle = document.getElementsByClassName('tab-title');
var titleinfo = document.getElementsByClassName('titleinfo');

function opentab(anytab) {
  for (i of tabtitle) {
    i.classList.remove("active");
  }
  for (j of titleinfo) {
    j.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(anytab).classList.add("active-content");
}

// ---------menubar------
var menuitems = document.getElementById("menuitems");

function openmenu() {
  menuitems.style.right = "0px";
}
function closemenu() {
  menuitems.style.right = "-200px";
}


// ---------GOOGLE SPREAD SHEET-------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbwZzpMEaMJ8GAe_-aY-nywCsgVkmJQORvjlBZNIxZPjH31NIqrNM0gZd1bPdylPhZF7/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message Sent Successfully !!!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})