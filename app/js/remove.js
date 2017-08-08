var botoes = document.querySelectorAll('.opcoesDoCartao-remove');
for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', removeCartao);
}

function removeCartao() {
    console.log("removeCartao()...");

    var botaoRemove = this; // como foi chamado pelo EventListener, veio do Botao, o this corresponde a quem recebeu o evento, como o click foi no botão é a ele que corresponde

    //No HTML: <button ... data-idcartao="5">
    //Nao pode usar CamelCase no HTML, teve que mudar o idCartao para idcartao
    var idDoCartao = botaoRemove.dataset.idcartao;
    var cartao = document.querySelector('#cartao' + idDoCartao);

    cartao.classList.add('cartao--some');
    setTimeout(function() {
        cartao.remove();
    }, 170);
}