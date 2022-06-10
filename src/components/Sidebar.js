import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 190px;
    background-color: #AAAAAA;
    color: black;
    font-family: Garamond, serif;
    text-decoration: none;
`;

const StyledLink = styled.a`
    font-family: Garamond, serif;
    color: black;
    padding-left: 5%;
    text-decoration: none;
    font-size: 18px;
`;

const Section = styled.div`
    display: flex;
    justify-contant: flex-end;
    border: 2px white;
    border-bottom-style: solid;
`;

function Sidebar({categories}) {
  return (
    <StyledDiv>
        <h4>Categories</h4>
        {categories?.results.map(catego => (
            <Section key={catego.id}>
                <StyledLink > * {catego.data.name}</StyledLink>
            </Section>
          )
          )}
    </StyledDiv>
  );
}

export default Sidebar