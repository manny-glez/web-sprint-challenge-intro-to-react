// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
  margin: 1px;
  .card {
    width 70%;
    border-bottom: solid blue 1px;
    padding: 45px;
    background: rgba(0, 0, 0, 0.7);
    margin-top: 1px;
    border-radius: 10px;
    margin: auto;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    color: white;
    &:hover {
      background-color: black;
      box-shadow: 0 0 1em 0.5em #293bff;
    }
  }
`

const Character = props => {
  const { name } = props;

  return(
    <>
      <StyledCharacter>
        <div className="card">
          <div className="name">{name}</div>
        </div>
      </StyledCharacter>
    </>
  )
}

export default Character;