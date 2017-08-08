function criarCartao(conteudo, cor = 'EBEF40') {

    var contador = $('.cartao').length;

    contador++;

    // Criando o conteúdo do novo Cartão
    // .text() pega como texto puro, não interpreta o html
    //var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo').text(textoDigitado); 
    var conteudoNovoCartao = $('<p>').addClass('cartao-conteudo').html(conteudo);
    console.log(conteudoNovoCartao);

    // Opções do Cartãos
    var botaoRemove = $('<button>')
        .addClass('opcoesDoCartao-opcao opcoesDoCartao-remove')
        .text('Remove')
        .click(removeCartao)
        .attr('data-idcartao', contador);

    var opcoesDoCartao = $('<div>').addClass('opcoesDoCartao')
        .append(botaoRemove);

    var tamanhoCartao = decideTamanhoCartao(conteudo);
    console.log('classe tam cartao: ' + tamanhoCartao);

    // Criando a div do novo Cartao e adicionar o Botão e o Conteudo
    var novoCartao = $('<div>')
        .addClass('cartao')
        .addClass(tamanhoCartao)
        .append(opcoesDoCartao)
        .append(conteudoNovoCartao)
        .attr('id', 'cartao' + contador)
        .css('background-color', cor);
    console.log(novoCartao);

    // Atibuindo a section
    $('.mural').prepend(novoCartao);

    //OU
    //$('<div>').addClass('cartao').append(conteudoNovoCartao).prependTo(novoCartao);
}