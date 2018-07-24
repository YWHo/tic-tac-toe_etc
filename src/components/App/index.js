// src/components/App/index.js
import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board } from '..'
import { Square } from '../../containers'

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

export default function App () {
  return (
    <StyledApp>
      <Board>
        {times(square => <Square key={square} index={square} />, 9)
        // Note:
        //
        // Given that R is ramda, equivalent to
        //   R.times(square => <Square key={square} index={square} />, 9)
        //
        // Or if not using ramda
        //  let tmpArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        //  tmpArr.map(square => <Square key={square} index={square} />)
        }
      </Board>
    </StyledApp>
  )
}
