function enviar() {
    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a)' + nome.value + 'seu formulário foi enviado')
    }
    else {
        alert('Algo deu errado')
    }
}

