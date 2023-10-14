// Import main css
import '/style.css';

// preline
import '/node_modules/preline/dist/preline.js';

// import AOS
import '/node_modules/aos/dist/aos.css';
import AOS from 'aos';

// import splide
import Splide from '@splidejs/splide';
import '/node_modules/@splidejs/splide/dist/css/splide.min.css';
import { Intersection } from '@splidejs/splide-extension-intersection';

const allHeader = document.querySelector('.header');
const header = document.getElementById('home');
const author = document.getElementById('author');
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

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const filterNav = document.querySelector('.filter-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('translate-x-full');
  filterNav.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
  allHeader.classList.toggle('navbar-full-white');
  author.classList.add('author-change');
  setTimeout(() => {
    filterNav.classList.toggle('opacity-0');
  }, 100);
});

// AOS
AOS.init({
  once: false
});

// splide
let elms = document.getElementsByClassName('splide');
let i = 0;
const options = {
  type: 'loop',
  perPage: 1,
  gap: 10,
  focus: 'center',
  arrows: true,
  pagination: false,
  lazyLoad: true,
  autoplay: 'pause',
  intersection: {
    inView: {
      autoplay: true
    },
    outView: {
      autoplay: false
    }
  },
  breakpoints: {
    640: {
      perPage: 1,
      arrows: false
    }
  }
};

for (let i = 0; i < elms.length; i++) {
  new Splide(elms[i], options).mount({ Intersection });
}

// Request Page
function submitMessageWa() {
  let name = document.getElementById('name-form-wa').value;
  let waNumber = '62881025566737';
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

const btnPlus = document.getElementById('increase-product');
const btnMinus = document.getElementById('decrease-product');
const qty = document.getElementById('qty-form-order');
if (btnPlus && btnMinus && qty) {
  btnMinus.addEventListener('click', () => {
    if (qty.value > 1) {
      qty.value--;
    }
  });
  btnPlus.addEventListener('click', () => {
    qty.value++;
  });
}

document
  .getElementById('submit-form-wa')
  .addEventListener('click', submitMessageWa);
