var FRAMES = 148 ;
// fram per second
var FPS = 30 ;
 var video = document.getElementById('video')

 window.addEventListener('scroll' , function(){
    var time = (window.scrollY / 1000) * FRAMES / FPS;
    video.currentTime = time
 });

 window.addEventListener('load' ,function(){
    video.pause();
    video.currentTime = 0
 });