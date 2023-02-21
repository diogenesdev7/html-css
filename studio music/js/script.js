function mostrarMenu() {
    const menuUl = document.querySelector('.menu-cabecalho ul')
    const menuUlUl = document.querySelector('.menu-cabecalho ul ul')
    const mobileIcon = document.querySelector('.mobile-menu-icon i')

    if (menuUl.style.display == 'none') {
        menuUl.style.display = 'flex'
        menuUlUl.style.display = 'none'
        mobileIcon.className = 'bx bx-x'
    } else {
        menuUl.style.display = 'none'
        mobileIcon.className = 'bx bx-menu'
    }
}


setInterval(function() {
    nextImage()
}, 10000)

let count = 1
document.getElementById('radio1').checked = true

function nextImage() {
    count ++
    if (count > 3) {
        count = 1
    }
    document.getElementById('radio'+count).checked = true
}