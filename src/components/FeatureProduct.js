import styled from 'styled-components';
import plusCart from './images/plusCart.png';
import details from './images/details.png';
import { Link } from 'react-router-dom';

const ProductDiv = styled.div`
  font-size: 1.1em;
  position: relative;
  margin-bottom: 7%;
  margin-right: 2%;
  margin-left: 2%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: auto;
`;

const ProductImg = styled.img`
    max-width: 100%;
}`;

const DetailsImg = styled.img`
    height: 2rem;
    cursor: pointer;
}`;

const InfoDiv = styled.div`
  background-color: white;
`;

const DetailsDiv = styled.div`
  padding-right: 5%;
`;

const InfoProduct = styled.div`
  background-color: white;
  display: inline-flex;
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
  @media (max-width: 540px) {
    font-size: 4.5vw;
    }
  }
  `;

const Price = styled.span`
font-family: Garamond, serif;
  @media (max-width: 540px) {
  font-size: 4.8vw;
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
            <strong> {product.data.name} </strong>
          </ProductName>
          <InfoProduct>
            <DetailsDiv>
              <CategoryInfo>{product.data.category.slug}</CategoryInfo>
            </DetailsDiv>
            <DetailsDiv>
              <Price> ${product.data.price}</Price>
            </DetailsDiv>
            <DetailsDiv>
              <DetailsImg src={plusCart} alt="add to cart img" />
            </DetailsDiv>
            <DetailsDiv>
              <Link to={`/product/${product.id}`}>
                <DetailsImg src={details} alt="go to product details" />{' '}
              </Link>
            </DetailsDiv>
          </InfoProduct>
        </InfoDiv>
      </ProductDiv>
    )
  );
}

export default FeatureProduct;
