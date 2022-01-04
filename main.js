function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yU7L809h0/")
}

    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error, results){
        if(error){
            console.error(error);
        }
        }