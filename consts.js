export const BLOCK_SIZE = 25
export const BOARD_WIDTH = 14
export const BOARD_HEIGHT = 30

export const EVENT_MOVEMENTS = {
  LEFT: 'ArrowLeft',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight'
}

export const PIECES = [
  [ // Piece 0, the yellow piece
    [1, 1],
    [1, 1]
  ],
  [ // Piece I, the cyan piece
    [1, 1, 1, 1]
  ],
  [ // Piece T, the violet piece
    [0, 1, 0],
    [1, 1, 1]
  ],
  [ // Piece Z, the red piece
    [1, 1, 0],
    [0, 1, 1]
  ],
  [ // Piece S, the green piece
    [0, 1, 1],
    [1, 1, 0]
  ],
  [ // Piece L, the orange piece
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [ // Piece J, the blue piece
    [0, 1],
    [0, 1],
    [1, 1]
  ]
]



