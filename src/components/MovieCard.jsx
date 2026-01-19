import React from 'react';
import styled from 'styled-components';

function MovieCard({ movie }) {

  const favoriteClick = () => {
    alert("clicked");
  }

  return (
    <Wrapper className="movie-card">
      <div className="img">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
          alt={movie.title} 
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={favoriteClick}>⭐</button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 300px;
height: 300px;
position: relative;

img {
  width: 100%;
  height: 100%;
  object-fit: contain;

}

.movie-overlay {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}

.movie-overlay button{
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 30%;
}

.movie-info {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

`;

export default MovieCard;
