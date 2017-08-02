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
    cartao - conteudo

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

// ### JAVASCRIPT PURO ####
/* var formulario = document.querySelector('.novoCartao');
formulario.addEventListener('submit', salvaCartao);

function salvaCartao(evento) {
    evento.preventDefault(); //prevenir a execução do evento default, no caso não executr o submit
    var campoConteudo = document.querySelector('.novoCartao-conteudo');
    var textoDigitado = campoConteudo.value;
    console.log(textoDigitado);
    // Criando o conteũdo do novo Cartão
    var conteudoNovoCartao = document.createElement('p');
    conteudoNovoCartao.classList.add('cartao-conteudo');
    conteudoNovoCartao.textContent = textoDigitado;
    console.log(conteudoNovoCartao);
    // Criando a div do novo Cartao
    var novoCartao = document.createElement('div');
    novoCartao.classList.add('cartao');
    //novoCartao.innerHTML = conteudoNovoCartao; // esse nao funciona pois innerHTML só para texto
    novoCartao.appendChild(conteudoNovoCartao);
    console.log(novoCartao);
    // Atibuindo a section
    var mural = document.querySelector('.mural');
    //mural.appendChild(novoCartao); // Insere no Final
    mural.insertBefore(novoCartao, mural.firstElementChild); // Adiciona o cartão antes do primeiro filho atual
    console.log(mural);
} */

// ##### COM JQUERY ######
var contador = $('.cartao').length;
// jQuery() ou $() - para indicar o uso do jQuery
// Não retorna um elemento do DOM, mas um objeto jQuery
$('.novoCartao').submit(salvaCartaoJquery);

function salvaCartaoJquery(evento) {
    evento.preventDefault(); //prevenir a execução do evento default, no caso não executr o submit

    // Obtendo dados digitados pelo usuário
    var campoConteudo = $('.novoCartao-conteudo', this);
    var textoDigitado = campoConteudo.val().trim().replace(/\n/g, '<br>');
    console.log("tam (" + textoDigitado.length + ")");
    console.log(textoDigitado);

    //if (textoDigitado.length <= 0) return;
    if (!textoDigitado) return;

    contador++;

    // Criando o conteúdo do novo Cartão
    var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo').text(textoDigitado);
    console.log(conteudoNovoCartao);

    // Opções do Cartãos
    var botaoRemove = $('<button>')
        .addClass('opcoesDoCartao-opcao opcoesDoCartao-remove')
        .text('Remove')
        .click(removeCartao)
        .attr('data-idcartao', contador);

    var opcoesDoCartao = $('<div>').addClass('opcoesDoCartao')
        .append(botaoRemove);


    // Criando a div do novo Cartao e adicionar o Botão e o Conteudo
    var novoCartao = $('<div>').addClass('cartao')
        .append(opcoesDoCartao)
        .append(conteudoNovoCartao)
        .attr('id', 'cartao' + contador);
    console.log(novoCartao);

    // Atibuindo a section
    $('.mural').prepend(novoCartao);

    //OU
    //$('<div>').addClass('cartao').append(conteudoNovoCartao).prependTo(novoCartao);


}