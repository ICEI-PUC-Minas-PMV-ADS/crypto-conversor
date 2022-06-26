function confereDados() {
    const email = document.querySelector('input[name=email]');
    const confirma = document.querySelector('input[name=email2]');
    const senha = document.querySelector('input[name=senha]');
    const confirmaSenha = document.querySelector('input[name=senha2]');

    if(email.value === confirma.value) {
        confirma.setCustomValidity('');
    } 
    else{
        confirma.setCustomValidity('Os e-mails não conferem');
    }

    if(senha.value === confirmaSenha.value) {
        confirmaSenha.setCustomValidity('')
    }
    else{
        confirmaSenha.setCustomValidity('As senhas não conferem')
    }
}


