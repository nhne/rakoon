document.addEventListener("click", (e) => {
    if(e.target.classList.contains("next")) {
        browser.tabs.executeScript(null, {
            file: "jquery-3.1.1.min.js"
        }, function(){
            browser.tabs.executeScript(null, {
                file: "/neogul.js"
            })
        });
        var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {});
        });
    }
})