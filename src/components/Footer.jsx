import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer section-padding-deep">
      <div className="container footer-grid">
        {/* Column 1 - Logo & About */}
        <div className="footer-col about">
          <div className="logo-inner">
            <i className="fa-solid fa-plane-departure plane-icon"></i>
            <div className="logo-text">
              <span className="logo-main">Perfect Planners</span>
              <span className="logo-sub">Tours & Travels</span>
            </div>
          </div>
          <p className="footer-desc">
            Your trusted travel partner for domestic and international tours.
            We make every journey memorable, affordable, and hassle-free.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/nijam_nellai?igsh=MW41a21vYjRubWltag==" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://youtube.com/@perfectplanners_travel?si=fhdjA1bLcdfqD3LF" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/devaprakashj/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://wa.me/917339004469" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/packages">Tour Packages</NavLink></li>
            <li><NavLink to="/services">Our Services</NavLink></li>
            <li><NavLink to="/destinations">Destinations</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Column 3 - Our Services */}
        <div className="footer-col">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li><NavLink to="/services">Tour Packages</NavLink></li>
            <li><NavLink to="/services">Air Ticket Booking</NavLink></li>
            <li><NavLink to="/services">Money Exchange</NavLink></li>
            <li><NavLink to="/services">Certificate Attestation</NavLink></li>
            <li><NavLink to="/services">Group Tours</NavLink></li>
            <li><NavLink to="/services">Honeymoon Packages</NavLink></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div className="footer-col">
          <h4 className="footer-title">Contact Info</h4>
          <ul className="contact-info">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>635, Sivanthipatti Main Road, Thiyagarajanagar, Tirunelveli – 627011</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:7339004469">7339004469</a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:8122694469">8122694469</a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:9894104469">9894104469</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:nellainijam1980@gmail.com">nellainijam1980@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 Perfect Planners Tours and Travels. All Rights Reserved.</p>
          <div className="dev-credits-section">
            <p className="dev-credits">
              Website Developer:
              <a href="https://www.linkedin.com/in/devaprakashj/" target="_blank" rel="noopener noreferrer"> Devaprakash J </a>
            </p>
            <p className="dev-credits">
              Website Developer:
              <a href="https://www.linkedin.com/in/inas-husayn/" target="_blank" rel="noopener noreferrer"> Inas Husayn K </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--deep-navy);
          color: white;
          padding: 80px 0 0;
          font-family: 'Poppins', sans-serif;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 60px;
        }

        .footer-col .logo-inner {
          margin-bottom: 25px;
        }

        .footer-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 30px;
          line-height: 1.8;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .social-icon:hover {
          background: var(--accent-gold);
          color: var(--deep-navy);
          transform: translateY(-5px);
        }

        .footer-title {
          font-size: 1.2rem;
          margin-bottom: 30px;
          position: relative;
          color: var(--accent-gold);
          font-family: 'Montserrat', sans-serif;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 40px;
          height: 3px;
          background: var(--white);
          opacity: 0.3;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: rgba(255,255,255,0.7);
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--accent-gold);
          padding-left: 5px;
        }

        .contact-info li {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          align-items: flex-start;
          color: rgba(255,255,255,0.7);
        }

        .contact-info i {
          color: var(--accent-gold);
          margin-top: 5px;
        }

        .contact-info a {
          color: inherit;
        }

        .footer-bottom {
          padding: 30px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dev-credits a {
          color: var(--accent-gold);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .dev-credits a:hover {
          text-decoration: underline;
          color: white;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
