import React from 'react';
import styled from 'styled-components';
import { useMovie } from '../context';
import { FaRegHeart } from "react-icons/fa";

function MovieCard({ movie }) {

  const {favorites, addFavorites, removeFavorites, isFavorite} = useMovie();
  const favorite = isFavorite(movie.id);

  const favoriteClick = (e) => {
    e.preventDefault();
    if(favorite) removeFavorites(movie.id);
    else addFavorites(movie);
  }

  

  return (
    <Wrapper className="movie-card">
      <div className="img">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
          alt={movie.title} 
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} 
          onClick={favoriteClick}><FaRegHeart></FaRegHeart></button>
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

.movie-overlay .favorite-btn{
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 30%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-info {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.favorite-btn.active {
  color: red;
}

`;

export default MovieCard;
