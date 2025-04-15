import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/InstagramVideoCard.css';

// Import assets
import thumbnail1 from '../assets/thumbnail1.jpeg';
import thumbnail2 from '../assets/thumbnail3.jpeg';
import video1 from '../assets/video5 (1).mp4';
import video2 from '../assets/video 8.mp4';

const VideoCard = () => {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const videoData = [
    {
      id: 1,
      title: 'Sample Video 1',
      thumbnail: thumbnail1,
      videoUrl: video1,
    },
    {
      id: 2,
      title: 'Sample Video 2',
      thumbnail: thumbnail2,
      videoUrl: video2,
    },
  ];

  // Function to handle button click and navigate to Instagram
  const handleButtonClick = () => {
    window.location.href = 'https://www.instagram.com/summerdreamscottagekodaikanal/'; // Replace with your Instagram URL
  };

  return (
    <div className="container mt-5">
      <h2 className="mt-4 fs-3 fs-sm-4 fs-xl-5 fw-bold"style={{fontFamily:'poppins'}}>
        <span style={{ color: 'black' }}>Watch What Our</span>{' '}
        <span style={{ color: 'red' }}>Celebrities</span>{' '}
        <span style={{ color: 'green' }}>Says About Us</span>
      </h2>
      <br />
      <div className="row">
        {videoData.map((video) => (
          <div className="col-md-6 mb-4" key={video.id}>
            <div className="card h-100">
              <div className="card-img-top video-container">
                {video.id === 1 && !isPlaying1 && (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="img-fluid video-thumbnail"
                      onClick={() => setIsPlaying1(true)}
                    />
                    <div
                      className="play-button"
                      onClick={() => setIsPlaying1(true)}
                      title="Play video"
                    ></div>
                  </>
                )}
                {video.id === 2 && !isPlaying2 && (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="img-fluid video-thumbnail"
                      onClick={() => setIsPlaying2(true)}
                    />
                    <div
                      className="play-button"
                      onClick={() => setIsPlaying2(true)}
                      title="Play video"
                    ></div>
                  </>
                )}
                {(video.id === 1 && isPlaying1) || (video.id === 2 && isPlaying2) ? (
                  <video
                    width="100%"
                    height="auto"
                    controls
                    autoPlay
                    src={video.videoUrl}
                    title={video.title}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="btn btn-primary" onClick={handleButtonClick} style={{backgroundColor:'green'}}>
          See More Reviews
        </button>
      </div>
    </div>
  );
};

export default VideoCard;