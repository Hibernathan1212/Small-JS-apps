var player, playerImage
var enemy, enemyImage, enemySpeed
var backgroundImage

var isGameOver

var score

function preload() { //from p5.js
    playerImage = loadImage('https://cloud-9x4hvopq6-hack-club-bot.vercel.app/0N5uCbDu.png')
    enemyImage = loadImage('https://cloud-4lajub4te-hack-club-bot.vercel.app/0OdL0XPt.png')
    backgroundImage = loadImage('https://cloud-dptjloh1q-hack-club-bot.vercel.app/0aKQOg3G.png')

}

function setup() { //from p5.js
    createCanvas(256, 512)
    player = createSprite(width / 2, height - playerImage.height / 2, 0, 0)
    player.addImage(playerImage)
    enemy = createSprite(width / 2, 0, 0, 0)
    enemy.addImage(enemyImage)
    enemy.rotationSpeed = 4.0

    enemySpeed = 5

    isGameOver = false

    score = 0
}

function draw() { //from p5.js
    if (enemy.overlap(player) || isGameOver) {
        isGameOver = true
        gameOver()
    } else {
        background(backgroundImage)

        if (keyDown(RIGHT_ARROW) && player.position.x < width - 25) {
            player.position.x += 8
        }
    
        if (keyDown(LEFT_ARROW) && player.position.x > 0 + 25) {
            player.position.x -= 8
        }
    
        enemy.position.y += enemySpeed
    
        if (enemy.position.y > height - 15) {
            enemy.position.y = 0
            enemy.position.x = random(5, width - 5)

            enemySpeed += 0.2

            score += 1
        }

        textAlign(CENTER)
        textSize(64)
        fill('white')
        text(score, width / 2, height / 2)
    
        drawSprites()
    }
}

function gameOver() {
    background(0)
    textAlign(CENTER)
    fill('white')
    text('Game Over!', width / 2, height / 2)
    text('Click anywhere to try again', width / 2, (3 * height) / 4)

    enemySpeed = 5

    score = 0
}

function mouseClicked() { //from p5.js
    if (isGameOver) {
        isGameOver = false

        player.position.x = width / 2
        player.position.y = height - playerImage.height / 2
        enemy.position.x = width / 2
        enemy.position.y = 0

    }
}