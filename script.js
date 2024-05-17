var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
  recognition.start();
  console.log("selfie");
  Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
  width: 380,
  height: 400,
  image_format: "jpeg",
  jpeg_quality: 90,
});

recognition.onresult = function (event) {
  console.log(event);

  var Content = event.results[0][0].transcript;

  console.log(Content);
  if (Content == "selfie") {
    console.log("taking selfie---");
    speak();
  }
};

function speak() {
  console.log("selfie mota");
  var synth = window.speechSynthesis;

  setTimeout(function () {
    img_id = "selfi1";
    takeSnapshot();
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }, 5000);
}
var currentResultIndex = 1; // Variable to keep track of the current result index
function takeSnapshot() {
  var img_id = "selfi" + currentResultIndex; // Generate the img_id based on current index
  console.log(img_id);

  Webcam.snap(function (data_url) {
    var resultElement = document.getElementById("result" + currentResultIndex);
    resultElement.innerHTML =
      "<img id='" + img_id + "' src='" + data_url + "' >";
  });

  if(currentResultIndex == 3){
    currentResultIndex = 1
  }else{
    currentResultIndex++; // Increment the current result index for the next selfie
  }
}
