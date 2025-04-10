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
          <h1 className="mb-2 text-center text-md-start">
            <span className="text-dark">Welcome to </span>
            <span className="text-danger">Summer </span>
            <span className="text-primary">Dreams</span>
          </h1>
          <p className="tagline text-center text-md-start mb-4">
            &ldquo;Just Relax and Enjoy&rdquo;
          </p>
          <div className="text-content">
            <p className="animate-paragraph text-white">
              Nestled amidst the misty hills and serene landscapes of Kodaikanal, Summer Dreams offers a warm and welcoming stay for travelers seeking peace, comfort, and nature. We provide Home Stay Cottages and Premium Rooms, thoughtfully designed to give you a homely yet luxurious experience. Perfect for families, couples, or solo travelers, our place is designed to help you relax and enjoy the beauty of the hills. With friendly service and modern amenities, we make your stay truly memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;