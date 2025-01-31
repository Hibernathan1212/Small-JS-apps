var NUM_CIRCLES = 12
var circleDiameter
var rVal
var gVal
var bVal

function setup() {
    createCanvas(920, 1000)

    frameRate(1)

    circleDiameter = width / NUM_CIRCLES

    rVal = 255
    gVal = 0
    bVal = 0
}

function draw() {
    var isShifted = false

    var y = height
    while (y >= 0) {
        var x = 0
        while (x <= width) {
            fill(color(rVal, gVal, bVal))
            stroke(color(rVal, gVal, bVal))
            strokeWeight(2)
            circle(x + isShifted * circleDiameter / 2, y, circleDiameter)
            x = x + circleDiameter
        }
        y = y - circleDiameter / 2
        isShifted = !isShifted

        rVal = (rVal + 254) % 256
        gVal = (gVal + 7) % 256
        bVal = (bVal + 3) % 256
    }
}