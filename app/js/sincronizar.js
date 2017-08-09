//$('#sync').click(sincronizaCartoes);
//EMITE o EVENTO
$('#sync').click(function() {
    //$(document).trigger('sincronizaEvent');
    principal.sincroEvent();
});

//CAPTURA o EVENTO
$(document).one('sincronizaEvent', sincronizaCartoes);

function sincronizaCartoes() {

    $('#sync').removeClass('botaoSync--sincronizado');
    $('#sync').addClass('botaoSync--esperando');

    var cartoes = [];
    $(".cartao").each(function() {
        var cartao = $(this); // this, aumentado com jQuery, corresponde ao cartao
        //var conteudo = cartao.find(".cartao-conteudo").text(); // text() elimina o html
        var conteudo = cartao.find(".cartao-conteudo").html(); // para ir os códigos html
        var cor = cartao.css('background-color');
        cartoes.push({
            conteudo: conteudo,
            cor: cor
        });

        console.log(cartoes);
        //Outro jeito
        //var cartao = {};
        //cartao.conteudo = $(this).find(".cartao-conteudo").html();
        //cartoes.push(cartao);
    });

    //define nome de usuário

    var mural = {
        usuario: principal.usuario,
        cartoes: cartoes
    }

    /* Ver cartoes adicionados em:
       http://ceep.herokuapp.com/cartoes/carregar?usuario=john.doe@whoiam.io
    */
    $.ajax({
        url: 'http://ceep.herokuapp.com/cartoes/salvar',
        method: 'POST',
        data: mural,
        dataType: 'json', // o que espera de retorno do servidor
        success: function(res) {
            $('#sync').addClass('botaoSync--sincronizado');
            console.log(res.quantidade + ' cartoes salvos em ' + res.usuario);
        },
        error: function() {
            $('#sync').addClass('botaoSync--deuRuim');
            console.log('Nao foi possivel salvar o mural');
        },
        complete: function() {
            $('#sync').removeClass('botaoSync--esperando');
        }
    });
}