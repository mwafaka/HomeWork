
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
    console.log('heloo');
  if (audio.paused) {
    audio.volume = 0.5;
    audio.play();
  } else {
    audio.pause();  
  }
  button.classList.add("fade");
});
