import styled from 'styled-components';
import FeatureProduct from './FeatureProduct';

const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TypeTitle = styled.h3`
  font-size: 4vh;
`;

function Products({ products }) {
  return (
    <div>
      <TypeTitle> List of Products </TypeTitle>
      <StyledCategories>
        {products?.results.map((product) => (
          <FeatureProduct key={product.id} product={product} />
        ))}
      </StyledCategories>
    </div>
  );
}

export default Products;
