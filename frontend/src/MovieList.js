// MovieList.js
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import './App.css';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch("http://localhost:4001/api/movies", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };

  return (
    <div className='movie-list'>
      {movies.map((movie, index) => (
        <div key={index}>
          <Movie movieTake={movie} getMovies={getMovies} />
        </div>
      ))}
    </div>
  );
}
