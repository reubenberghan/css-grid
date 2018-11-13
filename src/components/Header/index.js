import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: #ccc;
  grid-area: head;
`

HeaderWrapper.displayName = 'HeaderWrapper'

export default function Header () {
  return <HeaderWrapper>This is the header</HeaderWrapper>
}