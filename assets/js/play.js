/* globals game */

// let playState = {
//   create () {
//     // set game background image
//     this.levelBackground = game.add.sprite(0, 0, 'levelBackground')
//
//     // mouse events
//     game.input.mouse.capture = true
//   },
//   update () {
//     if (game.input.activePointer.leftButton.isDown) {
//       // first row, first cell
//       if (game.input.mousePointer.x < 200 && game.input.mousePointer.y < 200) {
//         this.createX(100, 100)
//       }
//
//       // first row, second cell
//       if ((game.input.mousePointer.x > 200 && game.input.mousePointer.x < 400) && game.input.mousePointer.y < 200) {
//         this.createX(270, 100)
//       }
//
//       // first row, second cell
//       if ((game.input.mousePointer.x > 400 && game.input.mousePointer.x < 600) && game.input.mousePointer.y < 200) {
//         this.createX(470, 100)
//       }
//
//       // second row, first cell
//       if ((game.input.mousePointer.x < 200) && (game.input.mousePointer.y > 200 && game.input.mousePointer.y < 400)) {
//         this.createX(100, 260)
//       }
//
//       // second row, second cell
//       if ((game.input.mousePointer.x > 200 && game.input.mousePointer.x < 400) && (game.input.mousePointer.y > 200 && game.input.mousePointer.y < 400)) {
//         this.createX(260, 270)
//       }
//
//       // second row, third cell
//       if ((game.input.mousePointer.x > 400 && game.input.mousePointer.x < 600) && (game.input.mousePointer.y > 200 && game.input.mousePointer.y < 400)) {
//         this.createX(440, 275)
//       }
//
//       // third row, third cell
//       if ((game.input.mousePointer.x < 200) && (game.input.mousePointer.y > 400 && game.input.mousePointer.y < 600)) {
//         this.createX(100, 470)
//       }
//
//       // third row, second cell
//       if ((game.input.mousePointer.x > 200 && game.input.mousePointer.x < 400) && (game.input.mousePointer.y > 400 && game.input.mousePointer.y < 600)) {
//         this.createX(260, 455)
//       }
//
//       // third row, third cell
//       if ((game.input.mousePointer.x > 400 && game.input.mousePointer.x < 600) && (game.input.mousePointer.y > 400 && game.input.mousePointer.y < 600)) {
//         this.createX(460, 475)
//       }
//     }
//   },
//   // x and y coordinates of mouse pointer
//   createX (x, y) {
//     this.x = game.add.sprite(x, y, 'x')
//     this.x.anchor.setTo(0.5, 0.5)
//   }
// }

let playState = {
  create () {
    // set game background image
    this.levelBackground = game.add.sprite(0, 0, 'levelBackground')

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
  update () {},
  setX () {
    // Figure out what position on the grid that translates to
    let hoverPosX = Math.floor(game.input.x / this.cellWidth)
    let hoverPosY = Math.floor(game.input.y / this.cellHeight)

    this.template[hoverPosX][hoverPosY] = 'x'

    let spriteX = game.add.image(hoverPosX * this.cellWidth, hoverPosY * this.cellHeight, 'x')

    console.log(this.template)

    return spriteX
  }
}
