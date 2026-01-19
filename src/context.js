import { createContext, useContext } from "react";
import React from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
const [favorites, setFavorites]=React.useState([]);

React.useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if(stored) setFavorites(JSON.parse(stored));

}, []);

React.useEffect(() => {
localStorage.setItem("favorites", JSON.stringify(favorites))
}, [favorites])

function addFavorites (movie) {
    setFavorites(prev => [...prev, movie]);
}

function removeFavorites(movieId) {
    setFavorites(prev => prev.filter(movie => movieId !== movie.id));
}

function isFavorite(movieId) {
    return favorites.some(movie => movie.id === movieId);
}



  return (
    <MovieContext.Provider value={{ favorites, addFavorites, removeFavorites, isFavorite}}>
      {children}
    </MovieContext.Provider>
  );
};


export const useMovie = () => useContext(MovieContext);

