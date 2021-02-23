import React from 'react';
import styled from 'styled-components';
import { ChevronLeft } from '@styled-icons/boxicons-regular/ChevronLeft';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.header`
  background-color: #60A5FA;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 10px;
  display: flex;
`;

const BackIcon = styled(ChevronLeft)`
  width: 30px;
  padding-left: 10px;
  color: #fff;
`;

const Title = styled.h1`
  flex-grow: 2;
`;

const Header = () => {
  const location = useLocation();

  return (
    <Container>
      {location.pathname !== '/' && (
        <Link to='/' role="img" aria-label="Back">
          <BackIcon  />
        </Link>
      )}
      <Title>Movies</Title>
    </Container>
  );
};

export default Header;
