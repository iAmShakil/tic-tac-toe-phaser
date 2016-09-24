/* globals Phaser */

let game = new Phaser.Game(560, 560, Phaser.AUTO)

game.state.add('boot', bootState)
game.state.add('load', loadState)
game.state.add('menu', menuState)
game.state.add('play', playState)

game.state.start('boot')
