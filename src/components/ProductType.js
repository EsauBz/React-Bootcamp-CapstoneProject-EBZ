import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductType = styled.div`
  background: #e0dfd5;
  text-align: center;
  font-size: 2.1vw;
  @media (max-width: 540px) {
    font-size: 7vw;
  }
  font-family: Garamond, serif;
  text-decoration: none;
  color: black;
`;

const ProductTypeImage = styled.img`
    max-width: 100%;
    max-height: 100%;
}`;

const LinkCategory = styled(Link)`
  text-decoration: none;
}`;

const ProductCategory = ({ category }) => {
  return (
    <LinkCategory to={`/products?category=${category.id}`}>
      <ProductType>
        {category?.data.name}
        <ProductTypeImage
          src={category?.data?.main_image?.url}
          alt={category?.data?.main_image?.alt}
        />
      </ProductType>
    </LinkCategory>
  );
};

export default ProductCategory;
