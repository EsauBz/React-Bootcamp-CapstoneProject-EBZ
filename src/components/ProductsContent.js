import React from 'react';
import Sidebar from './Sidebar';
import Products from './Products';
import Pagination from './Pagination.js';
import styled from 'styled-components';
import { productCategories } from '../mocks/en-us/product-categories';
import { products } from '../mocks/en-us/products';
import { useEffect, useState } from 'react';
import LoadingSpin from 'react-bootstrap/Spinner';

const StyledDiv = styled.div`
  background-color: #f5cb5c;
`;

function ProductsContent() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeProducts, setActiveProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function filterByCategory(e) {
    e.preventDefault();
    const categoryId = e.target?.id || [];
    let activeFiltersList = [];

    if (activeFilters.includes(categoryId)) {
      activeFiltersList = activeFilters.filter(
        (category) => category !== categoryId
      );
    } else {
      activeFiltersList = [...activeFilters, categoryId];
    }

    let filteredProductsList = products.results?.filter((product) => {
      return activeFiltersList.some(
        (categoryId) => product.data.category.id === categoryId
      );
    });
    if (activeFiltersList.length === 0) {
      filteredProductsList = products.results;
    }
    setActiveProducts({ ...activeProducts, results: filteredProductsList });
    setActiveFilters(activeFiltersList);
  }

  return (
    <StyledDiv>
      {isLoading ? (
        <LoadingSpin animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </LoadingSpin>
      ) : (
        <>
          <Sidebar
            categories={productCategories}
            filterByCategory={filterByCategory}
            activeFilters={activeFilters}
          />
          <Products products={activeProducts} />
          <Pagination />
        </>
      )}
    </StyledDiv>
  );
}

export default ProductsContent;
