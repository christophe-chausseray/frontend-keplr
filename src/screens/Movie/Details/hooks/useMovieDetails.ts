import { useState, useEffect } from 'react';
import Movie from '../../../../models/movie';

const useMovieDetails = (movieId: string): { movie: Movie | null; isLoading: boolean } => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const movieFromResponse = await response.json();

      if (movieFromResponse.success !== false) {
        setMovie(movieFromResponse);
      }

      setIsLoading(false);
    };

    fetchMovieDetails();
  }, [movieId]);

  return { movie, isLoading };
};

export default useMovieDetails;
