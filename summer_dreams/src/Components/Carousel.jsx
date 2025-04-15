import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/carousel.css";

const reviews = [
  {
    id: 1,
    rating: 5,
    content: "Great stay with my family, highly recommend! BBQ campfire was awesome. Thanks to Summer Dreams staff. Travel facilities available too.",
    name: "Kalaivani",
  },
  {
    id: 2,
    rating: 5,
    content: "Wonderful stay, highly recommend! BBQ campfire was great. Thanks to Summer Dreams staff. Travel facilities available.",
    name: "Ganesh Kumar",
  },
  {
    id: 3,
    rating: 5,
    content: "Very nice cottage in summer dreams good stay nice location view point",
    name: "Thejwal",
  },
  {
    id: 4,
    rating: 5,
    content: "I loved summer dreams cottage.Best part is the view you get from this property,its like a viewpoint, have a view of sunrise in the morning.",
    name: "Nirmal",
  },
  {
    id: 5,
    rating: 5,
    content: "Had a great stay at Summer Dreams with my office colleagues. Clean rooms, great service, tasty homemade food, and a nice view. Highly recommend! ",
    name: "Rizwanullah",
  },
  {
    id: 6,
    rating: 5,
    content: "Family friendly homestay. Very spacious. Hotwater and all amenities. Small kitchen space for limited cooking is available. Very good service.",
    name: "Vinayan",
  },
  {
    id: 7,
    rating: 5,
    content: "I'm from Kerala I stayed with family here in summer dreams cottage Kodaikanal very nice to stay near and clean rooms are very nice and service was good .",
    name: "Aneesh",
  },
];

const ReviewCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => <ul className="custom-dots">{dots}</ul>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <div className="review-carousel-wrapper" id="testimonials">
            
      <div className="review-carousel-container">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <h2 className="mt-4 fs-3 fs-sm-4 fs-xl-5 fw-bold text-center p-4 " style={{fontFamily:'poppins'}}>
    <span style={{ color: 'black' }}>Take a Look What</span>{' '}
    <span style={{ color: 'red' }}>Our Customers</span>{' '}
    <span style={{ color: 'green' }}>Says About Us</span>
  </h2>
</div>

        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="review-slide">
              <div className="review-card">
                <div className="review-rating">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <div className="review-content">{review.content}</div>
                <div className="review-name">— {review.name}</div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Button below and right-aligned */}
        <div className="review-button-wrapper">
  <a
    href="https://g.co/kgs/ZHn3g7h"
    className="review-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    View on Google Reviews
  </a>
</div>

      </div>
    </div>
  );
};

export default ReviewCarousel;
