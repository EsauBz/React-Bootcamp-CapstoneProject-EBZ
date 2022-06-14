import styled from 'styled-components';

const StyledLink = styled.a`
  font-family: Garamond, serif;
  border-radius: 12px;
  background-color: ${({ active }) => (active ? '#e5383b' : '#fec89a')};
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
}
`;

function StyledFilterCategory({ handleClick, category, active }) {
  return (
    <StyledLink
      active={active}
      id={category?.id}
      key={category?.id + 'inner'}
      onClick={handleClick}>
      {category?.data.name}
    </StyledLink>
  );
}
export default StyledFilterCategory;
