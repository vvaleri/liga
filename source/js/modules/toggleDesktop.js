const mainContent = document.querySelector('.main');
const toggleContent = document.querySelector('.main__content');

const breakpoint = window.matchMedia('(max-width:768px)');


const openContent = () => {
  breakpoint.addEventListener('change', (e) => {
    if (e.matches) {
      mainContent.addEventListener('click', isToggle);
    } else {
      mainContent.removeEventListener('click', isToggle);
    }
  });
};

function isToggle(e) {
  if (!e.target.classList.contains('header__wrapper')) {
    toggleContent.classList.toggle('active');
    document.body.classList.toggle('lock');
  }
}

export {openContent};
