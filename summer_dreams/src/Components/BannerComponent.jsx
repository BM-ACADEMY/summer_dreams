import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Banner.css';

// Import placeholder images (replace with your own images)
import CardImage1 from '../assets/card1.jpeg';
import CardImage2 from '../assets/card 2.jpeg';
import CardImage3 from '../assets/card3.jpeg';
import CardImage4 from '../assets/img.jpeg';


const BannerComponent = () => {
  return (
    <div className="container2 py-5" id="banner">

      <div className="row justify-content-center">
        <h2 className="mt-4 fs-3 fs-sm-4 fs-xl-5 p-4 fw-bold" style={{ fontFamily: 'poppins' }}>

          <span style={{ color: 'red' }}>Welcome To The Princess Of Hills </span>{' '}
          <span style={{ color: 'green' }}>Kodaikanal</span>
        </h2> <br /> <br />
        {/* Card 1 */}
        <div className="col-md-4 col-sm-6 col-12 mb-4" style={{ height: '350px', width: '350px' }}>
          <div className="card banner-card">
            <img src={CardImage1} alt="Card 1" className="card-img-top" />

          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 col-sm-6 col-12 mb-4" style={{ height: '360px', width: '350px' }}>
          <div className="card banner-card">
            <img src={CardImage2} alt="Card 2" className="card-img-top" />

          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 mb-4" style={{ height: '360px', width: '350px' }}>
          <div className="card banner-card">
            <img src={CardImage4} alt="Card 2" className="card-img-top" />

          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 col-sm-6 col-12 mb-4" style={{ height: '350px', width: '350px' }}>
          <div className="card banner-card">
            <img src={CardImage3} alt="Card 3" className="card-img-top" />

          </div>
          <div className="review-button-wrapper">
            <a
              href="https://www.booking.com/hotel/in/summer-dreams-cottage-kodaikanal"
              className="review-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online Booking in Booking.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;