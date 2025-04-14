import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Footer.css';
// Import React Icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaYoutube, FaInstagram } from 'react-icons/fa';
// Import logo
import Logo from '../assets/logo1.jpg';

const FooterComponent = () => {
  return (
    <div className="container-fluid justify-content-center" id='contact'>
      <footer>
        <div className="row justify-content-around mb-0 pt-5 pb-0">
          <div className="col-11">
            <div className="row justify-content-center">
              <div className="col-md-3 col-12 font-italic align-items-center mt-md-3 mt-4">
                <h5>
                  <img src={Logo} alt="Logo" className="footer-logo" />
                </h5>
                <p>
                  <small>
                    We Provide Home Stay Cottage and Premium Rooms.
                    Stay Relax and Enjoy.
                  </small>
                </p>
                <div className="social-icons">
                  <a href="https://youtube.com/@summerdreamskodai?si=FytGYgJXbjvufSRv" target="_blank" rel="noopener noreferrer" className="me-2">
                    <FaYoutube size={20} />
                  </a>
                  <a href="https://www.instagram.com/summerdreamscottagekodaikanal?utm_source=qr&igsh=MTgzMnA1M3AwY2YxdA==" target="_blank" rel="noopener noreferrer" className="me-2">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/share/1FaZr6r8Sg/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={20} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-12 my-sm-0 mt-5">
                <ul className="list-unstyled">
                  <li className="mt-md-3 mt-4">Useful Links</li>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#testimonials">Testimonial</a></li>
                </ul>
              </div>

              <div className="col-md-3 col-12 my-sm-0 mt-5">
                <ul className="list-unstyled">
                  <li className="mt-md-3 mt-4">Get Connect With Us</li>
                  <li>
                    <FaWhatsapp className="me-2" />
                    <a href="https://wa.me/+919894195939" target='_blank'>9894195939 </a>
                    <a href="https://wa.me/+917305184499" target='_blank'>/ 7305184499</a>
                  </li>
                  <li>
                    <FaEnvelope className="me-2" />
                    <a href="mailto:kodaisummerdreams@gmail.com">Kodaisummerdreams@gmail.com</a>
                  </li>
                  <li>
                    <FaPhone className="me-2" />
                    <a href="tel:+919894195939">9894195939 </a>
                    <a href="tel:+917305184499"> / 7305184499</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-12 my-sm-0 mt-5">
                <ul className="list-unstyled">
                  <li className="mt-md-3 mt-4">Address</li>
                  <li>Kodaigate Ugarthynager,</li>
                  <li>Kodaikanal, Tamil Nadu</li>
                  <li>624101</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <small className="copy Rights cursor-pointer">
              Ⓒ 2025 - All rights reserved by <a href="https://bmtechx.in/" className="copyright-link" target='_blank'>BM TECHx</a> <br /><br />
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;