import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 25px;
  background-color: black;
  color: white;
  font-family: 'Press Start 2P', cursive;
  font-size: 30px;
`

export default function Header() {
  return(
    <>
      <StyledHeader>Star Wars</StyledHeader>
    </>
  )
}