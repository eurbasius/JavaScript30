const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

if (navigator.getUserMedia) {
  // do stuff
  navigator.getUserMedia({video:true, audio:false}, success, error);
}
else {
  console.log('Lel!');
}

function success(stream) {
  console.log(stream)
  document.getElementById('myVideo').src = stream;
}

function error(stream) {
  console.log('ERROR!');
}
