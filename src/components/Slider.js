import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';

function Slider({ featuredBanners, isLoading }) {
  return isLoading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <Carousel>
      {featuredBanners?.results.map((item) => {
        return (
          <Carousel.Item interval={4500} key={item.id}>
            <img
              className="d-block w-100"
              src={item.data.main_image.url}
              alt={item.data.main_image.alt}
            />
            <Carousel.Caption>
              <h3 style={{ color: '#1F2041' }}>{item.data.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
