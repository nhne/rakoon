var nb;

$(function(){
    $("#example_video_1").after('<button class="neogulman">스킵해 보자구</button>');
    nb = $("button.neogulman");
    nb.on("click", function(){
        //removing seeking event on video
        var script = document.createElement('script');
        script.textContent = 'player.off("seeking")';
        (document.head||document.documentElement).appendChild(script);
        script.parentNode.removeChild(script);

        var video = $("video")[0];
        if(video.paused){
            video.play();
            setTimeout(function(){nb.click();}, 600);
            return;
        }
        video.currentTime = video.duration - 1.0;
        disableNB();
        setTimeout(function(){
            $(".btn_nextpage").click();
        }, 1800);
        setTimeout(function(){
           enableNB();
        }, 2200);      
    })
});

function disableNB(){
    nb.text("스킵중이야~").attr("disabled", "disabled");
}

function enableNB(){
    nb.text("스킵해 보자구").removeAttr("disabled");
}
