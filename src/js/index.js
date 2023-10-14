// Import main css
import '/style.css';

// preline
import '/node_modules/preline/dist/preline.js';

// import AOS
import '/node_modules/aos/dist/aos.css';
import AOS from 'aos';

// Hamburger Action
import hamburgerAction from '/src/js/modules/function.js';
hamburgerAction();

const header = document.getElementById('home');
const navList = document.getElementById('nav-list');

window.onscroll = () => {
  const fixedNav = header.offsetTop;
  const endHero = document.getElementById('hero').offsetHeight;
  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    // other header
  } else {
    header.classList.remove('navbar-fixed');
  }

  if (window.scrollY > endHero - 40) {
    header.classList.add('navbar-white');
    navList.classList.add('nav-text-white');
    author.classList.add('author-change');
  } else {
    navList.classList.remove('nav-text-white');
    header.classList.remove('navbar-white');
    author.classList.remove('author-change');
  }
};

// AOS
AOS.init({
  once: false
});

// Submit Form WA
function submitMessageWa() {
  let name = document.getElementById('name-form-wa').value;
  let waNumber = '6285894313138';
  let message = document.getElementById('text-form-wa').value;
  let textFormat;

  waNumber = waNumber.replace('+', '').replace(/\s/g, '');

  if (name == '' && message == '') {
    textFormat = '';
  } else {
    textFormat = `Haloo saya ${name}, ${message}`;
  }

  let waLink =
    'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(textFormat);

  window.location.href = waLink;

  document.getElementById('name-form-wa').value = '';
  document.getElementById('text-form-wa').value = '';
}

document
  .getElementById('submit-form-wa')
  .addEventListener('click', submitMessageWa);
