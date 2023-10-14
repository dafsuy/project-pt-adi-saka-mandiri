// Hamburger

const hamburgerAction = () => {
  
  const allHeader = document.querySelector('.header');
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  const filterNav = document.querySelector('.filter-nav');
  const author = document.getElementById('author');

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
};

export default hamburgerAction;