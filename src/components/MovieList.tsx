import React from 'react';
import styled from 'styled-components';
import Movie from '../model/movie';

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
  const [movies, setMovies] = React.useState<Movie[] | null>(null);

  React.useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5dcff845c097b0973ebee6ea9eb9eaef');
      const moviesFromResponse = await response.json();

      if (isMounted) {
        setMovies(moviesFromResponse.results);
      }
    }

    fetchMovies();

    return () => {
      isMounted = false;
    }
  }, []);

  if (!movies) {
    return (
      <p>No movies found</p>
    );
  }

  return (
    <>
      <List aria-label="MovieList">
        {movies.map((movie) => (
          <Item aria-label={movie.title} key={movie.id}>
            <img src={'http://image.tmdb.org/t/p/w185' + movie.poster_path} alt={movie.title} />
          </Item>
        ))}
      </List>
    </>
  );
}

export default MovieList;
