var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // All anchor tags on the page
        $('.profileLink, .fwb.fcg a').not('.checked').each(function(index, value){
            $(this).addClass('checked');
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
    childList: true,
    subtree: true
};

//var target = document.getElementById('pagelet_timeline_main_column');
var target = document.body;
//var target = $('._1xnd');
observer.observe(target, config);
