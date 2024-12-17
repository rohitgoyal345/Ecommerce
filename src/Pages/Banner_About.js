import {Container , Row , Col }from 'react-bootstrap';

//image import
import about1 from '../Assets/Images/about1.png';
import about2 from '../Assets/Images/about2.png';
import about3 from '../Assets/Images/about3.png';
import about4 from '../Assets/Images/about4.png';

function Banner_About() {
  return (
    <div className='banner-about-main'>
      <Container>
        <Row>
            <Col lg={3}>
              <div className='about-info-main'>
                <div className='about-img'>
                  <img src={about1} alt='about1' />
                </div>
                <div className='about-title'>
                  <h4>Free fast delivery</h4>
                    <p>Fast order delivery tracking</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='about-info-main about2'>
                <div className='about-img'>
                  <img src={about2} alt='about2' />
                </div>
                <div className='about-title'>
                  <h4>24 X 7 supports</h4>
                    <p>If you need help, we offer</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='about-info-main about3'>
                <div className='about-img'>
                  <img src={about3} alt='about3' />
                </div>
                <div className='about-title'>
                  <h4>Best quality</h4>
                    <p>The best quality squishies</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='about-info-main about4'>
                <div className='about-img'>
                  <img src={about4} alt='about4' />
                </div>
                <div className='about-title'>
                  <h4>Gift voucher</h4>
                    <p>Terms and conditions for</p>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className='about_offer'>
                <div className='offer-info'>
                   <h4 id='offer1_h4'>WEEKAND DISCOUNT</h4>
                   <h3>Laptops New</h3>
                   <p>Get Deal On Laptops <span>Get 10% Off</span></p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className='about_offer about_offer2'>
                <div className='offer-info'>
                   <h4>BIG SALE</h4>
                   <h3>Top SmartPhone</h3>
                   <p>Today`s super offer <span>Get 15% Off</span></p>
                </div>
              </div>
            </Col>

        </Row>
      </Container>
      </div>
  );
}

export default Banner_About;
