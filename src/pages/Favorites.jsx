import React from 'react'
import styled from 'styled-components';
import { useMovie } from '../context';
import MovieCard from '../components/MovieCard.jsx';

function Favorites() {
    const {favorites} = useMovie();

    (!favorites && (<Wrapper>
      <h2>No Favorite Movies Yet</h2>
      <p>Add your favorite movies and they will be displayed here </p>
    </Wrapper>))


  return (
    
    <div className="center favorites">
    {favorites.map((movie) => <MovieCard movie={movie} key={movie.id}></MovieCard>)}
    </div>
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
