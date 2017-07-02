$(document).ready(function() {
    $('.c-search .text').bind('input propertychange', function() {
        /* Act on the event */
        if ($('.c-search .text').val() == "") {
            $('.queryName').parent().show();
            $('.queryNothing').hide();
        }else{
            var watch = 0;
            $('.queryName').parent().hide();
            for(var i = 0; i < $('.queryName').length; i++){
                var queryText = $('.queryName').eq(i).children('a').text();
                if(queryText.indexOf($('.c-search .text').val()) != -1){
                    watch++;
                    $('.queryName').eq(i).parent().show();
                }
            }
            if (watch == 0) {
                $('.queryNothing').show();
            }else{
                $('.queryNothing').hide();
            }
        }
    });
});
