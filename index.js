window.onload = function() {
    document.getElementById('button').onclick = function() {
        this.style.color = 'red';
    }
};
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
    document.getElementById("/cut1").src=color+".png"
}
function changeCut2(color){
    document.getElementById("\cut2").src=color+".png"
}
function changeCut3(color){
    document.getElementById("cut3").src=color+".png"
}