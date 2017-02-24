var nb;

$(function(){
    $("#example_video_1").after('<button class="neogulman">스킵해 보자구</button>');
    nb = $("button.neogulman");
    nb.on("click", function(){
        var video = $("video")[0];
        if(video.paused){
            video.play();
        }
        video.currentTime = video.duration - 1.0;
        disableNB();
        setTimeout(function(){
            $(".btn_nextpage").click();
        }, 1000);
        setTimeout(function(){
           enableNB();
        }, 2000);      
    })
});

function disableNB(){
    nb.text("스킵중이야~").attr("disabled", "disabled");
}

function enableNB(){
    nb.text("스킵해 보자구").removeAttr("disabled");
}
