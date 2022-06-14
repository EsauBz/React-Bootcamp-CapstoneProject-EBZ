import React from 'react';
import styled from 'styled-components';
import StyledFilterCategory from './StyledFilterCategory.js';

const StyledDiv = styled.div`
  background-color: #e0dfd5;
  color: black;
  font-family: Garamond, serif;
  text-decoration: none;
  height: auto;
  padding: 1%;
  width: 100%;
`;

const Title = styled.h4`
  font-family: Garamond, serif;
  color: black;
  text-decoration: none;
  font-size: 18px;
`;

function Sidebar({ categories, filterByCategory, activeFilters }) {
  return (
    <StyledDiv>
      <Title>Filter by: </Title>
      {categories?.results.map((catego) => (
        <StyledFilterCategory
          key={catego.id}
          active={activeFilters.includes(catego.id)}
          handleClick={filterByCategory}
          category={catego}
        />
      ))}
    </StyledDiv>
  );
}

export default Sidebar;
