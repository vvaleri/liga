const loader = document.querySelector('.loader');
const main_content = document.querySelector('.main__inner')

const clickLoader = () => {

    const closeLoader = () => {
        loader.classList.add('hide');
        main_content.classList.add('animate');
    }

    window.onload = () => {
        loader.addEventListener('click', closeLoader);
        document.addEventListener('keydown', (e) => {
           if (e.code === 'Enter') {
            closeLoader();
           }
        })
    }
}

export {clickLoader}