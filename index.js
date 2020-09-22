const { func } = require("prop-types");

window.onload = function() {
    document.getElementById('button').onclick = function() {
        this.style.color = 'red';
    }
};
function load() {
    var input = document.getElementById("code").value;
    document.getElementById("1-1").value = input;
}
function debug() {
    var input = document.getElementById("code").value;
    var input = input.split('G');
    for (var i in input) {
        var result = parseInt(i/3);
        var remainder = i % 3;
        var cardLocated = String(result+1) + "-" + String(remainder+1);
        document.getElementById(cardLocated).value = input[i];
    }
 }
function copy() {
    var copy = '';
    for (var i = 0; i<15; i++) {
        var result = parseInt(i/3);
        var remainder = i % 3;
        var cardLocated = String(result+1) + "-" + String(remainder+1);
        var copy = copy + document.getElementById(cardLocated).value + "G";
    }
    document.getElementById("code").value = copy;
    document.getElementById("code").select();
    document.execCommand('copy');
}
function run() {
    var cut1 = 0; 
    var cut2 = 0; 
    var cut3 = 0; 
    for (var i = 0; i<15; i++) {
        var result = parseInt(i/3);
        var remainder = i % 3;
        var cardLocated = String(result+1) + "-" + String(remainder+1);
        if (remainder == 0) {
            var cut1 = cut1 + Number(document.getElementById(cardLocated).value);
        }
        if (remainder == 1) {
            var cut2 = cut2 + Number(document.getElementById(cardLocated).value);
        }
        if (remainder == 2) {
            var cut3 = cut3 + Number(document.getElementById(cardLocated).value);
        }
    }
    alert(cut1);
    alert(cut2);
    alert(cut3);
}
function radioTest() {
    var radioCheck = document.getElementById("radioVoice");
    var radioCheckMental = document.getElementById("radioMental");
    var voiceImg = document.getElementById("voiceImg");
    var mentalImg = document.getElementById("voiceMental");
    if(radioCheck == true) {
        voiceImg.src = "technic.png";
        alert("hi");
    }else{
        voiceImg.src = "voice.png";
    }
    if(radioCheckMental == true){
        mentalImg = "charisma.png";
    }else{
        mentalImg = "mental.png"
    }
}
function changeBackground(color){
    document.body.style.backgroundColor = color;
}
function changeCut1(color){
    document.getElementById("cut1").src=color+".png"
}
function changeCut2(color){
    document.getElementById("cut2").src=color+".png"
}
function changeCut3(color){
    document.getElementById("cut3").src=color+".png"
}