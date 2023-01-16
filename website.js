var darkmodetoggle = document.getElementById("darkmodetoggle");
var container = document.body;
var arrow = document.querySelectorAll(".arrow");
var setup = document.getElementById("setup");
var monitor = document.getElementById("monitor");
var mouse = document.getElementById("mouse");
var keyboard = document.getElementById("keyboard");
var pccase = document.getElementById("case");
var cpu = document.getElementById("cpu");
var gpu = document.getElementById("gpu");
var motherboard = document.getElementById("motherboard");
var harddrive = document.getElementById("harddrive");
var powersupply = document.getElementById("powersupply");
var ram = document.getElementById("ram");
var fullname = document.getElementById("cmname");
var email = document.getElementById("cmemail");
var message = document.getElementById("cmmessage");
var illustrations = document.getElementById("illus");
var websites = document.getElementById("websites");
var gallery = document.getElementById("gallery");
var videos = document.getElementById("videos");
var calc = document.getElementById("calc");
var bnh = document.getElementById("bnh");
var mcalc = document.getElementById("mcalc");
var website = document.getElementById("website");
var image = document.getElementById("image");
var video = document.getElementById("video");
var pandatext = document.getElementById("panda-text");
var calctext = document.getElementById("calc-text");
var mcalctext = document.getElementById("mcalc-text");
var camtext = document.getElementById("cam-text");
var bnhtext = document.getElementById("bnh-text");
var bookingtext = document.getElementById("booking-text");



localStorage.setItem('darkMode', "false");






checkStatus();
hide();
toweb();

function checkStatus(){
    if (localStorage.getItem('theme') === "1"){
        container.setAttribute("website-theme", "dark");
        localStorage.setItem('darkMode', "true");
        darkmodetoggle.src = "images/moon.png";
        illustrations.src = "images/Untitled-1-dark.jpg";
        calc.src = "images/gradewhite";
        mcalc.src = "images/weightwhite.png";
        bnh.src = "images/cartwhite.png";
        website.src = "images/webwhite.png";
        image.src = "images/imagewhite.png";
        video.src = "images/videowhite.png";
        for (i = 0; i < arrow.length; i++){
            arrow[i].src = "images/PCcomp/whitearrow.png";
        }
    } else if (localStorage.getItem('theme') === "false") {
        container.setAttribute("website-theme", "0");
        localStorage.setItem('darkMode', "false");
        darkmodetoggle.src = "images/sun.png";
        calc.src = "images/gradeblack.png";
        bnh.src = "images/cartblack.png";
        mcalc.src = "images/weightblack.png";
        website.src = "images/webblack.png";
        image.src = "images/imageblack.png";
        video.src = "images/videoblack.png";
        illustrations.src = "images/Untitled-1.jpg";
        for (i = 0; i < arrow.length; i++){
            arrow[i].src = "images/PCcomp/arrow.png";
        }
    }
};


function changeStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        localStorage.setItem('darkMode', "false");
        localStorage.setItem('theme', "0");
        container.setAttribute("website-theme", "light");
        darkmodetoggle.src = "images/sun.png";
        calc.src = "images/gradeblack.png";
        mcalc.src = "images/weightblack.png";
        bnh.src = "images/cartblack.png";
        website.src = "images/webblack.png";
        image.src = "images/imageblack.png";
        video.src = "images/videoblack.png";
        illustrations.src = "images/Untitled-1.jpg";
        for (i = 0; i < arrow.length; i++){
            arrow[i].src = "images/PCcomp/arrow.png";
        };
    } else if (localStorage.getItem('darkMode')==="false") {
        localStorage.setItem('darkMode', "true");
        localStorage.setItem('theme', "1");
        container.setAttribute("website-theme", "dark");
        darkmodetoggle.src = "images/moon.png";
        calc.src = "images/gradewhite.png";
        bnh.src = "images/cartwhite.png";
        mcalc.src = "images/weightwhite.png";
        website.src = "images/webwhite.png";
        image.src = "images/imagewhite.png";
        video.src = "images/videowhite.png";
        illustrations.src = "images/Untitled-1-dark.jpg";
        for (i = 0; i < arrow.length; i++){
            arrow[i].src = "images/PCcomp/whitearrow.png";
        }
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



function hide() {
    monitor.style.display = 'none';
    mouse.style.display = 'none';
    keyboard.style.display = 'none';
    pccase.style.display = 'none';
    cpu.style.display = 'none';
    gpu.style.display = 'none';
    motherboard.style.display = 'none';
    powersupply.style.display = 'none';
    harddrive.style.display = 'none';
    ram.style.display = 'none';
};



/*------------------------------------------*/

function tomonitor() {
    setup.style.display = 'none';
    monitor.style.display = 'flex'
};

function tomouse() {
    setup.style.display = 'none';
    mouse.style.display = 'flex';
};

function tokeyboard() {
    setup.style.display = 'none';
    keyboard.style.display = 'flex';
};

function tocase() {
    setup.style.display = 'none';
    pccase.style.display = 'flex';
};

function topowersupply() {
    pccase.style.display = 'none';
    powersupply.style.display = 'flex';
};

function toharddrive() {
    pccase.style.display = 'none';
    harddrive.style.display = 'flex';
};

function tomotherboard() {
    pccase.style.display = 'none';
    motherboard.style.display = 'flex';
};

function tocpu() {
    pccase.style.display = 'none';
    cpu.style.display = 'flex';
};

function togpu() {
    pccase.style.display = 'none';
    gpu.style.display = 'flex';
};

function toram() {
    pccase.style.display = 'none';
    ram.style.display = 'flex';
};

function frommonitor() {
    monitor.style.display = 'none';
    setup.style.display = 'flex';
};

function frommouse() {
    mouse.style.display = 'none';
    setup.style.display = 'flex';
};

function fromkeyboard() {
    keyboard.style.display = 'none';
    setup.style.display = 'flex';
};

function fromcase() {
    pccase.style.display = 'none';
    setup.style.display = 'flex';
};

function frompowersupply() {
    powersupply.style.display = 'none';
    pccase.style.display = 'flex';
};

function fromharddrive() {
    harddrive.style.display = 'none';
    pccase.style.display = 'flex';
};

function frommotherboard() {
    motherboard.style.display = 'none';
    pccase.style.display = 'flex';
};

function fromcpu() {
    cpu.style.display = 'none';
    pccase.style.display = 'flex';
};

function fromgpu() {
    gpu.style.display = 'none';
    pccase.style.display = 'flex';
};

function fromram() {
    ram.style.display = 'none';
    pccase.style.display = 'flex';
};

/*------------------------------------------*/


function checkfields() {
    if (fullname.value === "" || email.value === "" || message.value === "") {
        alert("Fill all fields.")
    } else {
        window.location = "EnglishThankyou.html";
    }
};




function toweb(){
    websites.style.display = 'flex';
    gallery.style.display = 'none';
    videos.style.display = 'none';
};

function topic(){
    websites.style.display = 'none';
    gallery.style.display = 'flex';
    videos.style.display = 'none';
};

function tovid(){
    websites.style.display = 'none';
    gallery.style.display = 'none';
    videos.style.display = 'flex';
};





function disp() {
    pandatext.style.display = 'flex';
    calctext.style.display = 'none';
    mcalctext.style.display = 'none';
    camtext.style.display = 'none';
    bnhtext.style.display = 'none';
    bookingtext.style.display = 'none';
}

function disc() {
    pandatext.style.display = 'flex';
    calctext.style.display = 'flex';
    mcalctext.style.display = 'none';
    camtext.style.display = 'none';
    bnhtext.style.display = 'none';
    bookingtext.style.display = 'none';
}

function dism() {
    pandatext.style.display = 'none';
    calctext.style.display = 'none';
    mcalctext.style.display = 'flex';
    camtext.style.display = 'none';
    bnhtext.style.display = 'none';
    bookingtext.style.display = 'none';
}

function disca() {
    pandatext.style.display = 'none';
    calctext.style.display = 'none';
    mcalctext.style.display = 'none';
    camtext.style.display = 'flex';
    bnhtext.style.display = 'none';
    bookingtext.style.display = 'none';
}

function disb() {
    pandatext.style.display = 'none';
    calctext.style.display = 'none';
    mcalctext.style.display = 'none';
    camtext.style.display = 'none';
    bnhtext.style.display = 'flex';
    bookingtext.style.display = 'none';
}

function disbo() {
    pandatext.style.display = 'none';
    calctext.style.display = 'none';
    mcalctext.style.display = 'none';
    camtext.style.display = 'none';
    bnhtext.style.display = 'none';
    bookingtext.style.display = 'flex';
}