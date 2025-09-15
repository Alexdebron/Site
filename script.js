const tracks = [
  { name: "7qwzsu.mp3", url: "https://files.catbox.moe/7qwzsu.mp3" },
  { name: "klnfay.mp3", url: "https://files.catbox.moe/klnfay.mp3" },
  { name: "drvvjf.mp3", url: "https://files.catbox.moe/drvvjf.mp3" }
];

let currentTrack = 0;
let isPlaying = false;

const audio = new Audio(tracks[currentTrack].url);
const trackName = document.getElementById("track-name");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function updateTrack() {
  audio.src = tracks[currentTrack].url;
  trackName.textContent = `Track: ${tracks[currentTrack].name}`;
}

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶️";
  } else {
    audio.play();
    playBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  updateTrack();
  if (isPlaying) audio.play();
});

prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  updateTrack();
  if (isPlaying) audio.play();
});