var darkmodetoggle = document.getElementById("darkmodetoggle");
var container = document.body;
var fullname = document.getElementById("cmname");
var email = document.getElementById("cmemail");
var message = document.getElementById("cmmessage");

var tttBoxEl = document.getElementsByClassName("tttBox");
var tttBoxBoxEl = document.getElementsByClassName("tttBoxBox");    


localStorage.setItem('darkMode', "false");






checkStatus();

function checkStatus(){
    if (localStorage.getItem('theme') === "1"){
        container.setAttribute("website-theme", "dark");
        localStorage.setItem('darkMode', "true");
        darkmodetoggle.src = "images/moon.png";
    } else if (localStorage.getItem('theme') === "false") {
        container.setAttribute("website-theme", "0");
        localStorage.setItem('darkMode', "false");
        darkmodetoggle.src = "images/sun.png";
    }
};


function changeStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        localStorage.setItem('darkMode', "false");
        localStorage.setItem('theme', "0");
        container.setAttribute("website-theme", "light");
        darkmodetoggle.src = "images/sun.png";
    } else if (localStorage.getItem('darkMode')==="false") {
        localStorage.setItem('darkMode', "true");
        localStorage.setItem('theme', "1");
        container.setAttribute("website-theme", "dark");
        darkmodetoggle.src = "images/moon.png";
    }
};


function StopEventPropagation(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    else if(window.event) {
        window.event.cancelBubble=true;
    }
};


function checkfields() {
    console.log("hei");
    if (fullname.value === "" || email.value === "" || message.value === "") {
        alert("Fyll ut alle feltene.")
    } else {
        window.location = "NorskThankyou.html";
    }
};

var turn = "x";

$(".tttBoxBox").click(function() {
    if(!$(this).hasClass('stateX') && !$(this).hasClass('stateY')) {
        if(turn == "x") {
            console.log($(this))
            $(this).css("background-color", "yellow");
            $(this).attr("class", "tttBoxBox stateY");
            turn = "y";
        } else if(turn == "y") {
            console.log($(this))
            $(this).css("background-color", "red");
            $(this).attr("class", "tttBoxBox stateX");
            turn = "x";
        }
    }
});

$("#restart").click(function() {
    $(".tttBoxBox").css("background-color", "lightgray");
    $(".tttBoxBox").removeClass("stateX");
    $(".tttBoxBox").removeClass("stateY");
    turn = "x";
})


