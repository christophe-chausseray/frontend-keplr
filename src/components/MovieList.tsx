import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useMovieList from '../hooks/useMovieList';
import SearchBar from './SearchBar';
import Movie from './../model/movie';

const List = styled.ul`
  display: flex;
  width: 60%;
  margin: 0 25% 5% 25%;
  flex-flow: row wrap;
  height: auto;
`;

const Item = styled.li`
  padding-right: 10px;
  position: relative;
`;

const Title = styled.p`
  display: block;
  position: absolute;
  top: 200px;
  background-color: #ddd;
  color: black;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  opacity: 0.9;
  width: 95%;
  height: 60px;
`;

const MovieList = () => {
  const { movies, fetchMovies, searchMovie } = useMovieList();

  const handleSearch = async (searchValue: string) => {
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
              <MovieItem movie={movie} key={movie.id} />
            : null
          })}
        </List>
      ) : (
        <p>No movies found !</p>
      )}

    </>
  );
}

const MovieItem = ({ movie }: { movie: Movie }) => {
  const [displayTitle, setDisplayTitle] = React.useState(false);

  const showTitle = () => {
    setDisplayTitle(true);
  }

  const hideTitle = () => {
    setDisplayTitle(false);
  }

  return (
    <Item aria-label={movie.title} onMouseEnter={showTitle} onMouseLeave={hideTitle}>
      <Link to={'/details/' + movie.id}>
        <img src={'http://image.tmdb.org/t/p/w185' + movie.poster_path} alt={movie.title} />
        {displayTitle && (
          <Title>
            {movie.title}
          </Title>
        )}
      </Link>
    </Item>
  );
}

export default MovieList;
