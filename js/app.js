const scrollBtn = document.getElementById('scroll-btn');

scrollBtn.addEventListener('mouseup', topFunction);
scrollBtn.addEventListener('mouseover', scrollFunction);

window.onscroll = () => {scrollFunction();}
window.onwheel = () => {scrollFunction();}


function hideButton() {
  // scrollBtn.style.display = "none";
  scrollBtn.style.opacity = 0;
  scrollBtn.style.padding = 0;
  scrollBtn.style.height = 0;
}

function showButton() {
  // scrollBtn.style.display = "block";
  scrollBtn.style.opacity = 1;
  scrollBtn.style.padding = '.375rem .75rem';
  scrollBtn.style.height = 'auto';
}

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    showButton();
  } else {
    hideButton();
  }
};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
