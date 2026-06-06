

(function( $ ){

    $.fn.checkbox_t = function (options) {


        if( $(".checkbox-t").length ){

            var mainSelector           = ".checkbox-t";
            var inputSelector          = ".checkbox-t .inputs-t";
            var activeClass            = "selected-t";



            var checkbox_activer = function(evt){

                var checkboxLabel = $(evt.currentTarget).parents(mainSelector);

                if( checkboxLabel.hasClass(activeClass) ){
                    checkboxLabel.removeClass(activeClass);
                }
                else{
                    checkboxLabel.addClass(activeClass);
                }
            }

            $(inputSelector).off().each(function(index, el) {
                if ( $(this).parents(mainSelector).hasClass(activeClass) ){
                    $(this).prop('checked', true).trigger("change");
                }
            });


            $(inputSelector).off('click').on('click', function() {
            	checkbox_activer(event);
			})
        }
    };
})( jQuery );






$( document ).ready(function() {

    // $.fn.checkbox_t();
    
});

