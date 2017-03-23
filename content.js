var blueBorder = {"border": "3px solid blue"};
var greenBorder = {"border": "3px solid green"};
var redBorder = {"border": "3px solid red"};
var purpleBorder = {"border": "3px solid purple"};
var brownBorder = {"border": "3px solid brown"};

var leftBias = ["the atlantic","the atlantic: news", "the atlantic: politics & policy", "the guardian", "nowthis", "nowthis politics", "vox", "msnbc", "the huffington post", "the huffington post canada", "occupy democrats", "guardian us", "usa today", "proud liberals", "buzzfeed news", "the young turks"];
var neutral = ["cnn", "npr", "npr politics", "bbc news", "washington post", "washington post politics", "the new york times", "nbc news", "nbc news world", "abc news", "abc news politics", "apnews.com", "ap business news", "ap live", "ap politics", "reuters", "the daily dot", "bloomberg", "bloomberg technology", "bloomberg politics", "the independent florida alligator", "vice news", "alligator.org"];
var rightBias = ["the wall street journal", "the economist", "the fiscal times", "the hill", "fox news", "fox news politics", "theblaze", "breitbart", "breitbart news", "breitbart london", "the daily caller", "the daily caller politics", "redstate", "infowars", "young conservatives", "youngcons.com"];
var satire = ["onion", "the really independent florida crocodile", "the eggplant fsu", "clickhole", "waterford whispers news", "newsbiscuit.com", "collegehumor"];
var fakeNews = ["the national enquirer", "newslo", "politicops.com", "americannews.com"];

chrome.storage.local.get({localLeft: []}, function(result) {
    if(result.localLeft != '') {
        leftBias = result.localLeft;
    }
});

chrome.storage.local.get({localNeutral: []}, function(result) {
    if(result.localNeutral != '') {
        neutral = result.localNeutral;
    }
});

chrome.storage.local.get({localRight: []}, function(result) {
    if(result.localRight != '') {
        rightBias = result.localRight;
    }
});

chrome.storage.local.get({localFake: []}, function(result) {
    if(result.localFake != '') {
        fakeNews = result.localFake;
    }
});

chrome.storage.local.get({localSatire: []}, function(result) {
    if(result.localSatire != '') {
        satire = result.localSatire;
    }
});

$(".source-wrapper").on("click enter", function(){
    $(this).next('.input-field').toggle();
    $(this).find('.plus-icon, .minus-icon').toggle();
}).on('keypress', function(e) {
    if(e.which === 13) {
        $(this).trigger('enter');
    }
});

$('#add-left').click(function() {
    var source = $('#input-left').val().toLowerCase();
    if(source != ''){
        leftBias.push(source);
        $(this).parent().hide();
        $('#input-left').val('');
        chrome.storage.local.set({'localLeft':leftBias}, function() {});
        $(this).prev('.source-wrapper').find('.plus-icon, .minus-icon').toggle();
        chrome.tabs.reload();
    }
});

$('#add-right').click(function() {
    var source = $('#input-right').val().toLowerCase();
    if(source != '') {
        rightBias.push(source);
        $(this).parent().hide();
        $('#input-right').val('');
        chrome.storage.local.set({'localRight':rightBias}, function() {});
        $(this).prev('.source-wrapper').find('.plus-icon, .minus-icon').toggle();
        chrome.tabs.reload();
    }
});

$('#add-fake').click(function() {
    var source = $('#input-fake').val().toLowerCase();
    if(source != '') {
        fakeNews.push(source);
        $(this).parent().hide();
        $('#input-fake').val('');
        chrome.storage.local.set({'localFake':fakeNews}, function() {});
        $(this).prev('.source-wrapper').find('.plus-icon, .minus-icon').toggle();
        chrome.tabs.reload();
    }
});

$('#add-neutral').click(function() {
    var source = $('#input-neutral').val().toLowerCase();
    if(source != '') {
        neutral.push(source);
        $(this).parent().hide();
        $('#input-neutral').val('');
        chrome.storage.local.set({'localNeutral':neutral}, function() {});
        $(this).prev('.source-wrapper').find('.plus-icon, .minus-icon').toggle();
        chrome.tabs.reload();
    }
});

$('#add-satire').click(function() {
    var source = $('#input-satire').val().toLowerCase();
    if(source != '') {
        satire.push(source);
        $(this).parent().hide();
        $('#input-satire').val('');
        chrome.storage.local.set({'localSatire':satire}, function() {});
        $(this).prev('.source-wrapper').find('.plus-icon, .minus-icon').toggle();
        chrome.tabs.reload();
    }
});

$("#clear-storage").on("click enter", function(){
    chrome.storage.local.clear(function() {
        chrome.tabs.reload();
    });
}).on('keypress', function(e) {
    if(e.which === 13) {
        $(this).trigger('enter');
    }
});
$(document).ready(function(){
    var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
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
        });
    });
});

var target = document.body;
var config = {
    childList: true,
    subtree: true
};

observer.observe(target, config);
});