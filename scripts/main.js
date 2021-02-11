function onClickArea1() {

    document.getElementById("talk-display").style.backgroundColor = "#32CD32";


    document.getElementById("hotspot1").innerHTML = "Clicked on Green color";
    let utterance = new SpeechSynthesisUtterance("Clicked on Green color");
    speechSynthesis.speak(utterance);

}

function onClickArea2() {


    document.getElementById("talk-speech").style.backgroundColor = "#8FBC8F";

    document.getElementById("hotspot2").innerHTML = "Clicked on Gray color";
    let utterance = new SpeechSynthesisUtterance("Clicked on Gray color");
    speechSynthesis.speak(utterance);

}
