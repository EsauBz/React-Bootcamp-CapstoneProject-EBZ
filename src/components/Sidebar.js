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

const ClearFilters = styled.div`
  font-family: Garamond, serif;
  display: inline;
  border-radius: 12px;
  background-color: ${({ active, clear }) =>
    active ? '#e5383b' : clear ? '#fec89a' : '#fec89a'};
  color: black;
  text-decoration: none;
  font-size: 18px;
  border: 2px white;
  border-style: solid;
  padding: 4px;
  margin-right: 4px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #f5f3f4;
  }
`;

const Title = styled.h4`
  font-family: Garamond, serif;
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
`;

function Sidebar({
  categories,
  filterByCategory,
  activeFilters,
  handleClearFiltersClick,
}) {
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

      <ClearFilters
        id="clearFilters"
        key="clearFilters"
        clear={true}
        onClick={handleClearFiltersClick}>
        Clear filters
      </ClearFilters>
    </StyledDiv>
  );
}

export default Sidebar;
