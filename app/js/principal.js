//CONFIGURACAO

var principal = (function($) {

    var usuario = 'john.doe@whoiam.io';

    var sincronizaEvent = function() {
        $(document).trigger('sincronizaEvent');
    }

    return {
        usuario: usuario, // exportando um attributo
        sincroEvent: sincronizaEvent // exportando uma função
    }
})(jQuery);