import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Banner.css';

// Import placeholder images (replace with your own images)
import CardImage1 from '../assets/card1.jpeg';
import CardImage2 from '../assets/card2.jpeg';
import CardImage3 from '../assets/card3.jpeg';

const BannerComponent = () => {
  return (
    <div className="container-fluid py-5" id="banner">
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <div className="card banner-card">
            <img src={CardImage1} alt="Card 1" className="card-img-top" />
            
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <div className="card banner-card">
            <img src={CardImage2} alt="Card 2" className="card-img-top" />
           
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <div className="card banner-card">
            <img src={CardImage3} alt="Card 3" className="card-img-top" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;