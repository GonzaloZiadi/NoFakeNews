var blueBorder = {"border": "3px solid blue"};
var greenBorder = {"border": "3px solid green"};

var leftBias = [];
var leftCenterBias = ["cnn", "abc news"];
var neutral = [];
var rightCenterBias = [];
var rightBias = [];
var satire = [];
var fakeNews = [];

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // All anchor tags on the page
        $('.profileLink, .fwb.fcg a').not('.checked').each(function(index, value){
            $(this).addClass('checked');
            var profile = $(this).text().toLowerCase();
            if(new RegExp(leftCenterBias.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(blueBorder);
            }
            else if(profile.indexOf("onion") >= 0) {
                $(value).closest('._1dwg').css(greenBorder);
            }
        })
    })
});

var config = {
    childList: true,
    subtree: true
};

var target = document.body;
observer.observe(target, config);
