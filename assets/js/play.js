/* globals game */

let playState = {
  create () {
    // set game background image
    this.levelBackground = game.add.sprite(0, 0, 'levelBackground')

    // if x <= 5, don't call setO function
    this.x = 0

    // when AI set 'O', player can't set 'X'
    this.playerCanSetX = true

    this.cellWidth = 186
    this.cellHeight = 186

    this.template = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]

    this.cells = game.add.group()

    for (let i = 0; i < this.template.length; i++) {
      for (let j = 0; j < this.template.length; j++) {
        let cell = this.cells.create(i * this.cellWidth, j * this.cellHeight, 'cell')
        cell.inputEnabled = true
        cell.events.onInputDown.add(this.setX, this)
      }
    }
  },
  // player set X sprite
  setX () {
    // Figure out what position on the grid that translates to
    let cellIndexX = Math.floor(game.input.x / this.cellWidth)
    let cellIndexY = Math.floor(game.input.y / this.cellHeight)

    if (this.playerCanSetX) {
      this.template[cellIndexX][cellIndexY] = 'x'
      game.add.image(cellIndexX * this.cellWidth, cellIndexY * this.cellHeight, 'x')

      this.x += 1

      // AI set 'O'
      if (this.x <= 4) {
        this.setO()
      }
    }
  },
  // very stupid AI
  setO () {
    this.playerCanSetX = false

    var column
    var row

    function randNum () {
      column = Math.floor(Math.random() * 3)
      row = Math.floor(Math.random() * 3)
    }

    randNum()

    while (this.template[column][row]) {
      randNum()
    }

    this.template[column][row] = 'o'
    game.add.image(column * this.cellWidth, row * this.cellHeight, 'o')

    this.playerCanSetX = true
  },
  // check who win
  checkMatch () {
    // check rows
    // for (let i = 0; i <= 6; i = i + 3) {
    //   if (B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
    //     this.result = B[i] + "-won" // update the state result
    //     return true
    //   }
    // }

    // check columns
    // for (let i = 0; i <= 2 ; i++) {
    //   if (B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
    //     this.result = B[i] + "-won" // update the state result
    //     return true
    //   }
    // }

    // check diagonals
    // for (let i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
    //   if (B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2*j]) {
    //     this.result = B[i] + "-won" // update the state result
    //     return true
    //   }
    // }
  }
}
