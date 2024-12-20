import Container from 'react-bootstrap/Container';
import Carousel from "react-bootstrap/Carousel";
import banner_img1 from "../Assets/Images/Banner1.jpg";
import banner_img2 from "../Assets/Images/banner2.jpg";
import banner_img3 from "../Assets/Images/banner3.jpg";

//pages
import Banner_About from "./Banner_About";
import Products from './Products';
import Collection from './Collection';
import Reviews from './Reviews';

function Banner() {
  return ( 
    <div className='main-banner'>
    <Container>
    <Carousel>
      <Carousel.Item>
        <div className="banner-img">
          <img src={banner_img1} alt="banner-img-1" />
        </div>
        <Carousel.Caption>
          <div className="banner-title">
            <h4>FLASH SALE</h4>
            <h2>Top Selling SmartPhone</h2>
            <h2>And Accessories</h2>
            <p>Discounts of up to 40%</p>
            <h5>
              From <span>$499.99</span>
            </h5>
            <button>SHOP NOW</button>
          </div>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </ Container>
    <Banner_About />
    <Products />
    <Collection />
    <Reviews />
    </div>
  );
}

export default Banner;
