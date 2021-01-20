const loader = document.querySelector('.loader');

const clickLoader = () => {

    const closeLoader = () => {
        loader.classList.add('hide')
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