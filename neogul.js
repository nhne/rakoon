function rakoonify(request, sender, sendResponse){
    var c = $(".btn_nextpage");
    if(c.length == 1)
    {
        c.click();
    }
}

browser.runtime.onMessage.addListener(rakoonify);