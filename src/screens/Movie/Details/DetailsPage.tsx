import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import MovieDetails from './components/MovieDetails';
import Container from '../../../components/Container';

const DetailsPage = () => {
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <>
      <Header />
      <Container>
        <MovieDetails movieId={movieId} />
      </Container>
    </>
  );
};

export default DetailsPage;
