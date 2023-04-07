const mobileIcon = document.querySelector('.bx-menu')
const nav = document.querySelector('nav ul')


mobileIcon.addEventListener('click', () => {
    if (mobileIcon.classList.contains('bx-menu')) {
        mobileIcon.classList.remove('bx-menu')
        mobileIcon.classList.add('bx-x')
        document.body.style.overflow = 'hidden';
        nav.style.left = '0'
    }

    
    else {
        mobileIcon.classList.add('bx-menu')
        mobileIcon.classList.remove('bx-x')
        document.body.style.overflow = 'visible'
        nav.style.left = '-1000px'
    }
    
})