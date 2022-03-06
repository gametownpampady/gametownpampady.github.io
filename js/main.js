$(document).ready(function () {


    $('.g-tw-row li').each(function(){
        if($(this).find('ul').length == 0){
            $(this).addClass('empty')
        }
        if($(this).next().is('li')){
            $(this).addClass('has-pref')
        }
    })
});