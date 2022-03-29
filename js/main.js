$(document).ready(function () {

    let offsetVal=0;

    getTweets();

function getTweets(){

    
    $.ajax({
        url: "http://ec2-18-233-171-35.compute-1.amazonaws.com/api/v1/feed",
        type: "get", //send it through get method
        crossDomain: true,
        data: { 
            offset:offsetVal*10, 
          limit: 10
        },
        success: function(response) {
          appendDatatoDom(response);
          console.log(response);
        },
        error: function(xhr) {
          //Do Something to handle error
        }
      });

      offsetVal=offsetVal+1;
    
}

function appendDatatoDom(tweetsArray){
    let tweetList='';

  +'</div>'
 tweetsArray.data.forEach(element => {

  let tweetBlock='<div class="g-block g-tweet">'
  +'<ul class="g-tw-row">'
      +'<li class="empty">'
        +'<div class="g-tw-col">'
            +'<div class="g-tw-avatar">'
             + '<figure><img  class="profPic" src='+element.profile_pic_url+' alt="Avatar"/></figure>'
            +'</div>'
           + '<div class="g-tw-content">'
             + '<div class="g-tw-uname">'
               + '<a class="userName" href="#">'+element.twitter_handle+'</a>'
              +'</div>'
              +'<div class="g-tw-tweet">'
                +'<p class="tweet">'+element.text+'</p>'
              +'</div>'
            +'</div>'
        +'</div>'
      +'</li>'
  +'</ul>'
  


     $('#chatter').append(tweetBlock);


     tweetBlock='';
 });

}


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


    $(window).scroll(function() {
        if($(window).scrollTop() == $(document).height() - $(window).height()) {
           
            getTweets();
        }
    });
});