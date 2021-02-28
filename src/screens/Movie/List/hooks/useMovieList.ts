import { useState, useEffect, useCallback } from 'react';
import Movie from '../../../../models/movie';

const useMovieList = (): {
  movies: Movie[] | null;
  isLoading: boolean;
  fetchMovies: () => void;
  searchMovie: (searchValue: string) => void;
} => {
  const [isMounted, setIsMounted] = useState(true);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = useCallback(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const moviesFromResponse = await response.json();

    if (isMounted) {
      if (moviesFromResponse.results.length !== 0) {
        setMovies(moviesFromResponse.results);
      }

      setIsLoading(false);
    }
  }, [isMounted]);

  const searchMovie = async (searchValue: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`
    );
    const moviesFromResponse = await response.json();

    if (moviesFromResponse.results.length === 0) {
      setMovies(null);
    } else {
      setMovies(moviesFromResponse.results);
    }
  };

  useEffect(() => {
    fetchMovies();

    return () => {
      setIsMounted(false);
    };
  }, [fetchMovies]);

  return { movies, isLoading, fetchMovies, searchMovie };
};

export default useMovieList;
