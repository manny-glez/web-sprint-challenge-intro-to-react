// Write your Character component here
import React from 'react'
import Styled from 'styled-components'

const StyledCharacter = Styled.div`
.character {
  padding: 20px;
  border-bottom: 2px solid lightgray;
  color: white;
  background-color: black;
  opacity: 0.7;
  &:hover {
    background-color: grey;
    color: black;
  }
}
`


export default function Character(props) {
  const { name } = props;

  console.log("HERE ARE PROPS:", props)

  return (
    <StyledCharacter>
      <div class="character">

        <h2>{name}</h2>

      </div>
    </StyledCharacter>
  )
}
