export const BLOCK_SIZE = 25
export const BOARD_WIDTH = 14
export const BOARD_HEIGHT = 30

export const EVENT_MOVEMENTS = {
  LEFT: 'ArrowLeft',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight'
}

export const PIECES = [
  [ // Pieza 0, la pieza amarilla
    [1, 1],
    [1, 1]
  ],
  [ // Pieza I, la pieza cyan
    [1, 1, 1, 1]
  ],
  [ // Pieza T, la pieza lila
    [0, 1, 0],
    [1, 1, 1]
  ],
  [ // Pieza Z, la pieza roja
    [1, 1, 0],
    [0, 1, 1]
  ],
  [ // Pieza S, la pieza verde
    [0, 1, 1],
    [1, 1, 0]
  ],
  [ // Pieza L, la pieza naranja
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [ // Pieza J, la pieza azul
    [0, 1],
    [0, 1],
    [1, 1]
  ]
]



// export const PIECES = {

//   "YellowPiece": [
//     [1, 1],
//     [1, 1]
//   ],
//   "CyanPiece": [
//     [1, 1, 1, 1]
//   ],
//   "PurplePiece": [
//     [0, 1, 0],
//     [1, 1, 1]
//   ],
//   "RedPiece": [
//     [1, 1, 0],
//     [0, 1, 1]
//   ],
//   "GreenPiece": [
//     [0, 1, 1],
//     [1, 1, 0]
//   ],
//   "OrangePiece": [
//     [1, 0],
//     [1, 0],
//     [1, 1]
//   ],
//   "BluePiece": [
//     [0, 1],
//     [0, 1],
//     [1, 1]
//   ]
// };
