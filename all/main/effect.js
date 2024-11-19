/* For mouse/cursor */

window.onscroll = function() {
  var video = document.querySelector('.backvideo');
  var scroll = window.scrollY;
  var opacity = 1 - (scroll / 300);
video.style.opacity = opacity;
};




/* For menu button */

const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener ( 'click', () => {
nav.classList.add('open-nav')
})

close.addEventListener ( 'click', () => {
nav.classList.remove('open-nav')
})



/* For smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

/* For smooth scroll to top /#home*/

document.querySelector("a[href='#home']").addEventListener("click", function() {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});