import { identity, map, times } from 'ramda'

import { getPlayer } from '..'

export default function getBoard (moves) {
  return map(square => getPlayer(square, moves), times(identity, 9))
  // Note:
  //
  // Given that R is ramda, equivalent to
  //  return R.map(square => getPlayer(square, moves), R.times(R.identity, 9))
  //
  // Or if not using ramda
  //  let tmpArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  //  return tmpArr.map(square => getPlayer(square, moves))
}
