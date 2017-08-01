// para esta função, usar onclick="alterarLayout()" como propriedade do botão no HTML
function alterarLayout() {
    document.querySelector(".mural").classList.toggle("mural--linhas");
}

// var botaoLayout = document.querySelector('#mudaLayout');
// botaoLayout.onclick = alterarLayout; // esta associando a função, é um tratador de evento;

// Mudar Layout da página (Linhas x Colunas)
document.querySelector('#mudaLayout').addEventListener('click', function() {

    //pegar o elemnto com a classe mural
    var mural = document.querySelector('.mural');

    //Tira ou coloca a classe
    mural.classList.toggle('mural--linhas');

    //Muda o texto do botão
    if (mural.classList.contains('mural--linhas')) {
        this.textContent = "Blocos";
    } else {
        this.textContent = "Linhas";
    }
});

var botoes = document.querySelectorAll('.opcoesDoCartao-remove');
for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', removeCartao);
}

function removeCartao() {
    console.log("removeCartao()...");

    var botaoRemove = this; // como foi chamado pelo EventListener, veio do Botao, o this corresponde a quem recebeu o evento, como o click foi no botão é a ele que corresponde
    //var cartao = botaoRemove.remove();

    // ParenteNode é para subir de nível na hierarquia
    // corresponde a button->div.opcoesDoCartao->div.cartao
    //var cartao = botaoRemove.parentNode.parentNode;

    //No HTML: <button  idCartao="5">
    //var idDoCartao = botaoRemove.getAttribute('idCartao');
    //var cartao = document.querySelector('#cartao' + idDoCartao);

    //No HTML: <button ... data-idcartao="5">
    //Nao pode usar CamelCase no HTML, teve que mudar o idCartao para idcartao
    var idDoCartao = botaoRemove.dataset.idcartao;
    var cartao = document.querySelector('#cartao' + idDoCartao);

    cartao.classList.add('cartao--some');
    setTimeout(function() {
        cartao.remove();
    }, 170);
}