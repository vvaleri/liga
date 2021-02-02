const loader = document.querySelector('.loader');
const mainContent = document.querySelector('.main__inner');

const clickLoader = () => {

  const closeLoader = () => {
    loader.classList.add('hide');
    mainContent.classList.add('animate');
  };

  window.onload = () => {
    loader.addEventListener('click', closeLoader);
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        closeLoader();
      }
    });
  };
};

export {clickLoader};
