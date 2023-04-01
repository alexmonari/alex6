input.onGesture(Gesture.TiltLeft, function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
function jump () {
    let sprite: game.LedSprite = null
    images.createBigImage(`
        . . # . . . # . # .
        . # . # . # . # . #
        # . # . # . # . # .
        . # . # . # . # . #
        . . # . # . # . # .
        `).showImage(0)
    sprite.set(LedSpriteProperty.Y, 10)
}
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
