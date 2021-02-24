import { useState, useEffect } from 'react';
import Movie from '../model/movie';

const useMovieDetails = (movieId: string): Movie | null => {
  const [movie, setMovie] = useState<Movie| null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5dcff845c097b0973ebee6ea9eb9eaef`);
      const movieFromResponse = await response.json();

      setMovie(movieFromResponse);
    };

    fetchMovieDetails();
  }, [movieId]);

  return movie;
}

export default useMovieDetails;
