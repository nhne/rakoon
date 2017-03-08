var nb;
var STRING_SKIP = "스킵해 보자구";
var STRING_HOLD = "스킵중이야";

//video skipping part
if(document.getElementById("example_video_1") != null){
    nb = document.createElement("button");
    nb.textContent = STRING_SKIP;
    nb.setAttribute("class", "neogulman");
    nb.addEventListener("click", skip);
    document.getElementById("example_video_1").parentNode.appendChild(nb);
}

function skip(){
    var script = document.createElement('script');
    script.textContent = 'player.off("seeking")';
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

    var video = document.getElementsByTagName("video")[0];
    if(video.paused){
        video.play();
        setTimeout(function(){nb.click();}, 600);
        return;
    }
    video.currentTime = video.duration - 1.0;
    disableNB();
    setTimeout(function(){
        document.getElementsByClassName("btn_nextpage")[0].click();
    }, 1800);
    setTimeout(skip, 2400);
}

//question part
var data = document.querySelectorAll("[data-answer]");
for(var index = 0; index < data.length; index++){
    var d = data[index];
    var ans = d.getAttribute("data-answer").split(",");
    if(isNaN(ans[0])){
        for(var i = 0; i < ans.length; i++){
            d.querySelectorAll("input[type=text]")[i].setAttribute("value", ans[i].trim());
        }
    }
    else{
        for(var i = 0; i < ans.length; i++){
            d.querySelector("input[value='" + ans[i] + "']").checked = true;
        }
    }
}

function disableNB(){
    nb.textContent = STRING_HOLD;
    nb.setAttribute("disabled", "disabled");
}

function enableNB(){
    nb.textContent = STRING_SKIP;
    nb.removeAttribute("disabled");
}
