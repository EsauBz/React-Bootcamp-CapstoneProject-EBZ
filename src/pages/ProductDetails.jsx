import Spinner from 'react-bootstrap/Spinner';
import ProductInfo from '../components/ProductInfo.js'
import { useParams } from 'react-router-dom';
import { useProductDetails } from '../utils/hooks/useProductDetails.js';


export default function ProductDetails() {
  const { productId } = useParams();
  const { data: productData, isLoading: productDataLoading } =
  useProductDetails(productId);

  return (
    <>
       {productDataLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <>
                {productData?.results.map((product) => (
                    <ProductInfo key={product.id} product={product} />
                ))}
                </>
            )}
    </>
  );
}
