function clickAccordion(t) {
    let pai = document.getElementsByClassName('faq-question')[t].parentElement
    let conteudo = pai.classList.contains('sectionHide')
    let sessoes = document.getElementsByClassName('pergunta')

    if (conteudo == true) {
        for (let s = 0; s<sessoes.length; s++) {
            sessoes[s].className = 'pergunta sectionHide'
        }
        pai.className = 'pergunta sectionShow'
    } else {
        pai.className = 'pergunta sectionHide'
    }
}