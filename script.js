let openBtn = document.querySelector('#openBtn');
let closeBtn = document.querySelector('#close');
let linkNavPort = document.querySelector('#linkNav-port');
let linkNavAbout = document.querySelector('#linkNav-about');
let linkNavCont = document.querySelector('#linkNav-cont');
let windowUl = document.querySelector('.links');

function openWindow() {
  windowUl.classList.add('show');
}

function closeWindow() {
  windowUl.classList.remove('show');
}

closeBtn.addEventListener('click', closeWindow);
openBtn.addEventListener('click', openWindow);
linkNavPort.addEventListener('click', closeWindow);
linkNavAbout.addEventListener('click', closeWindow);
linkNavCont.addEventListener('click', closeWindow);