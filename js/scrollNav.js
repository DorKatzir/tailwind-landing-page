
window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navBar')
    const heroHeader = document.querySelector('.heroHeader')

    const referencePassed = window.scrollY + heroHeader.getBoundingClientRect().height > heroHeader.offsetTop-200
    const navClassNames = referencePassed ? ['transparentNav', 'bgNav'] : ['bgNav', 'transparentNav']

    navbar.classList.replace(...navClassNames)
    
})
