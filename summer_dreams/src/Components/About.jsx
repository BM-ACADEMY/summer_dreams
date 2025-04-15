import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/image9.jpeg'; // Adjust path as needed
import '../style/About.css';

const CustomComponent = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const paragraph = textRef.current?.querySelector('.animate-paragraph');
      if (paragraph) {
        const windowHeight = window.innerHeight;
        const rect = paragraph.getBoundingClientRect();
        const isVisible = rect.top <= windowHeight - 50 && rect.bottom >= 0;

        if (isVisible) {
          paragraph.classList.add('animate-on-scroll');
        } else {
          paragraph.classList.remove('animate-on-scroll');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container bg-light min-vh-70" id='about'>
      <div className="row align-items-center p-4">
        {/* Image Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src={img1}
            alt="Summer Dreams"
            className="img-fluid rounded custom-img slide-in-left"
          />
        </div>

        {/* Text Column */}
        <div className="col-12 col-md-6" ref={textRef}>
        <h2 className="mt-4 fs-3 fs-sm-4 fs-xl-5 fw-bold" style={{textAlign: 'left', fontFamily:'poppins'}}>
              <span style={{ color: 'black' }}>Welcome to</span>{' '}
              <span style={{ color: 'red' }}>Summer</span>{' '}
              <span style={{ color: 'Green' }}>Dreams</span>
              <span style={{ color: 'black' }}>- Home Stay Cottage</span>{' '}
            </h2>
          <p className="tagline text-center text-md-start mb-4">
            &ldquo;Just Relax and Enjoy&rdquo;
          </p>
          <div className="text-content">
            <p className="animate-paragraph text-white">
              Nestled amidst the misty hills and serene landscapes of  <span style={{ color: 'red' }}>Kodaikanal, Summer Dreams</span>{' '} offers a warm and welcoming stay for travelers seeking peace, comfort, and nature.<span style={{ color: 'red' }}>We provide Home Stay Cottages and Premium Rooms,</span>{' '}  thoughtfully designed to give you a homely yet luxurious experience. Perfect for families, couples, or solo travelers, our place is designed to help you relax and enjoy the beauty of the hills. With friendly service and modern amenities, we make your stay truly memorable.
            </p>
          </div>
          <h2 className="mt-4 fs-3 fs-sm-4 fs-xl-5 fw-bold"style={{fontFamily:'poppins'}}>
              <span style={{ color: 'black' }}>Approved By</span>{' '}
              <span style={{ color: 'red' }}>Department of Tourism</span>{' '}
              <span style={{ color: 'green' }}>TamilNadu</span>
            </h2>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;