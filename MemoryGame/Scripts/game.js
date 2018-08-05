var fieldPicture = ["autumnandforest.png", "autumnandforest.png", "beachandcity.png", "beachandcity.png", "cityUSA.png", "cityUSA.png", "fogaboveforest.png", "fogaboveforest.png", "fogabovewater.png", "fogabovewater.png", "foreveralone.png", "foreveralone.png", "housebesidewater.png", "housebesidewater.png", "iceandwater.png", "iceandwater.png", "lakeinmountain.png", "lakeinmountain.png", "oldbridge.png", "oldbridge.png", "rainincity.png", "rainincity.png", "riverandforest.png", "riverandforest.png", "sandmountain.png", "sandmountain.png", "shipabovewater.png", "shipabovewater.png", "stormincity.png", "stormincity.png", "sunandplantrice.png", "sunandplantrice.png", "sunandsheep.png", "sunandsheep.png", "villagemountain.png", "villagemountain.png", "winterandhouses.png", "winterandhouses.png", "winterforest.png", "winterforest.png"];
var questionslevel1 = [1, 2, 3, 4];

function level1() {
    document.getElementById("contentUP").innerHTML = '<span>Level: 1</<span></br><div class="card" id="c0"></div><div class="card" id = "c1"></div><div class="clear: both"></div><div class="card" id="c2"></div><div class="card" id="c3"></div>';
    //console.log(fieldPicture);
    questions = shuffle(questionslevel1);
    console.log(questionslevel1);

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


