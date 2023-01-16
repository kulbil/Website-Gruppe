var butikkVarer = [
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Brokkoli", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
    {matVare: "Løk", pris: "15,90", bilde: "bilder/mat_1.png", quantity: 0},
]











//----------------------------------------------------------------------------------------------------------------------


var passwordOne = document.querySelector("#passwordOne");
var passwordTwo = document.querySelector("#passwordTwo");
var errorMessage = document.querySelector("#errorMessage");
var inputField = document.querySelector("input");
var Forenavn = document.getElementById("Fornavn");
var Etternavn = document.getElementById("Etternavn");
var Postnummer = document.getElementById("Postnummer");
var postadresse = document.getElementById("postadresse");




function checkPassword() {
    if (passwordOne.value === "" || passwordTwo.value === "" || Fornavn.value === "" || Etternavn.value === "" || Postnummer.value === "" || Postnummer.value === "") {
        alert("Fill all fields.")
    } else {
        if (passwordOne.value === passwordTwo.value) {
            errorMessage.textContent = "Riktig password";
        } else {
            errorMessage.textContent = "Feil password";
        }
    }
}