def on_b_pressed():
    game.splash("!*Paused*!")
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global star
    info.change_score_by(5)
    audience.set_image(assets.image("""
        clap2
    """))
    star = sprites.create_projectile_from_sprite(simplified.choose_random_image(assets.image("""
                star
            """),
            assets.image("""
                rose
            """),
            img("""
                . . b b b b . . 
                        . b 5 5 5 5 b . 
                        b 5 d 3 3 d 5 b 
                        b 5 3 5 5 1 5 b 
                        c 5 3 5 5 1 d c 
                        c d d 1 1 d d c 
                        . f d d d d f . 
                        . . f f f f . .
            """),
            img("""
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
            """),
            assets.image("""
                myImage
            """)),
        audience,
        randint(-80, 80),
        randint(-50, -100))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_countdown_end():
    game.over(True)
info.on_countdown_end(on_countdown_end)

def on_a_released():
    audience.set_image(assets.image("""
        clap1
    """))
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

star: Sprite = None
audience: Sprite = None
scene.set_background_image(assets.image("""
    stage
"""))
talent = sprites.create(assets.image("""
        towering turtles
    """),
    SpriteKind.player)
talent.bottom = 115
game.show_long_text("Prese A to score points. Prese B to pause. Good Luck!",
    DialogLayout.CENTER)
info.start_countdown(10)
audience = sprites.create(assets.image("""
    clap1
"""), SpriteKind.player)
audience.bottom = 120