var gjennomsnitt = document.getElementById("GS");  //henter gjennomsnittet
var arr = [1,2,3,4,5,6];
var summen = 0;
var del = 0;
var list = document.getElementsByClassName("input"); //henter alle input'ene


fag1.addEventListener("input", beregn); //disse gjør at når input'et er endret, det 'aktiverer' funskjonen "beregn"
fag2.addEventListener("input", beregn);
fag3.addEventListener("input", beregn);
fag4.addEventListener("input", beregn);
fag5.addEventListener("input", beregn);
fag6.addEventListener("input", beregn);
fag7.addEventListener("input", beregn);
fag8.addEventListener("input", beregn);
fag9.addEventListener("input", beregn);
fag10.addEventListener("input", beregn);
fag11.addEventListener("input", beregn);
fag12.addEventListener("input", beregn);


function beregn(e){
    summen = 0; //setter begge variabler til 0 så de ikke 'stack' hver eneste gang funksjonen aktiveres
    del = 0;
    for (i = 0; i < 12; i++) { //går gjennom fagene
        console.log(list[i].value);
        for (z = 0; z < arr.length; z++) { //går gjennom karakter array'en, det gjør at det kan ikke settes en annen verdi enn 1, 2, 3, 4, 5, og 6
            if (Number(list[i].value) === arr[z]) {
                summen += Number(list[i].value);
                del++; //i steden av å ha 'xxx.length' så har jeg denne
                console.log(summen);
                gjennsnit = Number(summen/del);
            }
        }
    }
    gjennomsnitt.innerHTML = "Karaktersnitt er: " + gjennsnit;
}