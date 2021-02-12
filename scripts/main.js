import dab from '../data.js';

let color1 = document.getElementById("area1");
let color2 = document.getElementById("area2");

function main() {
    console.log('Page is fully loaded');
}

window.addEventListener('load', main);
color1.addEventListener('click', onClickArea1);
color2.addEventListener('click', onClickArea2);


async function onClickArea1() {
    document.getElementById("talk-display").style.backgroundColor = "#32cd32";
    document.getElementById("hotspot1").innerHTML = dab[0].hotspot1;
    let utterance = new SpeechSynthesisUtterance(dab[0].hotspot1);
    speechSynthesis.speak(utterance);
}

async function onClickArea2() {
    document.getElementById("talk-speech").style.backgroundColor = "#8FBC8F";
    document.getElementById("hotspot2").innerHTML = dab[1].hotspot2;
    let utterance = new SpeechSynthesisUtterance(dab[1].hotspot2);
    speechSynthesis.speak(utterance);
}


