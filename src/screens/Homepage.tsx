import React from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import Container from '../components/Container';


const Homepage = () => {
  return (
    <>
      <Header />
      <Container isScrollable={true}>
        <MovieList />
      </Container>
    </>
  );
}

export default Homepage;
