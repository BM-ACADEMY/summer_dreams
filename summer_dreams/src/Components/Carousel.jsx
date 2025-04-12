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
    content: "Excellent service, highly recommended!",
    name: "John Doe",
  },
  {
    id: 2,
    rating: 4,
    content: "Great quality and fast delivery.",
    name: "Jane Smith",
  },
  {
    id: 3,
    rating: 3,
    content: "Satisfied with the purchase.",
    name: "Mike Johnson",
  },
  {
    id: 4,
    rating: 5,
    content: "Superb experience overall!",
    name: "Emily Davis",
  },
  {
    id: 5,
    rating: 5,
    content: "They truly care about their customers.",
    name: "Alice Green",
  },
  {
    id: 6,
    rating: 4,
    content: "Professional and quick response.",
    name: "Chris Brown",
  },
  {
    id: 7,
    rating: 5,
    content: "Top-notch products and support!",
    name: "Liam White",
  },
];

const ReviewCarousel = () => {
  const settings = {
    dots: true,
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
    <div className="review-carousel-wrapper">
      <div className="review-carousel-container">
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
    View on Google Maps
  </a>
</div>

      </div>
    </div>
  );
};

export default ReviewCarousel;
