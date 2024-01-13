function giveIntroduction () {
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 1 1 1 1 1 1 1 1 1 1 2 2 . 
        2 1 1 2 2 2 2 2 2 2 2 1 1 2 . 
        2 1 2 2 1 1 1 1 1 1 2 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 2 1 1 1 1 1 1 2 2 1 2 . 
        2 1 1 2 2 2 2 2 2 2 2 1 1 2 . 
        2 2 1 1 1 1 1 1 1 1 1 1 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `)
    showInstruction("Prese A to score points.")
    showInstruction("Prese B to pause.")
    showInstruction("Good luck!")
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    giveIntroduction2()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(5)
    audience.setImage(assets.image`clap2`)
    star = sprites.createProjectileFromSprite(simplified.chooseRandomImage(assets.image`star`, assets.image`rose`, img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, img`
        5 4 5 4 5 4 5 7 7 4 5 4 5 4 5 4 
        4 9 f f f 9 f 7 7 f 9 f f f 9 5 
        5 f 9 9 9 f 5 9 7 4 f 9 9 9 f 4 
        4 f 9 8 f 5 4 7 7 5 4 f 8 9 f 5 
        5 f 9 f 5 4 5 7 9 4 5 4 f 9 f 4 
        4 9 f 5 4 5 4 7 7 5 4 5 4 f 9 5 
        5 f 5 4 5 4 5 9 7 4 5 4 5 4 f 4 
        7 7 7 7 9 7 7 4 5 7 7 9 7 7 7 7 
        7 7 9 7 7 7 9 5 4 9 7 7 7 9 7 7 
        4 f 4 5 4 5 4 9 7 5 4 5 4 5 f 5 
        5 9 f 4 5 4 5 7 7 4 5 4 5 f 9 4 
        4 f 9 f 4 5 4 7 9 5 4 5 f 9 f 5 
        5 f 9 8 f 4 5 7 7 4 5 f 8 9 f 4 
        4 f 9 9 9 f 4 9 7 5 f 9 9 9 f 5 
        5 9 f f f 9 f 7 7 f 9 f f f 9 4 
        4 5 4 5 4 5 4 7 7 5 4 5 4 5 4 5 
        `, assets.image`myImage`), audience, randint(-80, 80), randint(-50, -100))
})
function giveIntroduction2 () {
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 1 1 1 1 1 1 1 1 1 1 2 2 . 
        2 1 1 2 2 2 2 2 2 2 2 1 1 2 . 
        2 1 2 2 1 1 1 1 1 1 2 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 2 1 1 1 1 1 1 2 2 1 2 . 
        2 1 1 2 2 2 2 2 2 2 2 1 1 2 . 
        2 2 1 1 1 1 1 1 1 1 1 1 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `)
    showInstruction2("        #@! paused !@#")
}
function showInstruction2 (text: string) {
    game.showLongText(text, DialogLayout.Top)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
}
info.onCountdownEnd(function () {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    audience.setImage(assets.image`clap1`)
})
function showInstruction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
}
let star: Sprite = null
let audience: Sprite = null
scene.setBackgroundImage(assets.image`stage`)
let talent = sprites.create(assets.image`towering turtles`, SpriteKind.Player)
talent.bottom = 115
audience = sprites.create(assets.image`clap1`, SpriteKind.Player)
audience.bottom = 120
giveIntroduction()
info.startCountdown(10)
