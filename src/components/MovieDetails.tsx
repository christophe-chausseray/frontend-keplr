import React from 'react';
import styled from 'styled-components';
import useMovieDetails from './../hooks/useMovieDetails';
import { CustomThemedProps } from './../themes';
import Loader from './Loader';

const Container = styled.div`
  display: flex;
  margin: 0 25% 5% 25%;

  @media (max-width: 450px) {
    margin: 0;
    flex-flow: row wrap;
  }

  @media (min-width: 450px) and (max-width: 1024px) {
    margin: 0 5%;
  }
`;

const DescriptionContainer = styled.div`
  flex-grow: 1;
  color: ${({theme}: CustomThemedProps) => theme.textColor};

  @media (max-width: 450px) {
    margin: 0 5%;
  }
`;

const ImageStyled = styled.img`
  @media (max-width: 450px) {
    margin: 0 20%;
  }
`;

const NoFound = styled.p`
  text-align: center;
  font-size: 20px;
`;

type MovieDetailsProps = {
  movieId: string;
}

const MovieDetails = ({ movieId }: MovieDetailsProps) => {
  const { movie, isLoading } = useMovieDetails(movieId);

  if (isLoading) {
    return (
      <Loader title="Loader" />
    );
  }

  if (!movie) {
    return (
      <NoFound>Impossible to load a movie !</NoFound>
    );
  }


  return (
    <Container>
      <DescriptionContainer>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>{movie.vote_average} / 10</p>
      </DescriptionContainer>
      {movie.poster_path && (
        <ImageStyled aria-label={movie.title} src={'http://image.tmdb.org/t/p/w185' + movie.poster_path} alt={movie.title} />
      )}
    </Container>
  );
}

export default MovieDetails;
