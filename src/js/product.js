// Import main css
import '/style.css';

// preline
import '/node_modules/preline/dist/preline.js';

// import splide
import Splide from '@splidejs/splide';
import '/node_modules/@splidejs/splide/dist/css/splide.min.css';
import { Intersection } from '@splidejs/splide-extension-intersection';

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

// Hamburger Action
import hamburgerAction from '/src/js/modules/function.js';
hamburgerAction();
