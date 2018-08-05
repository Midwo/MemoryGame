var fieldPicture = ["autumnandforest.png", "autumnandforest.png", "beachandcity.png", "beachandcity.png", "cityUSA.png", "cityUSA.png", "fogaboveforest.png", "fogaboveforest.png", "fogabovewater.png", "fogabovewater.png", "foreveralone.png", "foreveralone.png", "housebesidewater.png", "housebesidewater.png", "iceandwater.png", "iceandwater.png", "lakeinmountain.png", "lakeinmountain.png", "oldbridge.png", "oldbridge.png", "rainincity.png", "rainincity.png", "riverandforest.png", "riverandforest.png", "sandmountain.png", "sandmountain.png", "shipabovewater.png", "shipabovewater.png", "stormincity.png", "stormincity.png", "sunandplantrice.png", "sunandplantrice.png", "sunandsheep.png", "sunandsheep.png", "villagemountain.png", "villagemountain.png", "winterandhouses.png", "winterandhouses.png", "winterforest.png", "winterforest.png"];
var questionslevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var randomlist;
var lock = false;
var firstCardVisible = false;
var numberVisible;
var numberVisibleRandom;
var numberHits = 0;
var numberOfPairs = 0;
var level = 1;

function level1() {
    document.getElementById("contentUP").innerHTML = '<span>Level: 1</<span></br><div class="card" id="card0"></div><div class="card" id = "card1"></div><div class="clear: both"></div><div class="card" id="card2"></div><div class="card" id="card3"></div>';
    //console.log(fieldPicture);
    randomlist = shuffle(questionslevel.slice(0,4));
   // console.log(questionslevel1);

    var card0 = document.getElementById('card0');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');

    card0.addEventListener("click", function () { showCard(0); });
    card1.addEventListener("click", function () { showCard(1); });
    card2.addEventListener("click", function () { showCard(2); });
    card3.addEventListener("click", function () { showCard(3); });
    numberOfPairs = 2;
}

function level2()
{
  //  document.getElementById("contentUP").innerHTML = '<span> Level: 2</<span></br><div class="card" id="card0"></div><div class="card" id="card1"></div><div class="card" id="card2"></div> <div class="clear: both"></div><div class="card" id="card3"></div><div class="card" id="card4"></div><div class="card" id="card5"></div>';
    randomlist = shuffle(questionslevel.slice(0, 6));
    $("#contentUP").html('<span> Level: 2</<span></br><div class="card" id="card0"></div><div class="card" id="card1"></div><div class="card" id="card2"></div> <div class="clear: both"></div><div class="card" id="card3"></div><div class="card" id="card4"></div><div class="card" id="card5"></div>');

    var card0 = document.getElementById('card0');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');
    var card4 = document.getElementById('card4');
    var card5 = document.getElementById('card5');

    card0.addEventListener("click", function () { showCard(0); });
    card1.addEventListener("click", function () { showCard(1); });
    card2.addEventListener("click", function () { showCard(2); });
    card3.addEventListener("click", function () { showCard(3); });
    card4.addEventListener("click", function () { showCard(4); });
    card5.addEventListener("click", function () { showCard(5); });

    numberOfPairs = 3;
}

function level3() {
    //  document.getElementById("contentUP").innerHTML = '<span> Level: 2</<span></br><div class="card" id="card0"></div><div class="card" id="card1"></div><div class="card" id="card2"></div> <div class="clear: both"></div><div class="card" id="card3"></div><div class="card" id="card4"></div><div class="card" id="card5"></div>';
    randomlist = shuffle(questionslevel.slice(0, 12));
    $("#contentUP").html('<span> Level: 3</<span></br><div class="card" id="card0"></div><div class="card" id="card1"></div><div class="card" id="card2"></div><div class="card" id="card3"></div><div class="clear: both"></div><div class="card" id="card4"></div><div class="card" id="card5"></div><div class="card" id="card6"></div><div class="card" id="card7"></div><div class="clear: both"></div><div class="card" id="card8"></div><div class="card" id="card9"></div><div class="card" id="card10"></div><div class="card" id="card11"></div>');

    var card0 = document.getElementById('card0');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');
    var card4 = document.getElementById('card4');
    var card5 = document.getElementById('card5');
    var card6 = document.getElementById('card6');
    var card7 = document.getElementById('card7');
    var card8 = document.getElementById('card8');
    var card9 = document.getElementById('card9');
    var card10 = document.getElementById('card10');
    var card11 = document.getElementById('card11');


    card0.addEventListener("click", function () { showCard(0); });
    card1.addEventListener("click", function () { showCard(1); });
    card2.addEventListener("click", function () { showCard(2); });
    card3.addEventListener("click", function () { showCard(3); });
    card4.addEventListener("click", function () { showCard(4); });
    card5.addEventListener("click", function () { showCard(5); });
    card6.addEventListener("click", function () { showCard(6); });
    card7.addEventListener("click", function () { showCard(7); });
    card8.addEventListener("click", function () { showCard(8); });
    card9.addEventListener("click", function () { showCard(9); });
    card10.addEventListener("click", function () { showCard(10); });
    card11.addEventListener("click", function () { showCard(11); }); 
    numberOfPairs = 6;
}

function level4() {
    //  document.getElementById("contentUP").innerHTML = '<span> Level: 2</<span></br><div class="card" id="card0"></div><div class="card" id="card1"></div><div class="card" id="card2"></div> <div class="clear: both"></div><div class="card" id="card3"></div><div class="card" id="card4"></div><div class="card" id="card5"></div>';
    randomlist = shuffle(questionslevel.slice(0, 16));
    $("#contentUP").html('<span> Level: 4</<span></br><div class="card" id="card0"></div><div class="card" id="card1"></div><div class="card" id="card2"></div><div class="card" id="card3"></div><div class="clear: both"></div><div class="card" id="card4"></div><div class="card" id="card5"></div><div class="card" id="card6"></div><div class="card" id="card7"></div><div class="clear: both"></div><div class="card" id="card8"></div><div class="card" id="card9"></div><div class="card" id="card10"></div><div class="card" id="card11"></div><div class="clear: both"></div><div class="card" id="card12"></div><div class="card" id="card13"></div><div class="card" id="card14"></div><div class="card" id="card15"></div>');

    var card0 = document.getElementById('card0');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');
    var card4 = document.getElementById('card4');
    var card5 = document.getElementById('card5');
    var card6 = document.getElementById('card6');
    var card7 = document.getElementById('card7');
    var card8 = document.getElementById('card8');
    var card9 = document.getElementById('card9');
    var card10 = document.getElementById('card10');
    var card11 = document.getElementById('card11');
    var card12 = document.getElementById('card12');
    var card13= document.getElementById('card13');
    var card14 = document.getElementById('card14');
    var card15 = document.getElementById('card15');


    card0.addEventListener("click", function () { showCard(0); });
    card1.addEventListener("click", function () { showCard(1); });
    card2.addEventListener("click", function () { showCard(2); });
    card3.addEventListener("click", function () { showCard(3); });
    card4.addEventListener("click", function () { showCard(4); });
    card5.addEventListener("click", function () { showCard(5); });
    card6.addEventListener("click", function () { showCard(6); });
    card7.addEventListener("click", function () { showCard(7); });
    card8.addEventListener("click", function () { showCard(8); });
    card9.addEventListener("click", function () { showCard(9); });
    card10.addEventListener("click", function () { showCard(10); });
    card11.addEventListener("click", function () { showCard(11); });
    card12.addEventListener("click", function () { showCard(12); });
    card13.addEventListener("click", function () { showCard(13); });
    card14.addEventListener("click", function () { showCard(14); });
    card15.addEventListener("click", function () { showCard(15); });
    numberOfPairs = 8;
}
function shuffle(a) {
    var cidx, ridx, tmp;
    cidx = a.length;
    while (cidx != 0) {
        ridx = Math.floor(Math.random() * cidx);
        cidx--;
        tmp = a[cidx];
        a[cidx] = a[ridx];
        a[ridx] = tmp;
    }
    return a;
}

function showCard(number) {
    var opacityValue = $('#card' + number).css('opacity');
    if (lock == false && opacityValue != 0)
    {
        lock = true;
        var picture = "url(Content/img/" + fieldPicture[randomlist[number]] + ")";
        $('#card' + number).css("background-image", picture);
        $('#card' + number).addClass("cardVisible");
        $('#card' + number).removeClass("card");

        if (firstCardVisible == false)
        {
            firstCardVisible = true;
            numberVisibleRandom = randomlist[number];
            numberVisible = number;
            lock = false;
        }
        else
        {
            if (fieldPicture[randomlist[number]] == fieldPicture[numberVisibleRandom])
            {
                setTimeout(function () { hide2Cards(number, numberVisible) }, 540);
            }
            else
            {
                setTimeout(function () { restore2Cards(number, numberVisible) }, 820);
            }
        
            firstCardVisible = false;
            numberHits++;
            //document.getElementById("score").innerHTML = 'Sprawdzonych par: ' + numberHits + '!';
            $('.score').html('Sprawdzonych par: ' + numberHits +'!');

        }


    }
}


function hide2Cards(nr1, nr2) {
    $('#card' + nr1).css('opacity', '0');
    $('#card' + nr2).css('opacity', '0');
    numberOfPairs--;
    if (numberOfPairs == 0) {
        level++;
        switch (level) {
            case 2:
                level2();
                break;
            case 3:
                level3();
                break;
            case 4:
                level4();
                break;
        }
    }

    lock = false;
}

function restore2Cards(nr1, nr2) {
    console.log(nr1, nr2);
    $('#card' + nr1).css('background-image', 'url(Content/img/hidecard.png)');
    $('#card' + nr1).addClass('card');
    $('#card' + nr1).removeClass('cardVisible');

    $('#card' + nr2).css('background-image', 'url(Content/img/hidecard.png)');
    $('#card' + nr2).addClass('card');
    $('#card' + nr2).removeClass('cardVisible');
    lock = false;
}