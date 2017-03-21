var blueBorder = {"border": "3px solid blue"};
var greenBorder = {"border": "3px solid green"};
var redBorder = {"border": "3px solid red"};
var purpleBorder = {"border": "3px solid purple"};
var brownBorder = {"border": "3px solid brown"};

var leftBias = ["cnn", "the atlantic","the atlantic: news", "the atlantic: politics & policy", "the guardian", "nowthis", "nowthis politics", "vox", "msnbc", "the huffington post", "the huffington post canada", "occupy democrats", "guardian us", "usa today", "proud liberals", "buzzfeed news"];
var neutral = ["npr", "npr politics", "bbc news", "washington post", "washington post politics", "the new york times", "nbc news", "nbc news world", "abc news", "abc news politics", "apnews.com", "ap business news", "ap live", "ap politics", "reuters", "the daily dot", "bloomberg", "bloomberg technology", "bloomberg politics", "the independent florida alligator", "vice news", "alligator.org"];
var rightBias = ["the wall street journal", "the economist", "the fiscal times", "the hill", "fox news", "fox news politics", "theblaze", "breitbart", "breitbart news", "breitbart london", "the daily caller", "the daily caller politics", "redstate", "infowars", "young conservatives", "youngcons.com"];
var satire = ["onion", "the really independent florida crocodile", "the eggplant fsu", "clickhole", "waterford whispers news", "newsbiscuit.com", "collegehumor"];
var fakeNews = ["the national enquirer", "newslo", "politicops.com"];

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // All anchor tags on the page
        $('.fwb.fcg a, .fwn.fcg a, ._6lz._6mb.ellipsis').not('.checked-div').each(function(index, value){
            $(this).addClass('checked-div');
            var profile = $(this).text().toLowerCase();

            if(new RegExp(leftBias.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(blueBorder);
                $(value).closest('._1dwg').not('.checked-prepend').prepend('<h3 style="color:blue;margin-bottom:10px;">Left-Leaning</h3>');
                $(value).closest('._1dwg').addClass('checked-prepend');
            }
            else if(new RegExp(neutral.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(greenBorder);
                $(value).closest('._1dwg').not('.checked-prepend').prepend('<h3 style="color:green;margin-bottom:10px;">Neutral & Trusted Source</h3>');
                $(value).closest('._1dwg').addClass('checked-prepend');
            }
            else if(new RegExp(rightBias.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(redBorder);
                $(value).closest('._1dwg').not('.checked-prepend').prepend('<h3 style="color:red;margin-bottom:10px;">Right-Leaning</h3>');
                $(value).closest('._1dwg').addClass('checked-prepend');
            }
            else if(new RegExp(satire.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(purpleBorder);
                $(value).closest('._1dwg').not('.checked-prepend').prepend('<h3 style="color:purple;margin-bottom:10px;">Satire</h3>');
                $(value).closest('._1dwg').addClass('checked-prepend');
            }
            else if(new RegExp(fakeNews.join("|")).test(profile)) {
                $(value).closest('._1dwg').css(brownBorder);
                $(value).closest('._1dwg').not('.checked-prepend').prepend('<h3 style="color:brown;margin-bottom:10px;">FAKE NEWS!</h3>');
                $(value).closest('._1dwg').addClass('checked-prepend');
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

$('.source-wrapper').click(function(){
    $(this).next('.input-field').toggle();
})

$('#add-left').click(function(){
    var source = $('#input-left').val();
    $('#input-left').val('');
    leftBias.push(source);
    console.log(leftBias);
});
$('#add-right').click(function(){
    var source = $('#input-right').val();
    $('#input-right').val('');
    rightBias.push(source);
    console.log(source);
});
$('#add-fake').click(function(){
    var source = $('#input-fake').val();
    $('#input-fake').val('');
    fakeNews.push(source);
    console.log(source);
});
$('#add-neutral').click(function(){
    var source = $('#input-neutral').val();
    $('#input-neutral').val('');
    neutral.push(source);
    console.log(source);
});
$('#add-satire').click(function(){
    var source = $('#input-satire').val();
    $('#input-satire').val('');
    satire.push(source);
    console.log(source);
});
