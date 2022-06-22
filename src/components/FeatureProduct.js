import styled from 'styled-components';

const ProductDiv = styled.div`
  font-size: 1.1em;
  position: relative;
  margin-bottom: 7%;
  margin-right: 2%;
  margin-left: 2%;
`;

const ProductImg = styled.img`
    max-width: 100%;
}`;

const InfoDiv = styled.div`
  background-color: white;
`;

const ProductName = styled.p`
font-family: Garamond, serif;
@media (max-width: 540px) {
    font-size: 4.5vw;
    }
  }
`;

const CategoryInfo = styled.span`
font-family: Garamond, serif;
  padding: 10px 20px;
  @media (max-width: 540px) {
    font-size: 4.5vw;
    }
  }
  `;

const Price = styled.span`
font-family: Garamond, serif;
  @media (max-width: 540px) {
  font-size: 4.5vw;
  padding: 5px 10px;
  margin: 0;
  }
}`;

function FeatureProduct({ product }) {
  return (
    product.data && (
      <ProductDiv>
        <ProductImg
          src={product.data.mainimage?.url}
          alt={product.data.mainimage?.alt}
        />
        <InfoDiv>
          <ProductName>
            <strong> {product.data.name} </strong>{' '}
          </ProductName>
          <CategoryInfo>{product.data.category.slug}</CategoryInfo>
          <Price>$ {product.data.price}</Price>
        </InfoDiv>
      </ProductDiv>
    )
  );
}

export default FeatureProduct;
