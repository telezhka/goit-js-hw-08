const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash/throttle';
player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function (time) {
    console.log(time);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  }, 1000)
);
// time check test

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   const currentTime = localStorage.getItem('videoplayer-current-time');
//   const parsedTime = JSON.parse(currentTime);
//   console.log(currentTime);
//   console.log(parsedTime);
//   console.log(parsedTime.seconds);
// });
// check end
const currentTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(currentTime);
player
  .setCurrentTime(parsedTime.seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
