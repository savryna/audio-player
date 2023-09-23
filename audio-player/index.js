const audio = document.querySelector('.audio');
const audioSrc = document.querySelector('audio > source');
const play = document.querySelector('.btn-play');
const range = document.querySelector('.range');
const path = document.querySelector('.path');
const current = document.querySelector('.current');
const duration = document.querySelector('.remaining');
const nextBtn = document.querySelector('.btn-right');
const prevBtn = document.querySelector('.btn-left');
const author = document.querySelector('.author-name');
const songName = document.querySelector('.song-name');
const blockPlayer = document.querySelector('.container-audio')
const album = document.querySelector('.container-audio-img')
const background = document.querySelector('.background')


// 
// play pause audio
function playAudio() {
  audio.load()
  audio.play();
  path.setAttribute('d', 'M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM11 14V7H12V14H11ZM8 7V14H9V7H8Z');
  play.classList.remove('pause')

 
}

function pauseAudio() {
  audio.pause();
  path.setAttribute('d', 'M19 10C19 14.9706 14.9706 19 10 19C5.02943 19 1 14.9706 1 10C1 5.02943 5.02943 1 10 1C14.9706 1 19 5.02943 19 10ZM20 10C20 15.5229 15.5228 20 10 20C4.47716 20 0 15.5229 0 10C0 4.47715 4.47716 0 10 0C15.5228 0 20 4.47715 20 10ZM7.5 14.3301L15 10L7.5 5.66988V14.3301Z')
  play.classList.add('pause')
}

function controlAudio() {
  if (play.classList.contains('pause')) {
    playAudio()
  } else {
    pauseAudio()
  }
}

play.addEventListener('click', controlAudio)

// progress



function progressTime() {
  if (audio.play()) {
    setInterval(() => {
      range.value = audio.currentTime;
      let audioDuration = audio.duration;
      let totalMin = Math.floor(audioDuration / 60);
      let totalSec = Math.floor(audioDuration % 60);
      if (totalSec < 10) {
        totalSec = `0${totalSec}`;
      }
      duration.innerText = `${totalMin}:${totalSec}`;
      range.setAttribute('max', `${audioDuration}`)

      
    }, 500);
  }
}

range.onchange = function () {
  audio.play();
  audio.currentTime = range.value;
  path.setAttribute('d', 'M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM11 14V7H12V14H11ZM8 7V14H9V7H8Z');
}

progressTime()



// prev next song
const songsAuthor = ['Joji', 'Shortparis'];
const songsName = ['Like you do', 'Страшно']
let songsIndex = 0;

function currentSong(song) {
  author.innerHTML = song;
  songName.innerHTML = songsName[songsIndex];
  audio.src = `./assets/audio/${song}.mp3`;
  album.src = `./assets/img/${song}.jpg`;
  background.src = `./assets/img/${song}.jpg`;
  // author.href = `https://www.youtube.com/watch?v=FUdteCBRX9c`;
  // songName.href = `https://www.youtube.com/watch?v=FUdteCBRX9c`;
  blockPlayer.setAttribute('data-shadow', `${song}`);
}

currentSong(songsAuthor[songsIndex])

function nextSong() {
  songsIndex++;
  if (songsIndex > songsAuthor.length - 1) {
    songsIndex = 0;
  }
  currentSong(songsAuthor[songsIndex])
  playAudio();
}

function prevSong() {
  songsIndex--;
  if (songsIndex < 0) {
    songsIndex = songsAuthor.length - 1;
  }
  currentSong(songsAuthor[songsIndex])
  playAudio();
}


nextBtn.addEventListener('click', nextSong)
prevBtn.addEventListener('click', prevSong)

// loop
audio.addEventListener('ended', nextSong)


// 
// let audioCurrent = audio.currentTime;
// let currentMin = Math.floor(audioCurrent / 60);
// let currentSec = Math.floor(audioCurrent % 60);
// if (currentSec < 10) {
//   currentSec = `0${currentSec}`;
// }
// current.innerText = `${currentMin}:${currentSec}`;

audio.addEventListener('timeupdate', (e) => {
  const audioCurrent = e.target.currentTime;
  let currentMin = Math.floor(audioCurrent / 60);
let currentSec = Math.floor(audioCurrent % 60);
if (currentSec < 10) {
  currentSec = `0${currentSec}`;
}
current.innerText = `${currentMin}:${currentSec}`;

})