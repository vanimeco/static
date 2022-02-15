var movieId=$('.vanimeplayer_box').data('newsid')
var userSettings=$('.footer').data('settings');

var clickedLoadComment = false;
var initDisqus = false;
$(document).on("keyup", "#search-ep", function (e) {
    e.preventDefault();
    var value = e.target.value;
    $(".ep-item").removeClass("highlight");
    if (value) {
        var epEl = $(".ep-item[data-number=" + value + "]");
        if (epEl.length > 0) {
            var parent = epEl.parent();
            $(".ep-page-item[data-page=" + parent.data("page") + "]").click();
            if (e.keyCode === 13) {
                $(e.target).val("");
                epEl.click();
            } else {
                epEl.addClass("highlight");
                         var container = $('.ss-list');
        var scrollTo = $('.highlight');
  
        // Calculating new position of scrollbar
        var position = scrollTo.offset().top 
                - container.offset().top 
                + container.scrollTop();
  
        // Setting the value of scrollbar
        container.scrollTop(position);
            }
        }
    } else {
        var currPage = $(".ep-item.active").parent().data("page");
        $(".ep-page-item[data-page=" + currPage + "]").click();
             var container = $('.ss-list');
        var scrollTo = $('.ep-item.active');
  
        // Calculating new position of scrollbar
        var position = scrollTo.offset().top 
                - container.offset().top 
                + container.scrollTop();
  
        // Setting the value of scrollbar
        container.scrollTop(position);
              
            
    }
});

function nextEpisode(){var nextEl=$('.ep-item.active').next();if(nextEl.length>0)window.location.href=nextEl.attr('href');}
function prevEpisode(){var prevEl=$('.ep-item.active').prev();if(prevEl.length>0)window.location.href=prevEl.attr('href');}

$(document).ready(function () {

  
        if (parseInt(userSettings.auto_play) === 1) $('.quick-settings[data-option="auto_play"]').removeClass("off");
        if (parseInt(userSettings.auto_next) === 1) $('.quick-settings[data-option="auto_next"]').removeClass("off");
        $.get({url: dle_root + "engine/ajax/full-story.php?newsId=" + movieId, cache: false}, function (res) {
            if (res.status) {
                if (res.totalItems > 1) {
                    $(".block-prev").show();
                    $(".block-next").show();
                }
                   $('.lazy').lazyLoadXT({
       
        effect: 'fadeIn',
       
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });
                $("#episodes-content").html(res.html);
                $(".ep-item").removeClass("active");
                $(".ep-item[data-id=" + episode_play.id + "]").addClass("active");
                $(".ep-page-item[data-page=" + $(".ep-item.active").parent().data("page") + "]").click();
                     var container = $('.ss-list');
        var scrollTo = $('.ep-item.active');
  
        // Calculating new position of scrollbar
        var position = scrollTo.offset().top 
                - container.offset().top 
                + container.scrollTop();
  
        // Setting the value of scrollbar
        container.scrollTop(position);
              
            
            }
        });
        $(".server-item").on('click',(function () {
            $(".server-item .btn").removeClass("active");
            $(this).find(".btn").addClass("active");
            localStorage.setItem("currentSource", $(this).data("type"));
            localStorage.setItem("currentServer", $(this).data("server-id"));
            localStorage.setItem("currentclassserver", $(this).data("class"));
            var linktop = $('#content_player_'+ $(this).data("server-id")).text();
         
           var classserver = $(this).data("class");
            console.log(classserver);

          if ($.trim(classserver) == "mystream" || $.trim(classserver) == "mystream nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://embed.mystream.to/' +
               linktop +
               '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "streamtape" || $.trim(classserver) == "streamtape nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="/dist/streamtap.php?id=' +
               linktop +
               '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "uqload" || $.trim(classserver) == "uqload nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://uqload.com/embed-' +
               linktop +
               '.html" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "vip" || $.trim(classserver) == "vip nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src=' +
               linktop +
               ' frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "vidfast" || $.trim(classserver) == "vidfast nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://vidfast.co/embed-' +
               linktop +
               '.html" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "verystream" || $.trim(classserver) == "verystream nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://verystream.com/e/' +
               linktop +
               '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "rapids" || $.trim(classserver) == "rapids nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://rapidstream.co/embed-' +
               linktop +
               '.html" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "cloudvideo" || $.trim(classserver) == "cloudvideo nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://cloudvideo.tv/embed-' +
               linktop +
               '.html" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "mytv" || $.trim(classserver) == "mytv nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://www.myvi.tv/embed/' +
               linktop +
               '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "uptostream" || $.trim(classserver) == "uptostream nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://uptostream.com/iframe/' + linktop + '" width="968" height="480" scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "gtv" || $.trim(classserver) == "gtv nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://iframedream.com/embed/' +
               linktop +
               '.html" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "fembed" || $.trim(classserver) == "fembed nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://toopl.xyz/v/' + linktop + '.html" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "hydrax" || $.trim(classserver) == "hydrax nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://freeplayervideo.com/?v=' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "gou" || $.trim(classserver) == "gou nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="/dist/indexgo.php?id=' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "cdnt" || $.trim(classserver) == "cdnt nower") {
 
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://mb.toonanime.xyz/dist/vanime.html?id=' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
     $("#iframe-embed").show();
} else if ($.trim(classserver) == "rapidvideo" || $.trim(classserver) == "rapidvideo nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://www.rapidvideo.com/e/' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "namba" || $.trim(classserver) == "namba nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="968" height="420" id="movie_name" align="middle"><param name="wmode" value="opaque"><param name="movie" value="http://my1.imgsmail.ru/r/video2/uvpv3.swf"/><param name="flashvars" value="movieSrc=' +
               linktop +
               '" /><param name="allowFullScreen" value="true" /><param name="AllowScriptAccess" value="always" /><!--[if !IE]>--><object type="application/x-shockwave-flash" data="http://my1.imgsmail.ru/r/video2/uvpv3.swf" width="968" height="420"><param name="wmode" value="opaque"><param name="movie" value="http://my1.imgsmail.ru/r/video2/uvpv3.swf"/><param name="flashvars" value="movieSrc=' +
               linktop +
               '" /><param name="allowFullScreen" value="true" /><param name="AllowScriptAccess" value="always" /><!--<![endif]--><a href="http://www.adobe.com/go/getflash"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player"/></a><!--[if !IE]>--></object><!--<![endif]--></object>'
       )
       .fadeOut(300)
       .fadeIn(300);
       
} else if ($.trim(classserver) == "kaztube" || $.trim(classserver) == "kaztube nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://kaztube.kz/video/embed/' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "tune" || $.trim(classserver) == "tune nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://tune.pk/player/embed_player.php?vid=' + linktop + '" autoplay="no" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "sibnet" || $.trim(classserver) == "sibnet nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="/dist/indexs.php?id=' + linktop + '" width="685" height="480" frameborder="0" allowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "netu" || $.trim(classserver) == "netu nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://waaw.tv/watch_video.php?v=' + linktop + '" width="685" height="480" frameborder="0" allowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "rutube" || $.trim(classserver) == "rutube nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://rutube.ru/play/embed/' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "dailymotion" || $.trim(classserver) == "dailymotion nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://dailymotion.com/embed/video/' + linktop + '?logo=0&amp;info=0&amp;" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "openload" || $.trim(classserver) == "openload nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://openload.co/embed/' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "yandex" || $.trim(classserver) == "yandex nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<object width="685" height="480"><param name="wmode" value="opaque"><param name="movie" value="' +
               linktop +
               '"><param name="bgcolor" value="#000000"><param name="allowFullScreen" value="true"><param name="allowscriptaccess" value="always"><param name="scale" value="noscale"><embed width="685" height="385" scale="noscale" allowfullscreen="true" type="application/x-shockwave-flash" src="' +
               linktop +
               '" wmode="opaque"></object>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "ok" || $.trim(classserver) == "ok nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://www.ok.ru/videoembed/' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "vidspot" || $.trim(classserver) == "vidspot nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "vid" || $.trim(classserver) == "vid nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "cloudy" || $.trim(classserver) == "cloudy nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "google" || $.trim(classserver) == "google nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "youtube" || $.trim(classserver) == "youtube nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "moevideo" || $.trim(classserver) == "moevideo nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="' + linktop + '" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "mail" || $.trim(classserver) == "mail nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html(
           '<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://videoapi.my.mail.ru/videos/embed/mail/' +
               linktop +
               '" width="968" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
       )
       .fadeOut(300)
       .fadeIn(300);
} else if ($.trim(classserver) == "mail2" || $.trim(classserver) == "mail2 nower") {
    $("#embed-loading").hide();$(".new_player_content")
       .html('<iframe class="lazy" loading="lazy" id="iframe-embed" src="https://my.mail.ru/video/embed/' + linktop + '" width="968" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
       .fadeOut(300)
       .fadeIn(300);
}
          
          
        })) ; 

   
        $(".btn-comment-tab").click(function () {
            $(".btn-comment-tab").removeClass("active");
            $(this).addClass("active");
            loadDisqus();
        });
        $(".btn-load-comment").click(function () {
            clickedLoadComment = true;
            $(this).hide();
            loadDisqus();
        });
        $("#media-resize").click(function (e) {
            $(".anis-watch-wrap").toggleClass("extend");
            if ($(".anis-watch-wrap").hasClass("extend")) {
                $(this).html('<i class="fas fa-compress mr-1"></i>Collapse');
            } else {
                $(this).html('<i class="fas fa-expand mr-1"></i>Expand');
            }
        });
        $("#turn-off-light").click(function (e) {
            $("#mask-overlay, .anis-watch-wrap").toggleClass("active");
        });
        $("#mask-overlay").click(function (e) {
            $("#mask-overlay, .anis-watch-wrap").removeClass("active");
            $("#turn-off-light").removeClass("off");
        });
       
    
});


