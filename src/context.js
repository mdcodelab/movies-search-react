import { createContext, useContext } from "react";
import React from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // 🔑 Lazy initialization: ia direct ce e în localStorage
  const [favorites, setFavorites] = React.useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : []; //strint to array
  });

  // Salvăm automat în localStorage la fiecare schimbare
  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorites(movie) {
    setFavorites(prev => [...prev, movie]);
  }

  function removeFavorites(movieId) {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId));
  }

  function isFavorite(movieId) {
    return favorites.some(movie => movie.id === movieId);
  }

  return (
    <MovieContext.Provider value={{ favorites, addFavorites, removeFavorites, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
