//https://teachablemachine.withgoogle.com/models/O_AkrZcUu/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O_AkrZcUu/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}