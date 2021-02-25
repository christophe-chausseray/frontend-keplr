import { useState, useEffect } from 'react';
import Movie from '../../../../models/movie';

const useMovieDetails = (movieId: string): { movie: Movie | null, isLoading: boolean } => {
  const [movie, setMovie] = useState<Movie| null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5dcff845c097b0973ebee6ea9eb9eaef`);
      const movieFromResponse = await response.json();

      if (movieFromResponse.success !== false) {
        setMovie(movieFromResponse);
      }

      setIsLoading(false);
    };

    fetchMovieDetails();
  }, [movieId]);

  return { movie, isLoading };
}

export default useMovieDetails;
