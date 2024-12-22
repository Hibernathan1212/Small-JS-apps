function play(link) {
    let audio = new Audio(link);
    audio.load();
    audio.play();
}

document.onkeydown = function (e) {
    e = e || window.event
    var key = e.which || e.keyCode
    if (key === 12) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3')
    }
    if (key === 187) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3')
    }
    if (key === 111) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3')
    }
    if (key === 105) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3')
    }
    if (key === 104) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3')
    }
    if (key === 103) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3')
    }
    if (key === 102) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3')
    }
    if (key === 101) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3')
    }
    if (key === 100) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3')
    }
    if (key === 99) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3')
    }
    if (key === 98) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3')
    }
    if (key === 97) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3')
    }
    
}

