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

        //video skipping part
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
    });
    
    //question part
    $("[data-answer]").each(function(index){
        var ans = $(this).attr("data-answer").split(",");
        if(isNaN(ans[0])){
            for(var i = 0; i < ans.length; i++){
                $(this).find("input[type=text]").eq(i).val(ans[i]);
            }
        }
        else{
            for(var i = 0; i < ans.length; i++){
                $(this).find("input[value=" + ans[i] + "]").prop("checked", true);
            }
        }
    })
});

function disableNB(){
    nb.text("스킵중이야~").attr("disabled", "disabled");
}

function enableNB(){
    nb.text("스킵해 보자구").removeAttr("disabled");
}
