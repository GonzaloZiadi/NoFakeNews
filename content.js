var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // All anchor tags on the page
        $('.profileLink, .fwb.fcg a').each(function(index, value){
            var profile = $(this).html().toString().toLowerCase();
                if(profile.indexOf("cnn") >= 0) {
                    $(value).closest('._1dwg').css({"border": "5px solid red"});
                }
                else if(profile.indexOf("onion") >= 0) {
                    $(value).closest('._1dwg').css({"border": "5px solid green"});
                }
        })
    })
});

var config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true
};

observer.observe(document.body, config);
