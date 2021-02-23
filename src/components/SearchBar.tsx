import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  margin: 0 25% 1% 25%;
  width: 49%;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
`;

type SearchBarProps = {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ handleSearch }: SearchBarProps) => (
  <InputStyled aria-label="SearchBar" placeholder="Recherche un film" onChange={(event) => handleSearch(event)} />
);

export default SearchBar;
