import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  background-color: #60A5FA;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const Header = () => {
  return (
    <Container>
      <h1>Movies</h1>
    </Container>
  );
};

export default Header;
