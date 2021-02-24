import React from 'react';
import styled from 'styled-components';
import { CustomThemedProps } from '../themes';

const StyledContainer = styled.section`
  height: 100vh;
  overflow-y: scroll;
  background-color: ${({theme}: CustomThemedProps) => theme.background};
  padding-top: 10px;
`;

type ContainerProps = {
  children: React.ReactElement;
}

const Container  = ({ children }: ContainerProps) => {
  return (
    <StyledContainer aria-label='main'>
      {children}
    </StyledContainer>
  )
}

export default Container;
