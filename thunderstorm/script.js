var body = document.body

var rain = new Howl({
    src: 'rain.mp3',
    volume: 0.1
})

var thunder = new Howl({
    src: 'thunder_sprites.mp3',
    sprite: {
        a: [0, 8000],
        b: [8000, 16000],
        c: [16000, 24000],
        d: [24000, 32000]
      },
    volume: 0.75
})

var raining = false

body.style.background = 'MidnightBlue'

function flashOn() {
    body.style.background = 'white'
    setTimeout(flashOff, 20) //ms

    if (Math.random() < 0.5) { //next flash
        setTimeout(flashOn, 50 + Math.random() * 450)
    }
}

function flashOff() {
    body.style.background = 'MidnightBlue'
}

function playThunder() {
    var index = Math.floor(Math.random() * 4)
    var sprite = 'abcd'[index]
    thunder.play(sprite)
}

function constant() {
    var delay = 10000 + Math.floor(Math.random() * 60000)
    setTimeout(flashOn, delay)
    var delay = 2000 + Math.floor(Math.random() * 3000)
        setTimeout(playThunder, delay)
}

function click() {
    flashOn()

    var delay = 2000 + Math.floor(Math.random() * 3000)
    setTimeout(playThunder, delay)


    if (!raining) {
        rain.play()
        raining = true
        constant()
    }
}

window.addEventListener('click', click)
