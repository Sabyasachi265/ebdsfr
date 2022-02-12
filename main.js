function Yellow(){
navigator.mediaDevices.getUserMedia({ audio : true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/itsIqk6pc/model.json', YesNo);
}
function YesNo(){
    classifier.classify(gotResults);
}
function gotResults(error, result){
console.log('Got Result')
}