const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('nav')
let isOpen = false


function openMenu () {
    if (!isOpen) {
        nav.style.display = 'flex'
        isOpen = true
    }
}

openBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', () => {
    if (isOpen) {
        nav.style.display = 'none'
        isOpen = false
}
})

