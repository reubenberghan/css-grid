import * as React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #ccc;
  grid-area: foot;
`

FooterWrapper.displayName = 'FooterWrapper'

export default function Footer () {
  return <FooterWrapper>This is the footer</FooterWrapper>
}