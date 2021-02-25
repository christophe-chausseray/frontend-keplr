import React from 'react';
import styled from 'styled-components';
import { ChevronLeft } from '@styled-icons/boxicons-regular/ChevronLeft';
import { Link, useLocation } from 'react-router-dom';
import { CustomThemedProps } from './../themes';
import ToggleThemeContext from '../context/toggleThemeContext';

const Container = styled.header`
  background-color: ${({theme}: CustomThemedProps) => theme.header};
  color: #fff;
  text-align: center;
  padding: 10px 0;
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

const ToggleWrapper = styled.div`
  position: relative;
`;

const ToggleLabel = styled.label`
  cursor: pointer;
	width: 40px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 40px;
	border-radius: 15px;
	background-color: #bebebe;
  margin-top: 10px;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin-left: 3px;
    background-color: #fff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const ToggleInput = styled.input`
  width: 40px;
  height: 20px;
	opacity: 0;
  z-index: 1;
  border-radius: 15px;

  &:checked + ${ToggleLabel} {
    background-color: #bebebe;

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const ToggleTheme = () => {
  const { theme, toggleTheme } = React.useContext(ToggleThemeContext);
  const isChecked = ('dark' === theme) ? true : false;

  return (
    <ToggleWrapper>
      <ToggleInput type="checkbox" id="switch" onClick={() => toggleTheme()} checked={isChecked} readOnly />
      <ToggleLabel htmlFor="switch" />
    </ToggleWrapper>
  )
};

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
      <ToggleTheme />
    </Container>
  );
};

export default Header;
