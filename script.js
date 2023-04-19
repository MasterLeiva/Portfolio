var openBtn = document.querySelector('#openBtn');
var closeBtn = document.querySelector('#close');
var linkNavPort = document.querySelector('#linkNav-port');
var linkNavAbout = document.querySelector('#linkNav-about');
var linkNavCont = document.querySelector('#linkNav-cont');
var windowUl = document.querySelector('.links');

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