let nome = window.document.getElementById('nome')
let email = document.querySelector("#-mail")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validationNome() {
    let txt = document.querySelector ('#txt-nome')
    if (nome.value.lenght < 3) {
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Valido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail () {
    let txtEmail = document.querySelector('#txt-email')
    if  (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txt_assunto')
    if (assunto.value.lenght >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande.'
        txtAssunto.style.color = 'red'
        txt.style.display = 'block'
    } else {
        txt.style.display = 'none'
        assuntoOk = true
    }
}

function mapZoomOn () {
    mapa.style.width = '800px'
}

function mapZoomOf () {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

