import * as React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.main`
  background-color: #fefefe;
  grid-area: main;
`

MainWrapper.displayName = 'MainWrapper'

export default function Main ({ children }) {
  return <MainWrapper>{children}</MainWrapper>
}