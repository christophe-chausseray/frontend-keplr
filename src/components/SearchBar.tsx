import React from 'react';
import styled from 'styled-components';

const SearchStyled = styled.div`
  margin: 0 25% 1% 25%;
  width: 48%;
  border: 1px solid lightgray;
  padding: 10px;
`;

const InputStyled = styled.input`
  width: 97%;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const ClearSearchButton = styled.button`
  float: right;
  border: none;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

type SearchBarProps = {
  handleSearch: (searchValue: string) => void;
};

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [searchValue, setSearchValue] = React.useState('');

  const makeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    handleSearch(searchValue);
  };

  const clearSearch = () => {
    setSearchValue('');
    handleSearch(searchValue);
  }

  return (
    <SearchStyled>
      <InputStyled aria-label="SearchBar" placeholder="Recherche un film" onChange={makeSearch} value={searchValue} />
      <ClearSearchButton aria-label="ClearSearchButton" onClick={clearSearch}>X</ClearSearchButton>
    </SearchStyled>
  );
};

export default SearchBar;
