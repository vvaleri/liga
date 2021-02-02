const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

const openMenu = () => {

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
  });

};

export {openMenu};
