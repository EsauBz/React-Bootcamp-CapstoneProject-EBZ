import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import searchIcon from './images/search.png';

const StyledInput = styled.input`
  border: 2px solid #e0dfd5;
  border-radius: 10px;
  height: 5vh;
  width: 17vw;
`;

const Search = styled.img`
  height: 20px;
  width: 20px;
  justify-content: flex-end;
  cursor: pointer;
`;

function InputSearch() {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (e) => {
    //debugger;
    e.preventDefault();
    e.stopPropagation();
    const searchTermInput = e.target.value;
    setSearchTerm(searchTermInput);
  };

  const handleOnClick = (e) => {
    //debugger;
    e.preventDefault();
    e.stopPropagation();
    setSearchTerm('');
    navigate('/search?q=' + searchTerm);
  };

  return (
    <>
      <StyledInput
        id="searchInput"
        type="text"
        onChange={handleSearchInput}
        value={searchTerm}
        placeholder="Search"
      />
      <Search
        id="searchIcon"
        src={searchIcon}
        alt="searchIcon"
        onClick={handleOnClick}
      />
    </>
  );
}

export default InputSearch;
