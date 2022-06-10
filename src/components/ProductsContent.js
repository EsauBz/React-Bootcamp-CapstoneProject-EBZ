import React from 'react';
import Sidebar from './Sidebar';
import Products from './Products';
import styled from 'styled-components';
import { productCategories } from '../mocks/en-us/product-categories';
import { products } from '../mocks/en-us/products';

const StyledDiv = styled.div`
  background-color: #f5cb5c;
`;

function ProductsContent() {
  return (
    <StyledDiv>
      <Sidebar categories={productCategories} />
      <Products products={products} />
    </StyledDiv>
  );
}

export default ProductsContent;
