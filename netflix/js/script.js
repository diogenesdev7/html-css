function clickAccordion(t) {
    const pergunta = document.getElementsByClassName('pergunta')[t]
    const resposta = pergunta.lastElementChild

    if (resposta.classList.contains('hide')) {
        resposta.classList.remove('hide')
        resposta.classList.add('show')
    } else {
        resposta.classList.remove('show')
        resposta.classList.add('hide')
    }
}