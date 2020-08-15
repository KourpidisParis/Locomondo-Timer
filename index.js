const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

// About circle
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
var myAudio = new Audio("locomusic.mp3");
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    console.log("Timer started");
    duration = totalDuration;
    myAudio.play();
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("Timer is completed");
    myAudio.ended();
  },
});
