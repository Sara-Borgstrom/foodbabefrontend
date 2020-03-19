const navSlider = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navList = document.querySelectorAll('.nav-list li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forward ${index / 7 + 1.5}s`;
      }
    });
  });
}
navSlider();