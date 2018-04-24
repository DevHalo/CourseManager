const anime = require('../js/anime.min.js');
const remote = require('electron').remote;
var maximized = 0;

window.onload = function () {
    var btns = anime({
        targets: '.windowBtns div',
        scale: {
            value: 2,
            delay: 1250,
            easing: 'easeOutElastic'
        },
        translateX: {
            value: function (el, i) {
                return (i * -12);
            },
            delay: 1000,
            duration: 250
        },
        right: {
            value: '0.8%',
            duration: 1000,
        },
        opacity: 1,
        easing: 'easeOutCubic'
    })

    document.getElementById('closeBtn').addEventListener('click', function () {
        remote.getCurrentWindow().close();
    });

    document.getElementById('maximizeBtn').addEventListener('click', function () {
        if (maximized == 0) {
            remote.getCurrentWindow().maximize();
            maximized = 1;
        } else {
            remote.getCurrentWindow().unmaximize();
            maximized = 0;
        }
    });

    document.getElementById('minimizeBtn').addEventListener('click', function () {
        remote.getCurrentWindow().minimize();
    });
};