import React from 'react';
import styled from 'styled-components';

const SearchStyled = styled.div`
  margin: 0 25% 1% 25%;
  width: 50%;
  border: 1px solid lightgray;
  padding: 10px;
  background-color: #fff;

  @media (max-width: 450px) {
    margin: 0 0 2% 5%;
    width: 85%;
    padding: 3%;
  }

  @media (min-width: 450px) and (max-width: 1024px) {
    margin: 0 0 2% 10%;
    width: 80%;
    padding: 15px;
  }
`;

const InputStyled = styled.input`
  width: 95%;
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const ClearSearchButton = styled.button`
  float: right;
  border: none;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

type SearchBarProps = {
  onSearch: (searchValue: string) => void;
  onClearValue?: () => void;
};

const SearchBar = ({ onSearch, onClearValue }: SearchBarProps) => {
  const [searchValue, setSearchValue] = React.useState('');

  const doSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.currentTarget.value);
    setSearchValue(event.currentTarget.value);
  };

  const clearValue = () => {
    if (onClearValue) {
      onClearValue();
    }

    setSearchValue('');
  }

  return (
    <SearchStyled>
      <InputStyled aria-label="SearchBar" placeholder="Recherche un film" onChange={doSearch} value={searchValue} />
      {searchValue.length !== 0 && (
        <ClearSearchButton aria-label="ClearSearchButton" onClick={clearValue}>X</ClearSearchButton>
      )}
    </SearchStyled>
  );
};

export default SearchBar;
