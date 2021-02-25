import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useMovieList from '../hooks/useMovieList';
import SearchBar from '../../../../components/SearchBar';
import Movie from '../../../../model/movie';
import Loader from '../../../../components/Loader';

const List = styled.ul`
  display: flex;
  width: 60%;
  margin: 0 25% 5% 25%;
  flex-flow: row wrap;
  height: auto;

  @media (max-width: 450px) {
    margin: 0 0 0 5%;
  }

  @media (min-width: 450px) and (max-width: 1024px) {
    margin: 0 0 0 10%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Item = styled.li`
  padding-right: 1%;
  position: relative;

  @media (max-width: 450px) {
    width: 45%;
  }

  @media (min-width: 450px) and (max-width: 1024px) {
    width: 20%;
  }
`;

const ImageStyled = styled.img`
  width: 100%;
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

const NoFound = styled.p`
  text-align: center;
  font-size: 20px;
`;

const MovieList = () => {
  const { movies, isLoading,fetchMovies, searchMovie } = useMovieList();

  if (isLoading) {
    return (
      <Loader title="Loader" />
    );
  }

  return (
    <>
      <SearchBar onSearch={searchMovie} onClearValue={fetchMovies} />
      {movies ? (
        <List aria-label="MovieList">
          {movies.map((movie) => {
            return movie.poster_path ?
              <MovieItem movie={movie} key={movie.id} />
            : null
          })}
        </List>
      ) : (
        <NoFound>No movies found !</NoFound>
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
        <ImageStyled src={'http://image.tmdb.org/t/p/w185' + movie.poster_path} alt={movie.title} />
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
