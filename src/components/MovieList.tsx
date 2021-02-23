import React from 'react';
import styled from 'styled-components';
import useMovieList from '../hooks/useMovieList';
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
  const { movies, fetchMovies, searchMovie } = useMovieList();

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    if (searchValue.length !== 0) {
      searchMovie(searchValue);
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
