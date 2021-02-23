import React from 'react';
import styled from 'styled-components';
import Movie from '../model/movie';
import SearchBar from './SearchBar';

const List = styled.ul`
  display: flex;
  width: 60%;
  margin: 0 25% 5% 25%;
  flex-flow: row wrap;
  height: auto;
`;

const Item = styled.li`
  padding-right: 10px;
`;

const MovieList = () => {
  const [isMounted, setIsMounted] = React.useState(true);
  const [movies, setMovies] = React.useState<Movie[] | null>(null);

  const fetchMovies = React.useCallback(async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5dcff845c097b0973ebee6ea9eb9eaef');
    const moviesFromResponse = await response.json();

    if (isMounted) {
      setMovies(moviesFromResponse.results);
    }
  }, [isMounted]);

  React.useEffect(() => {
    fetchMovies();

    return () => {
      setIsMounted(false);
    }
  }, [fetchMovies]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    if (searchValue.length !== 0) {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5dcff845c097b0973ebee6ea9eb9eaef&query=${searchValue}`);
      const moviesFromResponse = await response.json();

      setMovies(moviesFromResponse.results);
    } else {
      fetchMovies();
    }
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {movies ? (
        <List aria-label="MovieList">
          {movies.map((movie) => {
            return movie.poster_path ?
              <Item aria-label={movie.title} key={movie.id}>
                <img src={'http://image.tmdb.org/t/p/w185' + movie.poster_path} alt={movie.title} />
              </Item>
            : null
          })}
        </List>
      ) : (
        <p>No movies found !</p>
      )}

    </>
  );
}

export default MovieList;
