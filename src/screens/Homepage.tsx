import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const Container = styled.section`
  max-height: 100vh;
  overflow-y: scroll;
`;

const Homepage = () => {
  return (
    <>
      <Header />
      <Container aria-label='main'>
        <MovieList />
      </Container>
    </>
  );
}

export default Homepage;
