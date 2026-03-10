import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${(!isHomePage || scrolled) ? 'nav-scrolled' : ''}`}>
        <div className="container nav-container">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <div className="logo-inner">
              <i className="fa-solid fa-plane-departure plane-icon"></i>
              <div className="logo-text">
                <span className="logo-main">Perfect Planners</span>
                <span className="logo-sub">Tours & Travels</span>
              </div>
            </div>
          </NavLink>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="tel:7339004469" className="btn btn-primary cta-btn">
              <i className="fa-solid fa-phone"></i> Book Now
            </a>
            <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle Menu">
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <div className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-active' : ''}`}>
        <div className="mobile-nav-header">
          <span className="menu-label">Menu</span>
          <button className="close-drawer" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="mobile-cta-row">
            <a href="tel:7339004469" className="btn btn-primary w-full">
              <i className="fa-solid fa-phone"></i> Call Now
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          padding: 20px 0;
          transition: all 0.4s ease;
          background: transparent;
        }

        .nav-scrolled {
          background: rgba(0, 53, 128, 0.95);
          backdrop-filter: blur(10px);
          padding: 10px 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
        }

        .plane-icon {
          font-size: 2rem;
          color: var(--accent-gold);
          transform: rotate(-15deg);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-main {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: 1px;
          line-height: 1;
        }

        .logo-sub {
          font-size: 0.75rem;
          color: var(--accent-gold);
          letter-spacing: 2.2px;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          color: white;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gold);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .hamburger {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 1.8rem;
          cursor: pointer;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          right: 0;
          width: 85%;
          height: 100vh;
          background: var(--deep-navy);
          z-index: 20000;
          transform: translateX(101%);
          transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), visibility 0.5s;
          padding: 60px 30px;
          display: flex;
          flex-direction: column;
          box-shadow: -15px 0 45px rgba(0,0,0,0.25);
          visibility: hidden;
          pointer-events: none;
        }

        .mobile-nav-active {
          transform: translateX(0);
          visibility: visible;
          pointer-events: auto;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .menu-label {
          color: var(--accent-gold);
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .close-drawer {
          background: transparent;
          border: none;
          color: white;
          font-size: 1.8rem;
          cursor: pointer;
        }

        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(5px);
          z-index: 15000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }

        .mobile-nav-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .mobile-link {
          color: white;
          font-size: 1.3rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .mobile-link.active {
          color: var(--accent-gold);
        }

        .mobile-cta-row {
          margin-top: 30px;
        }

        .w-full {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: block;
          }
          .cta-btn {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .logo-main {
            font-size: 1.05rem;
          }
          .logo-sub {
            font-size: 0.6rem;
            letter-spacing: 1.2px;
          }
          .plane-icon {
            font-size: 1.4rem;
          }
          .nav-container {
            padding: 0 10px;
          }
          .mobile-nav {
            width: 90%;
            padding: 40px 20px;
          }
          .hamburger {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
