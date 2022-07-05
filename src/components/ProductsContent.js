import React from 'react';
import Sidebar from './Sidebar';
import Products from './Products';
import Pagination from './Pagination.js';
import styled from 'styled-components';
import { useCategoriesGrid } from '../utils/hooks/useCategoriesGrid';
import { useProducts } from '../utils/hooks/useProducts';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingSpin from 'react-bootstrap/Spinner';

const StyledDiv = styled.div`
  background-color: #f5cb5c;
`;

function ProductsContent() {
  const { data: categoriesData } = useCategoriesGrid();
  const { data: products } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeProducts, setActiveProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(true);

  const currentyCategoryId = searchParams.get('category') ?? '';

  const [currentPage, setCurrentPage] = useState(parseInt(products?.page) || 1);
  const [totalPages, setTotalPages] = useState(
    parseInt(products?.total_pages) || 1
  );

  //console.log(activeProducts);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setActiveProducts(products);
    setCurrentPage(parseInt(products?.page) || 1);
    setTotalPages(parseInt(products?.total_pages) || 1);
    if (currentyCategoryId !== '') {
      setSearchParams({ category: currentyCategoryId });
      updateActiveFiltersAndProducts(currentyCategoryId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, currentyCategoryId]);

  const handleCategoryClick = (e) => {
    e.preventDefault();
    const categoryId = e.target?.id || [];
    updateActiveFiltersAndProducts(categoryId);
  };

  const updateActiveFiltersAndProducts = (categoryId) => {
    let newActiveCategoryFilters = [];
    newActiveCategoryFilters = GetUpdatedFilters(categoryId);
    // filter the products
    let newActiveProducts = GetUpdatedProducts(newActiveCategoryFilters);
    setActiveProducts({ ...activeProducts, results: newActiveProducts });
    setActiveFilters(newActiveCategoryFilters);
  };

  const GetUpdatedProducts = (newActiveCategoryFilters) => {
    let newActiveProducts = products.results?.filter((product) => {
      return newActiveCategoryFilters.some(
        (categoryId) => product.data.category.id === categoryId
      );
    });
    if (newActiveCategoryFilters.length === 0) {
      newActiveProducts = products.results;
    }
    return newActiveProducts;
  };

  const GetUpdatedFilters = (categoryId) => {
    let updatedFilters = [];
    if (activeFilters.includes(categoryId)) {
      // delete if from the array
      updatedFilters = activeFilters.filter(
        (category) => category !== categoryId
      );
    } else {
      // add it to the active filterss
      updatedFilters = [...activeFilters, categoryId];
    }
    return updatedFilters;
  };

  const handleClearFiltersClick = (e) => {
    e.preventDefault();
    const newActiveCategoryFilters = [];
    const newActiveProducts = products.results;
    setActiveProducts({ ...activeProducts, results: newActiveProducts });
    setActiveFilters(newActiveCategoryFilters);
  };

  return (
    <StyledDiv>
      {isLoading ? (
        <LoadingSpin animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </LoadingSpin>
      ) : (
        <>
          <Sidebar
            categories={categoriesData}
            filterByCategory={handleCategoryClick}
            activeFilters={activeFilters}
            handleClearFiltersClick={handleClearFiltersClick}
          />
          <Products products={activeProducts} />
          <Pagination />
        </>
      )}
    </StyledDiv>
  );
}

export default ProductsContent;
