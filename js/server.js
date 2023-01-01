(function () {
    document.querySelector(".theme__btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})()

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0);
})




const textBtns = document.querySelectorAll('.contact__btn');

textBtns.forEach(textBtn => {
    let text = textBtn.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})


// TO SHOW HIDE NAV MENU

const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


openBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
})


const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav)
