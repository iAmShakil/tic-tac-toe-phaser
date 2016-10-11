/* globals game */

'use strict'

let loadState = {
  preload () {
    // background for menu
    game.load.image('background', 'assets/images/background.png')

    // load game image assets
    game.load.image('levelBackground', 'assets/images/level-background.png')
    game.load.image('x', 'assets/images/x.png')
    game.load.image('o', 'assets/images/o.png')

    // invisible sprite for cell
    game.load.image('cell', 'assets/images/cell.png')

    // load game audio assets
    // game.load.audio('audio', ['assets/audio/audio.mp3', 'assets/audio/audio.ogg'])
  },
  create () {
    game.state.start('menu')
  }
}
