import './style.css';

var red1 = document.getElementById('red-1');
var red2 = document.getElementById('red-2');
var green1 = document.getElementById('green-1');
var green2 = document.getElementById('green-2');

window.addEventListener('load', start); 

var start = setInterval(function() {
    traffic(); 
}, 5000);

function traffic() {
    allRed();
    setTimeout(directionA(), 2000);
    setTimeout(allRed(), 5000);
    setTimeout(directionB(), 2000);
}

function directionA() {
    allOff();
    green1.style.backgroundColor = "green";
    red2.style.backgroundColor = "red";
}

function directionB() {
    allOff();
    green2.style.backgroundColor = "green";
    red1.style.backgroundColor = "red";
}

function allRed() {
    allOff();
    red1.style.backgroundColor = "red";
    red2.style.backgroundColor = "red";
}

function allOff() {
    document.getElementsByClassName('red').style.backgroundColor = "rgb(100, 0, 0)";
    document.getElementsByClassName('green'),style.backgroundColor = "rgb(0, 70, 0)";
}