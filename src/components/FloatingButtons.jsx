import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/917339004469?text=Hi!%20I'm%20interested%20in%20booking%20a%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float animate-float"
                title="Chat with us on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
                <span className="tooltip">Need Help? Chat with us</span>
            </a>

            {/* Scroll to Top */}
            <button
                className={`scroll-to-top ${showScroll ? 'show' : ''}`}
                onClick={scrollToTop}
                title="Go to Top"
            >
                <i className="fa-solid fa-arrow-up"></i>
            </button>

            <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          z-index: 1001;
          transition: all 0.3s ease;
        }

        .whatsapp-float:hover {
          background: #128C7E;
          transform: scale(1.1);
        }

        .whatsapp-float:hover .tooltip {
          visibility: visible;
          opacity: 1;
          right: 70px;
        }

        .tooltip {
          visibility: hidden;
          position: absolute;
          right: 50px;
          background: #333;
          color: white;
          padding: 8px 15px;
          border-radius: 5px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .whatsapp-float::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: inherit;
          border-radius: 50%;
          z-index: -1;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .scroll-to-top {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 50px;
          height: 50px;
          background: var(--primary-blue);
          color: white;
          border: none;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1001;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .scroll-to-top.show {
          opacity: 1;
          visibility: visible;
        }

        .scroll-to-top:hover {
          background: var(--deep-navy);
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            width: 50px;
            height: 50px;
            font-size: 28px;
            bottom: 20px;
            right: 20px;
          }
          .scroll-to-top {
            width: 40px;
            height: 40px;
            bottom: 20px;
            left: 20px;
          }
        }
      `}</style>
        </>
    );
};

export default FloatingButtons;
