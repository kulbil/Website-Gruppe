var navn = document.getElementById("navn");
var adresse = document.getElementById("adresse");
var epost = document.getElementById("epost");
var telefonnumer = document.getElementById("telefonnumer");
var antallPersoner = document.querySelector("#antallPersoner");
var typebillet = 0;
var startDate = document.getElementById("startDate");
var endDate = document.getElementById("endDate");
var natter = 1;
var totalpris = 0;
var frokost = 0;
var drikke = 0;
var dessert = 0;
var personerfrokost = 0;
var personerdrikke = 0;
var personerdessert = 0;
var personerbillet = 0;
var typebil = document.getElementById("typebil");
var bilpp = document.getElementById("bilpp");
var bilpris = document.getElementById("bilpris");
var antallnatt = document.getElementById("antallnatt");
var nattpp = document.getElementById("nattpp");
var nattpris = document.getElementById("nattpris");
var antallfrokost = document.getElementById("antallfrokost");
var frokostpp = document.getElementById("frokostpp");
var frokostpris = document.getElementById("frokostpris");
var antalldrikke = document.getElementById("antalldrikke");
var drikkepp = document.getElementById("drikkepp");
var drikkepris = document.getElementById("drikkepris");
var antalldessert = document.getElementById("antalldessert");
var dessertpp = document.getElementById("dessertpp");
var dessertpris = document.getElementById("dessertpris");
var totalprisdisplay = document.getElementById("totalpris");

/*
var startDate = new Date("#startDate");
var endDate = new Date("#endDate");

var date = new Date($('#date-input').val());

console.log(Date(startDate));




function getNumberOfDays(start, end) {
    var date1 = new Date(start);
    var date2 = new Date(end);
    var oneDay = 1000 * 60 * 60 * 24;
    var diffInTime = date2.getTime() - date1.getTime();
    var diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
}

console.log(getNumberOfDays("4/5/2021", "3/1/2021"));

console.log(100 / getNumberOfDays(Date(startDate), Date(endDate));
*/





function checkout() {
    if (navn.value === "" || adresse.value === "" || epost.value === "" || telefonnumer.value === "" || document.getElementById("dyreaparken").checked === false && document.getElementById("badeland").checked === false && document.getElementById("begge").checked === false) {
        alert("Fyll alle feltene.")
    } else {
        window.location = "bookingthankyou.html";
    }
}







function beregn() {
    if (document.getElementById("dyreaparken").checked === true) {
        typebillet = 269;
        typebil.textContent = antallPersoner.value + "x dyreaparken dagspass";
    } else if (document.getElementById("badeland").checked === true) {
        typebillet = 199;
        typebil.textContent = antallPersoner.value + "x badeland dagspass";
    } else if (document.getElementById("begge").checked === true) {
        typebillet = 349;
        typebil.textContent = antallPersoner.value + "x dyreaparken og badeland dagspass";
    }
    if (document.getElementById("frokost").checked === true) {
        frokost = 149;
        personerfrokost = antallPersoner.value * frokost;
        antallfrokost.textContent = antallPersoner.value + "x frokost";
        frokostpp.textContent = frokost + "kr per person";
        frokostpris.textContent = personerfrokost + "kr";
    } else if (document.getElementById("frokost").checked === false) {
        frokost = 0;
        personerfrokost = antallPersoner.value * frokost;
        antallfrokost.textContent = "";
        frokostpp.textContent = "";
        frokostpris.textContent = "";
    }
    if (document.getElementById("drikke").checked === true) {
        drikke = 249;
        personerdrikke = antallPersoner.value * drikke;
        antalldrikke.textContent = antallPersoner.value + "x drikke";
        drikkepp.textContent = drikke + "kr per person";
        drikkepris.textContent = personerdrikke + "kr";
    } else if (document.getElementById("drikke").checked === false) {
        drikke = 0;
        personerdrikke = antallPersoner.value * drikke;
        antalldrikke.textContent = "";
        drikkepp.textContent = "";
        drikkepris.textContent = "";
    }
    if (document.getElementById("dessert").checked === true) {
        dessert = 199;
        personerdessert = antallPersoner.value * dessert;
        antalldessert.textContent = antallPersoner.value + "x dessert";
        dessertpp.textContent = dessert + "kr per person";
        dessertpris.textContent = personerdessert + "kr";
    } else if (document.getElementById("dessert").checked === false) {
        dessert = 0;
        personerdessert = antallPersoner.value * dessert;
        antalldessert.textContent = "";
        dessertpp.textContent = "";
        dessertpris.textContent = "";
    }
    personerbillet = antallPersoner.value * typebillet;
    totalpris = personerbillet + personerfrokost + personerdrikke + personerdessert;
    bilpp.textContent = typebillet + "kr per person";
    bilpris.textContent = personerbillet + "kr";
    totalprisdisplay.textContent = "Total:" + totalpris + "kr";
}


// so I need to have breakfast, drinks and what not displayed in the check out as well