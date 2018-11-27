$(document).ready(function(){



    $('.colors-large a').click(function(){return false;});


    $('.sizes a span, .categories a span').each(function(i, el){
        $(el).append('<span class="x"></span><span class="y"></span>');

        $(el).parent().on('click', function(){
            if($(this).hasClass('checked')){
                $(el).find('.y').removeClass('animate');
                setTimeout(function(){
                    $(el).find('.x').removeClass('animate');
                }, 50);
                $(this).removeClass('checked');
                return false;
            }

            $(el).find('.x').addClass('animate');
            setTimeout(function(){
                $(el).find('.y').addClass('animate');
            }, 100);
            $(this).addClass('checked');
            return false;
        });
    });


    });
