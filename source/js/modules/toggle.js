const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const main_content = document.querySelector('.main');
const toggle_content = document.querySelector('.main__content');


const openContent = () => {

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
    })

    main_content.addEventListener('click', (e) => {
        if (!e.target.classList.contains('header__wrapper')) {
            toggle_content.classList.toggle('active');
            document.body.classList.toggle('lock');
        }
    })
}

export {openContent}