import { useState, useEffect, useCallback } from 'react';
import Movie from '../model/movie';

const useMovieList = (): { movies: Movie[]|null, isLoading: boolean, fetchMovies: () => void, searchMovie: (searchValue: string) => void } => {
  const [isMounted, setIsMounted] = useState(true);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = useCallback(async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5dcff845c097b0973ebee6ea9eb9eaef');
    const moviesFromResponse = await response.json();

    if (isMounted) {
      setMovies(moviesFromResponse.results);
      setIsLoading(false);
    }
  }, [isMounted]);

  const searchMovie = async (searchValue: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5dcff845c097b0973ebee6ea9eb9eaef&query=${searchValue}`);
    const moviesFromResponse = await response.json();

    setMovies(moviesFromResponse.results);
  }

  useEffect(() => {
    fetchMovies();

    return () => {
      setIsMounted(false);
    }
  }, [fetchMovies]);

  return { movies, isLoading, fetchMovies, searchMovie };
};

export default useMovieList;
