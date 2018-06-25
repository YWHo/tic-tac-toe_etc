// src/components/App/index.js
import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import { isUndefined } from 'ramda-adjunct'
import { connect } from 'react-redux'

import { Board, Square } from '..'
import { getMoves, squareClicked } from '../../state'
import { getPlayer } from '../../utilities'

function makeSquares (markSquare, moves = []) {
  return times(square => {
    const player = getPlayer(square, moves)

    return isUndefined(player) ? (
      <Square
        key={square}
        index={square}
        handleClick={() => markSquare(square)}
      />
    ) : (
      <Square key={square} index={square} player={player} />
    )
  }, 9)
}

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`

StyledApp.displayName = 'StyledApp'

export function App ({ markSquare, moves }) {
  return (
    <StyledApp>
      <Board>{makeSquares(markSquare, moves)}</Board>
    </StyledApp>
  )
}

function mapStateToProps (state) {
  return {
    moves: getMoves(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    markSquare: square => dispatch(squareClicked(square))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
