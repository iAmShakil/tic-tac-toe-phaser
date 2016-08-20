let mainState = {
  preload: function () {
    game.load.image('background', 'assets/images/background.png')
    game.load.image('x', 'assets/images/x.png')
    game.load.image('o', 'assets/images/o.png')
  },
  create: function () {
    // set game background image
    this.background = game.add.sprite(0, 0, 'background')
  },
  update: function () {}
}

let game = new Phaser.Game(560, 586, Phaser.AUTO)
game.state.add('main', mainState)
game.state.start('main')
