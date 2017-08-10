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

$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});