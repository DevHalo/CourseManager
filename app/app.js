const anime = require('../app/js/anime.min.js');
const vis = require("vis");
const remote = require('electron').remote;
var maximized = 0;
var loadingElement;
var logoRotate;
var line;
var isLoading;
var loadingPromise;

loadingElement = document.getElementById('loading');
//loading.style.display = 'none';
var btns = anime({
    targets: '.windowBtns div',
    translateX: {
        value: function (el, i) {
            return (i * -25);
        },
        duration: 500,
    },
    right: {
        value: '8px',
        duration: 500,
    },
    opacity: 1,
    easing: 'easeOutCubic'
})

logoRotate = anime({
    targets: '.loadingCircle',
    rotate: '1turn',
    easing: 'easeOutExpo',
    duration: 2000,
    autoplay: false,
    update: function () {
        if (isLoading) {
            console.log("Running...");
        }
    },
    complete: function () {
        if (isLoading) {
            logoRotate.restart();
        }
    }
});

line = anime.timeline({
    autoplay: false
}).add({
    targets: '#loading',
    opacity: 1,
    duration: 1000
}).add({
    targets: '#logo-letter-border',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 500,
    easing: 'easeInOutSine',

}).add({
    targets: '#logo-border',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 500,
    easing: 'easeInOutSine',
}).add({
    targets: ['#logo-letter-border', '#logo-border'],
    duration: 500,
    easing: 'easeInCubic',
    update: function (anim) {
        document.getElementById('logo-letter-border').setAttribute('fill-opacity', (anim.progress - 80) / 20);
        document.getElementById('logo-border').setAttribute('fill-opacity', (anim.progress - 80) / 20);
    },
    complete: function (anim) {
        if (isLoading) {
            logoRotate.restart();
        }
    }
})


document.getElementById('closeBtn').addEventListener('click', function () {
    remote.getCurrentWindow().close();
});

document.getElementById('maximizeBtn').addEventListener('click', function () {
    if (maximized == 0) {
        remote.getCurrentWindow().maximize();
    } else {
        remote.getCurrentWindow().unmaximize();
    }
});

document.getElementById('minimizeBtn').addEventListener('click', function () {
    remote.getCurrentWindow().minimize();
});

remote.getCurrentWindow().on('maximize', () => {
    maximized = 1;
});

remote.getCurrentWindow().on('unmaximize', () => {
    maximized = 0;
});

function toggleLink(uls) {
    var ulC = document.querySelectorAll('.nav ul');

    for (var i = 0; i < uls.length; i++) {
        ulC[i].classList.remove('active');
    }

    uls.classList.add('active');
    anime.remove(ulC);

    anime({
        targets: '.nav ul:not(.active)',
        height: 40,
        duration: 400,
        easing: 'easeOutQuart'
    });

    anime({
        targets: uls,
        height: function (e1) {
            return e1.childnodes.length * 40 + 20;
        },
        duration: 600,
        delay: 400,
        easing: 'easeInOutQuart'
    });
}

function showLoading() {
    console.log('Loading Started!');
    loadingElement.style.display = 'block';
    var paths = document.querySelectorAll('.loadingCircle path');
    for (var i = 0; i < paths.length; i++) {
        paths[i].setAttribute('fill-opacity', 0);
    }

    isLoading = true;
    // Reset animations
    line.restart();
}

function hideLoading() {
    isLoading = false;
    logoRotate.finished.then(finishHideLoading);
}

function finishHideLoading() {
    console.log("Animating Out...")
    var fadeOut = anime.timeline({
        autoplay: false
    });

    fadeOut.add({
        targets: '.loadingCircle path',
        fillOpacity: [1, 0],
        easing: "linear",
        duration: '500',
        complete: function () {
            line.play();
            line.reverse();
        }
    });
    fadeOut.play();
}

// create an array with nodes
var nodes = new vis.DataSet([{
        id: 1,
        label: 'Node 1'
    },
    {
        id: 2,
        label: 'Node 2'
    },
    {
        id: 3,
        label: 'Node 3'
    },
    {
        id: 4,
        label: 'Node 4'
    },
    {
        id: 5,
        label: 'Node 5'
    }
]);

// create an array with edges
var edges = new vis.DataSet([{
        from: 1,
        to: 3
    },
    {
        from: 1,
        to: 2
    },
    {
        from: 2,
        to: 4
    },
    {
        from: 2,
        to: 5
    }
]);

// create a network
var container = document.getElementById('graph-view');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};

// initialize your network!
var network = new vis.Network(container, data, options);