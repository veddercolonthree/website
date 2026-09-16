document.querySelectorAll(".albumPlayer").forEach((player) => {
  const playBtn = player.querySelector(".playBtn");
  const pauseBtn = player.querySelector(".pauseBtn");
  const audio = player.querySelector("audio");

  playBtn.addEventListener("click", () => {
    audio.play();
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
  });
});