import React from 'react'
import styled from 'styled-components'

function Favorites() {
  return (
    <Wrapper>
      <h2>No Favorite Movies Yet</h2>
      <p>Add your favorite movies and they will be displayes here </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-top: 2rem;
max-width: 1280px;
 h2 {
    text-align: center;
    margin-bottom: 2rem;
 }

 p {
    text-align: center;
 }

`

export default Favorites
