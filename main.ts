controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Broken_Ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . 8 . . . . . . . 
    . 2 2 . . . 8 f 8 . . . 2 2 . 
    . 2 2 . . 8 8 f 8 8 . . 2 2 . 
    . 2 2 . . 8 f 1 f 8 . . 2 2 . 
    . 2 2 . 8 8 f 1 f 8 8 . 2 2 . 
    . 2 2 8 8 6 f 1 f 6 8 8 2 2 . 
    . 8 8 8 6 6 6 6 6 6 6 8 8 8 . 
    . 8 5 5 6 4 4 4 4 4 6 5 5 8 . 
    . 8 5 5 6 4 5 5 5 4 6 5 5 8 . 
    . 8 5 5 6 4 5 1 5 4 6 5 5 8 . 
    4 4 5 5 6 4 5 5 5 4 6 5 5 4 4 
    4 4 8 8 8 8 8 8 8 8 8 8 8 4 4 
    4 4 . . . . . . . . . . . 4 4 
    4 4 . . . . . . . . . . . 4 4 
    4 4 . . . . . . . . . . . 4 4 
    4 4 . . . . . . . . . . . 4 4 
    `, SpriteKind.Player)
mySprite.setPosition(76, 115)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    Broken_Ship = sprites.createProjectileFromSide(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 4 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . e 4 . . . . . . . 
        . . . . . . e e 5 2 . . . . . . 
        . . . . . . e 4 5 2 . . . . . . 
        . . . . . c c c 2 2 2 . . . . . 
        . . . . e e 4 4 4 5 2 2 . . . . 
        . . e f f f c c 2 2 f f 2 2 . . 
        . e e e e 2 2 4 4 4 4 5 4 2 2 . 
        e e e e e e 2 2 4 4 4 5 4 4 2 2 
        e e e e e e 2 2 4 4 4 4 5 4 2 2 
        `, 0, 50)
    Broken_Ship.x = randint(0, scene.screenWidth())
    Broken_Ship.setKind(SpriteKind.Enemy)
})
