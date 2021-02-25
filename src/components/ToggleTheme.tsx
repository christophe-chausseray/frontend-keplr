import React from 'react';
import styled from 'styled-components';
import { useToggleThemeContext } from '../context/ToggleThemeContext';

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
  const { theme, toggleTheme } = useToggleThemeContext();
  const isChecked = ('dark' === theme) ? true : false;

  return (
    <ToggleWrapper>
      <ToggleInput type="checkbox" aria-label="ToggleTheme" id="switch" onClick={() => toggleTheme()} checked={isChecked} readOnly />
      <ToggleLabel htmlFor="switch" />
    </ToggleWrapper>
  )
};

export default ToggleTheme;
