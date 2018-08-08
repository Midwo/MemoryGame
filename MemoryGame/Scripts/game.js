var fieldPicture = ["autumnandforest.png", "autumnandforest.png", "beachandcity.png", "beachandcity.png", "cityUSA.png", "cityUSA.png", "fogaboveforest.png", "fogaboveforest.png", "fogabovewater.png", "fogabovewater.png", "foreveralone.png", "foreveralone.png", "housebesidewater.png", "housebesidewater.png", "iceandwater.png", "iceandwater.png", "lakeinmountain.png", "lakeinmountain.png", "oldbridge.png", "oldbridge.png", "rainincity.png", "rainincity.png", "riverandforest.png", "riverandforest.png", "sandmountain.png", "sandmountain.png", "shipabovewater.png", "shipabovewater.png", "stormincity.png", "stormincity.png", "sunandplantrice.png", "sunandplantrice.png", "sunandsheep.png", "sunandsheep.png", "villagemountain.png", "villagemountain.png", "winterandhouses.png", "winterandhouses.png", "winterforest.png", "winterforest.png"];
var questionslevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var randomlist;
var lock = false;
var firstCardVisible = false;
var numberVisible;
var numberVisibleRandom;
var numberHits = 0;
var numberOfPairs = 0;
var level = 1;
var firsthit;

function level1() {
    document.getElementById("contentUP").innerHTML = '<span>Level: 1</<span></br><div class="card" id="card0"></div><div class="card" id = "card1"></div><div class="clear: both"></div><div class="card" id="card2"></div><div class="card" id="card3"></div>';
    //console.log(fieldPicture);
    randomlist = shuffle(questionslevel.slice(0,4));
   // console.log(questionslevel1);
    level = 1;
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
    level = 2;
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
    level = 3;
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
    level = 4;
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
function level5() {
    //  document.getElementById("contentUP").innerHTML = '<span> Level: 2</<span></br><div class="card" id="card0"></div><div class="card" id="card1"></div><div class="card" id="card2"></div> <div class="clear: both"></div><div class="card" id="card3"></div><div class="card" id="card4"></div><div class="card" id="card5"></div>';
    randomlist = shuffle(questionslevel.slice(0, 32));
    $("#contentUP").html('<span> Level: 5</<span></br><div class="card" id="card0"></div><div class="card" id="card1"></div><div class="card" id="card2"></div><div class="card" id="card3"></div><div class="card" id="card4"></div><div class="card" id="card5"></div><div class="card" id="card6"></div><div class="card" id="card7"></div><div class="clear: both"></div><div class="card" id="card8"></div><div class="card" id="card9"></div><div class="card" id="card10"></div><div class="card" id="card11"></div><div class="card" id="card12"></div><div class="card" id="card13"></div><div class="card" id="card14"></div><div class="card" id="card15"></div><div class="clear: both"></div><div class="card" id="card16"></div><div class="card" id="card17"></div><div class="card" id="card18"></div><div class="card" id="card19"></div><div class="card" id="card20"></div><div class="card" id="card21"></div><div class="card" id="card22"></div><div class="card" id="card23"></div><div class="clear: both"></div><div class="card" id="card24"></div><div class="card" id="card25"></div><div class="card" id="card26"></div><div class="card" id="card27"></div><div class="card" id="card28"></div><div class="card" id="card29"></div><div class="card" id="card30"></div><div class="card" id="card31"></div>');
    level = 5;
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
    var card13 = document.getElementById('card13');
    var card14 = document.getElementById('card14');
    var card15 = document.getElementById('card15');
    var card16 = document.getElementById('card16');
    var card17 = document.getElementById('card17');
    var card18 = document.getElementById('card18');
    var card19 = document.getElementById('card19');
    var card20 = document.getElementById('card20');
    var card21 = document.getElementById('card21');
    var card22 = document.getElementById('card22');
    var card23 = document.getElementById('card23');
    var card24 = document.getElementById('card24');
    var card25 = document.getElementById('card25');
    var card26 = document.getElementById('card26');
    var card27 = document.getElementById('card27');
    var card28 = document.getElementById('card28');
    var card29 = document.getElementById('card29');
    var card30 = document.getElementById('card30');
    var card31 = document.getElementById('card31');

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
    card16.addEventListener("click", function () { showCard(16); });
    card17.addEventListener("click", function () { showCard(17); });
    card18.addEventListener("click", function () { showCard(18); });
    card19.addEventListener("click", function () { showCard(19); });
    card20.addEventListener("click", function () { showCard(20); });
    card21.addEventListener("click", function () { showCard(21); });
    card22.addEventListener("click", function () { showCard(22); });
    card23.addEventListener("click", function () { showCard(23); });
    card24.addEventListener("click", function () { showCard(24); });
    card25.addEventListener("click", function () { showCard(25); });
    card26.addEventListener("click", function () { showCard(26); });
    card27.addEventListener("click", function () { showCard(27); });
    card28.addEventListener("click", function () { showCard(28); });
    card29.addEventListener("click", function () { showCard(29); });
    card30.addEventListener("click", function () { showCard(30); });
    card31.addEventListener("click", function () { showCard(31); });
    numberOfPairs = 16;
}

function end()
{
    $("#contentUP").html('Gratulacje! Przeszedłeś cała grę! </br> <button class="buttonstart wow swing" onclick="level1()"><span>Jeszcze raz</span></button>');
    Save();
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
    if (firsthit != number) {
        var opacityValue = $('#card' + number).css('opacity');

        if (lock == false && opacityValue != 0) {
            lock = true;
            var picture = "url(Content/img/" + fieldPicture[randomlist[number]] + ")";
            //  alert(randomlist[number]);
            $('#card' + number).css("background-image", picture);
            $('#card' + number).addClass("cardVisible");
            $('#card' + number).removeClass("card");


            if (firstCardVisible == false) {
                firstCardVisible = true;
                numberVisibleRandom = randomlist[number];
                numberVisible = number;
                lock = false;
            }
            else {
                if (fieldPicture[randomlist[number]] == fieldPicture[numberVisibleRandom]) {
                    setTimeout(function () { hide2Cards(number, numberVisible) }, 540);
                }
                else {
                    setTimeout(function () { restore2Cards(number, numberVisible) }, 820);
                }

                firstCardVisible = false;
                numberHits++;
                //document.getElementById("score").innerHTML = 'Sprawdzonych par: ' + numberHits + '!';
                $('.score').html('Sprawdzonych par: ' + numberHits + '!');

            }

        }


    }
    firsthit = number;
}


function hide2Cards(number1, number2) {
    $('#card' + number1).css('opacity', '0');
    $('#card' + number2).css('opacity', '0');
    numberOfPairs--;
    if (numberOfPairs == 0)
    {

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
            case 5:
                level5();
                break;
            default:
                end();
        }
    }
    firsthit = null;

    lock = false;
}

function restore2Cards(number1, number2) {
    $('#card' + number1).css('background-image', 'url(Content/img/hidecard.png)');
    $('#card' + number1).addClass('card');
    $('#card' + number1).removeClass('cardVisible');

    $('#card' + number2).css('background-image', 'url(Content/img/hidecard.png)');
    $('#card' + number2).addClass('card');
    $('#card' + number2).removeClass('cardVisible');
    lock = false;
    firsthit = null;
}

function Save() {
    var std = {};
    //std.Number = $("#Number").val();
    std.Number = numberHits;
    $.ajax({
        type: "POST",
        url: "/Home/NewResult", // the URL of the controller action method
        data: '{std: ' + JSON.stringify(std) + '}',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            GetTop5();
            GetLastRecords();
        },
        error: function (req, status, error) {
            alert("Błąd wstawiania danych"); 
        }
    });
 
}

function GetTop5() {
    $("#tblTop5 tbody tr").remove();
    $.ajax({
        type: 'POST',
        url: "/Home/GetTop5",
        dataType: 'json',
        data: { id: '' },
        success: function (data) {
            var items = '';
            $.each(data, function (i, item) {
                var rows = "<tr>"
                    + "<td class='recordstop5'>" + item.Number + "</td>"
                    + "<td class='recordstop5'>" + item.Date + "</td>"
                    + "</tr>";
                $('#tblTop5 tbody').append(rows);
            });
        },
        error: function (ex) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }
    });
    return false;
}

function GetLastRecords() {
    $("#tblLastGame tbody tr").remove();
    $.ajax({
        type: 'POST',
        url: "/Home/GetLastGame",
        dataType: 'json',
        data: { id: '' },
        success: function (data) {
            var items = '';
            $.each(data, function (i, item) {
                var rows = "<tr>"
                    + "<td class='recordsLastGame'>" + item.ResultsID + "</td>"
                    + "<td class='recordstop5'>" + item.Number + "</td>"
                    + "<td class='recordsLastGame'>" + item.Date + "</td>"
                    + "</tr>";
                $('#tblLastGame tbody').append(rows);
            });
        },
        error: function (ex) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }
    });
    return false;
}
