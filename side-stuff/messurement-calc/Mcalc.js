var length = document.querySelector("#length");
var volume = document.querySelector("#volume");
var mass = document.querySelector("#mass");
var inputEl = document.querySelector("#nummer");


inputEl.addEventListener("input", beregn);
 

function beregn() {
    var mittTall = Number(inputEl.value);
    var feet = mittTall * 3.281;
    var meters = mittTall / 3.281;
    var gallons = mittTall / 3.785;
    var liters = mittTall * 3.785;
    var pounds = mittTall * 2.205;
    var kilograms = mittTall / 2.205;
    length.textContent = mittTall + " meters = " + feet.toFixed(3) + " feet | " + mittTall + " feet = " + meters.toFixed(3) + " meters";
    volume.textContent = mittTall + " liters = " + gallons.toFixed(3) + " gallons | " + mittTall + " gallons = " + liters.toFixed(3) + " liters";
    mass.textContent = mittTall + " kilograms = " + pounds.toFixed(3) + " pounds | " + mittTall + " pounds = " + kilograms.toFixed(3) + " kilograms";
}
