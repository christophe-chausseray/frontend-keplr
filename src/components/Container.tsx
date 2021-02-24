import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  padding-top: 20px;

  ${(props: { isScrollable: boolean }) => {
    if (props.isScrollable) {
      return `
        overflow-y: scroll;
      `;
    }
  }}
`;

type ContainerProps = {
  isScrollable?: boolean;
  children: React.ReactElement;
}

const Container  = ({ isScrollable = false, children }: ContainerProps) => {
  return (
    <StyledContainer aria-label='main' isScrollable={isScrollable}>
      {children}
    </StyledContainer>
  )
}

export default Container;
