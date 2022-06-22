import styled from 'styled-components';

const StyledPag = styled.div`
  display: inline-block;
  border-radius: 5px;
  height: auto;
  margin: 10px;
`;

const StyledLink = styled.a`
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 5px;
  color: black;
  &:hover {
    background-color: #f5f3f4;
  }
`;

function Pagination() {
  return (
    <StyledPag>
      <StyledLink>&laquo;</StyledLink>
      <StyledLink>1</StyledLink>
      <StyledLink>2</StyledLink>
      <StyledLink>&raquo;</StyledLink>
    </StyledPag>
  );
}

export default Pagination;
