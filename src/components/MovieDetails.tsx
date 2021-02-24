import React from 'react';
import styled from 'styled-components';
import useMovieDetails from './../hooks/useMovieDetails';

const Container = styled.div`
  display: flex;
  margin: 0px 20px;
`;

type MovieDetailsProps = {
  movieId: string;
}

const MovieDetails = ({ movieId }: MovieDetailsProps) => {
  const movie = useMovieDetails(movieId);

  if (!movie) {
    return (
      <p>No movie found for this Id !</p>
    );
  }


  return (
    <Container>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>{movie.vote_average} / 10</p>
      </div>
      {movie.poster_path && (
        <img aria-label={movie.title} src={'http://image.tmdb.org/t/p/w185' + movie.poster_path} alt={movie.title} />
      )}
    </Container>
  );
}

export default MovieDetails;
