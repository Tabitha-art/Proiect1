jQuery(document).ready(function(){
    setInterval(function(){
        var el = jQuery('.slider .slide.show');
        el.removeClass('show');
        var next = el.next();
        if (next.length > 0) next.addClass('show');
        else jQuery('.slider .slide').first().addClass('show');
    }, 2500);

    jQuery('#register-form').submit(function(e) {
        e.preventDefault();

        if ( $('form')[0].checkValidity() == false ) {
            return false;
        }