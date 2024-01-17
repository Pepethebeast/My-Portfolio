let open_menu = document.querySelectorAll('#open-menu')
let menu = document.querySelector('#menu')
let close_menu = document.querySelector('#close-menu')

open_menu.forEach((btn) => {
    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})

close_menu.addEventListener('click', () => {
    menu.classList.remove('active');
})

