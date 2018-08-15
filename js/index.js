'use strict';
var time = function () {
    var int = new Date(2018, 3 ,7);
    var timeLong = new Date() -int;
    var day = Math.floor(timeLong / 1000 / 60 / 60 / 24);
    var hour = Math.floor(timeLong / 1000 / 60 / 60 % 24);
    var minu = Math.floor(timeLong / 1000 / 60 % 60);
    var second = Math.floor(timeLong / 1000 % 60);
    document.querySelector('.day').innerHTML = day;
    document.querySelector('.hour').innerHTML = hour;
    document.querySelector('.min').innerHTML = minu;
    document.querySelector('.sec').innerHTML = second;
}
setInterval(time, 1000);