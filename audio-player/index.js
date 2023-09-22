const audio = document.querySelector('.audio-1');
const play = document.querySelector('.btn-play');
const range = document.querySelector('.range');
const path = document.querySelector('.path')
const current = document.querySelector('.current')
const duration = document.querySelector('.remaining')


function playAudio() {
  if (play.classList.contains('pause')) {
    audio.play();
    path.setAttribute('d', 'M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM11 14V7H12V14H11ZM8 7V14H9V7H8Z');
    play.classList.remove('pause')
  } else {
    audio.pause();
    path.setAttribute('d', 'M19 10C19 14.9706 14.9706 19 10 19C5.02943 19 1 14.9706 1 10C1 5.02943 5.02943 1 10 1C14.9706 1 19 5.02943 19 10ZM20 10C20 15.5229 15.5228 20 10 20C4.47716 20 0 15.5229 0 10C0 4.47715 4.47716 0 10 0C15.5228 0 20 4.47715 20 10ZM7.5 14.3301L15 10L7.5 5.66988V14.3301Z')
    play.classList.add('pause')
  }
}

play.addEventListener('click', playAudio)


function progressTime() {
  if(audio.play()) {
    setInterval( () => {
      range.value = audio.currentTime;
      current.innerHTML = (audio.currentTime).toFixed(2) / 60;
      duration.innerHTML = ((audio.duration - audio.currentTime) / 60).toFixed(2);
      console.log(audio.currentTime)
    },500);
  }
}

range.onchange = function() {
  audio.play();
  audio.currentTime = range.value;
  path.setAttribute('d', 'M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM11 14V7H12V14H11ZM8 7V14H9V7H8Z');
}

progressTime()