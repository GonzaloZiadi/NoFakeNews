var blueBorder = {"border": "3px solid blue"};
var greenBorder = {"border": "3px solid green"};
var redBorder = {"border": "3px solid red"};
var purpleBorder = {"border": "3px solid purple"};
var brownBorder = {"border": "3px solid brown"};

var leftBias = ["cnn", "abc news", "the atlantic","the atlantic: news", "the atlantic: politics & policy", "the guardian", "nowthis", "nowthis politics", "vox", "msnbc", "the huffington post", "the huffington post canada", "occupy democrats"];
var neutral = ["npr", "npr politics"];
var rightBias = ["the wall street journal"];
var satire = ["onion", "the really independent florida crocodile", "the eggplant fsu", "clickhole", "waterford whispers news"];
var fakeNews = ["the national enquirer"];

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // All anchor tags on the page
        $('.fwb.fcg a, .fwn.fcg a').not('.checked').each(function(index, value){
            $(this).addClass('checked');
            var profile = $(this).text().toLowerCase();

            if(new RegExp(leftBias.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(blueBorder);
                $(value).closest('._1dwg').prepend('<h3 style="color:blue;margin-bottom:10px;">Politcal: Left-Leaning</h3>');
            }
            else if(new RegExp(neutral.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(greenBorder);
                $(value).closest('._1dwg').prepend('<h3 style="color:green;margin-bottom:10px;">Neutral</h3>');
            }
            else if(new RegExp(rightBias.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(redBorder);
                $(value).closest('._1dwg').prepend('<h3 style="color:red;margin-bottom:10px;">Political: Right-Leaning</h3>');
            }
            else if(new RegExp(satire.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(purpleBorder);
                $(value).closest('._1dwg').prepend('<h3 style="color:purple;margin-bottom:10px;">Satire</h3>');
            }
            else if(new RegExp(fakeNews.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(brownBorder);
                $(value).closest('._1dwg').prepend('<h3 style="color:brown;margin-bottom:10px;">FAKE NEWS!</h3>');
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
