/* globals game */

'use strict'

const loadState = {
  preload () {
    game.load.path = 'images/'
    game.load.images(['background', 'level-background', 'x', 'o', 'cell'])
  },
  create () {
    game.state.start('menu')
  }
}
