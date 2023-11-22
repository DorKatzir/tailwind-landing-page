
const menuBtn = document.getElementById('menu-btn')
export const menuMobile = document.getElementById('menu')

menuBtn.addEventListener('pointerup', () => {
    menuBtn.classList.toggle('open')
    menuMobile.classList.toggle('flex')
    menuMobile.classList.toggle('hidden')
    menuMobile.classList.toggle('slide-in')
})