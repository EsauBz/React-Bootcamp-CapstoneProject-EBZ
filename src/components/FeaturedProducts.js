import styled from 'styled-components';
import FeatureProduct from './FeatureProduct.js';
import { Link } from 'react-router-dom';

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

const AllProducts = styled.button`
  background-color: #823329;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 10px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #ba181b;
  }
`;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function FeaturedProducts({ featuredProducts }) {
  return (
    <div>
      <TypeTitle> Featured Products </TypeTitle>
      <StyledCategories>
        {featuredProducts?.results.map((product) => (
          <FeatureProduct key={product.id} product={product} />
        ))}
      </StyledCategories>
      <Link to="/products">
        <AllProducts onClick={scrollToTop}> View All Products </AllProducts>
      </Link>
    </div>
  );
}

export default FeaturedProducts;
