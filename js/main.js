$(document).ready(function () {


    $('.g-tw-row li').each(function(){
        if($(this).find('ul').length == 0){
            $(this).addClass('empty')
        }
        if($(this).next().is('li')){
            $(this).addClass('has-pref')
        }
    })

    // Tab
    $('.g-feed-tab-grp .btn').on('click', function(){
        var tabId = $(this).attr('data-id');
        $('.g-tab-wrap').removeClass('show');
        $('#'+tabId).addClass('show');

        $('.g-feed-tab-grp .btn').removeClass('active');
        $(this).addClass('active');
    })
});