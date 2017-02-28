var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // All anchor tags on the page
        $('a').each(function(index, value){
            if(value.href.indexOf("l.facebook") >= 0) {
                if(value.href.indexOf("cnn") >= 0) {
                    $(value).closest('._1dwg').css({"border": "5px solid red"});
                }
                else if(value.href.indexOf("onion") >= 0) {
                    $(value).closest('._1dwg').css({"border": "5px solid green"});
                }
            }
        })
    })
});

var config = {
    attributes: true,
    childList: true,
    characterData: true
};

observer.observe(document.body, config);
