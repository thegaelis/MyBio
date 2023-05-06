const menu= document.querySelector(".navbar_links")
const menuButton= document.querySelector(".navbar_icons")
  
  menuButton.addEventListener('click',()=>{
      menu.classList.toggle("navbar_open");
      menuButton.classList.toggle("open");
  
  });
function show_alert() {
    if(!alert("Message sent! Thai will message you soon ^^")) {
      return false;
    }
    this.form.submit();
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
