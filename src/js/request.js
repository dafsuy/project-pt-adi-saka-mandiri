// Import main css
import '/style.css';

// preline
import '/node_modules/preline/dist/preline.js';

// Email JS
import emailjs from '@emailjs/browser';
emailjs.init('P15liy6TxleJVxpsb');
// Hamburger Action
import hamburgerAction from '/src/js/modules/function.js';
hamburgerAction();

// Product quantity
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
// id grab
const title = document.getElementById('title-form-order');
const firstName = document.getElementById('first-name-form-order');
const lastName = document.getElementById('last-name-form-order');
const phone = document.getElementById('phone-form-order');
const email = document.getElementById('email-form-order');
const product = document.getElementById('type-of-product-form-order');
const quantity = document.getElementById('qty-form-order');
const desc = document.getElementById('desc-form-order');
const submitBtn = document.getElementById('submit-form-order');
const formInputs = document.querySelectorAll('.input');
const loading = document.getElementById('loading');

// Submit Form
const sendEmail = () => {
  let templateParams = {
    nama: `${title.value} ${firstName.value} ${lastName.value}`,
    email: email.value,
    telepon: phone.value,
    produk: product.value,
    jumlah: quantity.value,
    deskripsi: desc.value
  };

  const serviceId = 'service_e36znwc';
  const templateId = 'template_towt8sf';
  emailjs
    .send(serviceId, templateId, templateParams)
    .then((res) => {
      title.value = '';
      firstName.value = '';
      lastName.value = '';
      phone.value = '';
      email.value = '';
      product.value = '';
      quantity.value = '1';
      desc.value = '';
      console.log(res);
      setTimeout(() => {
        document.getElementById('success').classList.toggle('hidden');
      }, 5000);
      document.getElementById('loading').classList.toggle('invisible');
      document.getElementById('submit-form-order').classList.toggle('invisible');
      document.getElementById('success').classList.toggle('hidden');
    })
    .catch((err) => {
      console.log(err);
      setTimeout(() => {
        document.getElementById('fail').classList.toggle('hidden');
      }, 5000);
      document.getElementById('loading').classList.toggle('invisible');
      document.getElementById('submit-form-order').classList.toggle('invisible');
      document.getElementById('fail').classList.toggle('hidden');
    });
};

submitBtn.addEventListener('click', function() {
  let isValid = true;
  // Toggle loading and button

  loading.classList.toggle('invisible');
  document.getElementById('submit-form-order').classList.toggle('invisible');
  // Check Input
  formInputs.forEach((input) => {
    if (input.value.trim() === '') {
      isValid = false;
      return;
    }
  });

  setTimeout(() => {
    if (isValid === false) {
      setTimeout(() => {
        document.getElementById('fail').classList.toggle('hidden');
      }, 5000);
      document.getElementById('loading').classList.toggle('invisible');
      document.getElementById('submit-form-order').classList.toggle('invisible');
      document.getElementById('fail').classList.toggle('hidden');
      window.location.href = '#'
    }
    if (isValid === true) {
      sendEmail(); // Submit formulir jika valid
    }
  }, 500);
});
