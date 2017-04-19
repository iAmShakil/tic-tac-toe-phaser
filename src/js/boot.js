/* globals game, Phaser */

'use strict'

const bootState = {
  create () {
    if (!game.device.desktop) {
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

      document.body.style.backgroundColor = '#ffffff'

      game.scale.minHeight = 186
      game.scale.minWidth = 186
      game.scale.maxHeight = 560
      game.scale.maxWidth = 560

      game.scale.pageAlignHorizontally = true
      game.scale.pageAlignVertically = true

      game.scale.updateLayout(true)
    }

    game.state.start('load')
  }
}
