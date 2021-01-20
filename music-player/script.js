const music_container = document.getElementById("music-container");
const play = document.getElementById("play");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

const cover = document.getElementById("cover");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progress_container = document.getElementById("progress-container");
const title = document.getElementById("title");

let songs = [
    { title: "hey", image: "images/hey.jpg", track: "music/hey.mp3" },
    { title: "summer", image: "images/summer.jpg", track: "music/summer.mp3" },
    { title: "ukulele", image: "images/ukulele.jpg", track: "music/ukulele.mp3" }
];

var songIndex = 0;
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song.title;
    cover.src = song.image;
    audio.src = song.track;
}

function playOrPauseSong() {
    if (!audio.paused) {
        music_container.classList.remove('play');
        play.innerHTML = '<i class="fa fa-play"></i>';
        audio.pause();
    } else {
        music_container.classList.add('play');
        play.innerHTML = '<i class="fa fa-pause"></i>';
        audio.play();
    }
}

function nextSong() {
    songIndex = songIndex >= songs.length - 1 ? 0 : ++songIndex;
    loadSong(songs[songIndex]);
    playOrPauseSong();
}

function previousSong() {
    songIndex = songIndex == 0 ? songs.length-1 :  --songIndex;
    loadSong(songs[songIndex]);
    playOrPauseSong();
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX/width)*duration;

}

function updateProgress(e){
const {duration,currentTime} = e.srcElement;
const progressPercent = (currentTime/duration)*100;
progress.style.width = `${progressPercent}%`;
}

play.addEventListener('click', playOrPauseSong);
next.addEventListener('click', nextSong);
previous.addEventListener('click', previousSong);
progress_container.addEventListener('click',setProgress);
audio.addEventListener('timeupdate',updateProgress);
audio.addEventListener('ended',nextSong);