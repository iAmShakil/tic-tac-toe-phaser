/* globals game */

'use strict'

let loadState = {
  preload () {
    game.load.path = 'images/'
    game.load.images(['background', 'level-background', 'x', 'o', 'cell'])
  },
  create () {
    game.state.start('menu')
  }
}
