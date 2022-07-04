import React from 'react';
import Slider from './Slider.js';
import Categories from './Categories.js';
import FeaturedProducts from './FeaturedProducts.js';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useCategoriesGrid } from '../utils/hooks/useCategoriesGrid';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #f5cb5c;
`;

function ContentHome() {
  const { data: featuredBannersData, isLoading: featuredBannersIsLoading } =
    useFeaturedBanners();

  const { data: categoriesGridData, isLoading: categoriesGridIsLoading } =
    useCategoriesGrid();

  const { data: featuredProductsData, isLoading: featuredProductsIsLoading } =
    useFeaturedProducts();

  return (
    <StyledDiv>
      <Slider
        featuredBanners={featuredBannersData}
        isLoading={featuredBannersIsLoading}
      />
      <Categories
        productCategories={categoriesGridData}
        isLoading={categoriesGridIsLoading}
      />
      <FeaturedProducts
        featuredProducts={featuredProductsData}
        isLoading={featuredProductsIsLoading}
      />
    </StyledDiv>
  );
}

export default ContentHome;
