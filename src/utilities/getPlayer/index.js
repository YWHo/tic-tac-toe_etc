import { indexOf } from 'ramda'

export default function getPlayer (square, moves = []) {
  const move = indexOf(square, moves)
  // Note:
  //
  // Given that R is ramda, equivalent to
  //  const move = R.indexOf(square, move)
  //
  // Or if not using ramda
  //  const move = moves.indexOf(square)

  if (move < 0) {
    return undefined
  }

  return move % 2 === 0 ? 'x' : 'o'
}
