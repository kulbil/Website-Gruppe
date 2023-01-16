var medaljeoversikt = [
    {land: "Sør-Korea", verdensdel: "Asia", gull: 3, sølv: 3, bronse: 2},
    {land: "Japan", verdensdel: "Asia", gull: 1, sølv: 4, bronse: 3},
    {land: "Sverige", verdensdel: "Europa", gull: 2, sølv: 7, bronse: 6},
    {land: "Norge", verdensdel: "Europa", gull: 11, sølv: 5, bronse: 10},
    {land: "Kina", verdensdel: "Asia", gull: 3, sølv: 4, bronse: 2},
    {land: "Russland", verdensdel: "Asia", gull: 9, sølv: 3, bronse: 8},
    {land: "Finland", verdensdel: "Europa", gull: 1, sølv: 3, bronse: 1},
    {land: "Østerrike", verdensdel: "Europa", gull: 4, sølv: 8, bronse: 5},
    {land: "USA", verdensdel: "Nord-Amerika", gull: 9, sølv: 7, bronse: 12},
    {land: "Hviterussland", verdensdel: "Europa", gull: 5, sølv: 0, bronse: 1},
    {land: "Canada", verdensdel: "Nord-Amerika", gull: 10, sølv: 10, bronse: 5},
    {land: "Storbritannia", verdensdel: "Europa", gull: 1, sølv: 1, bronse: 2},
    {land: "Sveits", verdensdel: "Europa", gull: 6, sølv: 3, bronse: 2},
    {land: "Slovenia", verdensdel: "Europa", gull: 2, sølv: 2, bronse: 4},
    {land: "Frankrike", verdensdel: "Europa", gull: 4, sølv: 4, bronse: 7},
    {land: "Tsjekkia", verdensdel: "Europa", gull: 2, sølv: 4, bronse: 2},
    {land: "Tyskland", verdensdel: "Europa", gull: 8, sølv: 6, bronse: 5},
    {land: "Ukrania", verdensdel: "Europa", gull: 1, sølv: 0, bronse: 1},
    {land: "Nederland", verdensdel: "Europa", gull: 8, sølv: 7, bronse: 9},
    {land: "Polen", verdensdel: "Europa", gull: 4, sølv: 1, bronse: 1},
];
var country = document.querySelector("#country");
var input = document.querySelector("#input");
var funnetLand = false;
var medals = document.querySelector("#medals");
var medalsTotal = document.querySelector("#medalsTotal")
var medalsSum = 0;
var selectContinent = document.querySelector("#selectContinent");
var totalContinentGold = 0;
var totalContinentSilver = 0;
var totalContinentBronze = 0;
var continentMedalSeperate = document.querySelector("#continentMedalSeperate");
var continentMedalTotal = document.querySelector("#continentMedalTotal");
var continentMedalTotalNumber = 0;
var allGoldMedals = 0;
var allSilverMedals = 0;
var allBronzeMedals = 0;
var final = document.querySelector("#final");
var goldPercent = 0;
var silverPercent = 0;
var bronzePercent = 0;
var finalPercent = 0;



for (x = 0; x < medaljeoversikt.length; x++){
    allGoldMedals += medaljeoversikt[x].gull;
    allSilverMedals += medaljeoversikt[x].sølv;
    allBronzeMedals += medaljeoversikt[x].bronse;
}
var allMedals = allGoldMedals + allSilverMedals + allBronzeMedals;
console.log(allMedals);



function rewrite() {
    funnetLand = false;
    medalsSum = 0;
    for (i = 0; i < medaljeoversikt.length; i++) {
        if (input.value === medaljeoversikt[i].land) {
            country.textContent = medaljeoversikt[i].land;
            medals.textContent = "Gull: " + medaljeoversikt[i].gull + " | Sølv: " + medaljeoversikt[i].sølv + " | Bronse: " + medaljeoversikt[i].bronse;
            medalsSum += medaljeoversikt[i].gull + medaljeoversikt[i].sølv + medaljeoversikt[i].bronse;
            medalsTotal.textContent = "Totalt: " + medalsSum;
            funnetLand = true;
        } else if (funnetLand === false) {
        country.innerHTML = "ERROR";
        medals.textContent = "‎";
        medalsTotal.textContent = "‎";
        }
    }
};

function findContinent() {
    totalContinentGold = 0;
    totalContinentSilver = 0;
    totalContinentBronze = 0;
    continentMedalTotalNumber = 0;
    for (j = 0; j < medaljeoversikt.length; j++){
        if (medaljeoversikt[j].verdensdel === selectContinent.value){
            totalContinentGold += medaljeoversikt[j].gull;
            totalContinentSilver += medaljeoversikt[j].sølv;
            totalContinentBronze += medaljeoversikt[j].bronse;
            continentMedalSeperate.textContent = "Verdensdelen " + selectContinent.value + " tok til sammen " + totalContinentGold + " gull, " + totalContinentSilver + " sølv, " + totalContinentBronze + " bronse.";
            continentMedalTotalNumber = totalContinentGold + totalContinentSilver + totalContinentBronze;
            continentMedalTotal.textContent = "Verdersdelen tok til sammen " + continentMedalTotalNumber + " medaljer.";
            goldPercent = ((totalContinentGold / allGoldMedals) * 100).toFixed(0);
            silverPercent = ((totalContinentSilver / allSilverMedals) * 100).toFixed(0);
            bronzePercent = ((totalContinentBronze / allBronzeMedals) * 100).toFixed(0);
            finalPercent = ((continentMedalTotalNumber / allMedals) * 100).toFixed(0);
            final.textContent = "Verdensdelen tok " + goldPercent + "% av alle gullmedaljene, " + silverPercent + "% av alle sølvmedaljene, " + bronzePercent + "% av alle bronsemedaljene og " + finalPercent + "% av alle medaljene totalt.";
        }
    }
}
