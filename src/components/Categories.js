import styled from 'styled-components';
import ProductType from './ProductType.js';
import Spinner from 'react-bootstrap/Spinner';

const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  margin-bottom: 2%;
`;

const TypeTitle = styled.h3`
  font-size: 4vh;
`;

function Categories({ productCategories, isLoading }) {
  return isLoading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <div>
      <TypeTitle> Chose a Type of Product </TypeTitle>
      <StyledCategories>
        {productCategories?.results.map((category) => (
          <ProductType key={category.id} category={category} />
        ))}
      </StyledCategories>
    </div>
  );
}

export default Categories;
