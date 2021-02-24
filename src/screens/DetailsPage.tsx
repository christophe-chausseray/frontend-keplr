import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MovieDetails from '../components/MovieDetails';

const DetailsPage = () => {
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <>
      <Header />
      <MovieDetails movieId={movieId} />
    </>
  );
};

export default DetailsPage;
