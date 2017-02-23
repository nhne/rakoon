function rakoonify(request, sender, sendResponse){
    var c = $(".btn_nextpage");
    if(c.length == 1)
    {
        c.click();
    }
    else{
        alert("여긴 아무것도 없다구~");
    }
}

browser.runtime.onMessage.addListener(rakoonify);