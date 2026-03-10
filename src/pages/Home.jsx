import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [enquiry, setEnquiry] = useState({
    destination: '',
    date: '',
    travelers: '1'
  });

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiry(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppEnquiry = () => {
    const { destination, date, travelers } = enquiry;
    if (!destination) {
      alert("Please select a destination");
      return;
    }

    const message = `Hi Perfect Planners! ✈️\n\nI want to plan a trip with the following details:\n\n📍 *Destination:* ${destination}\n📅 *Travel Date:* ${date || 'To be decided'}\n👥 *No. of Travelers:* ${travelers}\n\nPlease share the available packages and best quotes. Thanks!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917339004469?text=${encodedMessage}`, '_blank');
  };
  const heroImages = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=100&w=1920', // Forest/Mountain
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=100&w=1920', // Lake/Nature
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=100&w=1920', // Forest Path
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=100&w=1920', // Green Valley
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=100&w=1920', // Nature Park
  ];

  useEffect(() => {
    // Preload hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredPackages = [
    {
      id: 1,
      title: "Andaman Islands",
      image: "/images/packages/andaman.png",
      badge: "🔥 Most Popular",
      duration: "4N/5D",
      capacity: "Group Tours",
      highlights: "Radhanagar Beach • Cellular Jail • Havelock Island",
      price: "₹29,999",
      delay: "100"
    },
    {
      id: 2,
      title: "Kerala Backwaters",
      image: "/images/packages/kerala.png",
      badge: "🌿 Nature Escape",
      duration: "3D/2N",
      capacity: "AC Transport",
      highlights: "Alappuzha • Varkala • Poovar Lake",
      price: "₹8,000",
      delay: "200"
    },
    {
      id: 3,
      title: "Amazing Thailand",
      image: "/images/packages/thailand.png",
      badge: "✈️ International",
      duration: "5 Days",
      capacity: "Flights Incl.",
      highlights: "Bangkok • Pattaya • Phi Phi Islands",
      price: "₹40,000",
      delay: "300"
    },
    {
      id: 4,
      title: "Scenic Kodaikanal",
      image: "/images/packages/kodai.png",
      badge: "🏔️ Hill Station",
      duration: "2D/1N",
      capacity: "Available Now",
      highlights: "Kodai Lake • Bryant Park • Silver Cascade",
      price: "₹4,500",
      delay: "400"
    }
  ];

  const popularDestinations = [
    { name: "Andaman", tag: "Tropical Paradise", image: "/images/destinations/andaman.png" },
    { name: "Kerala", tag: "God's Own Country", image: "/images/destinations/kerala.png" },
    { name: "Thailand", tag: "Amazing Thailand", image: "/images/destinations/thailand.png" },
    { name: "Kodaikanal", tag: "Princess of Hill Stations", image: "/images/destinations/kodai.png" },
    { name: "Ooty", tag: "Queen of Hill Stations", image: "/images/destinations/ooty.png" },
    { name: "Singapore", tag: "The Lion City", image: "/images/destinations/singapore.png" },
    { name: "Dubai", tag: "City of Gold", image: "/images/destinations/dubai.png" },
    { name: "Manali", tag: "Snowy Peaks", image: "/images/destinations/manali.png" }
  ];

  return (
    <>
      <Helmet>
        <title>Perfect Planners Tours & Travels | Best Travel Agency</title>
        <meta name="description" content="Book affordable domestic and international tour packages. Specialized in Andaman, Kerala, Thailand, and Dubai tours with Perfect Planners." />
        <link rel="canonical" href="https://perfectplannerstours.com/" />
      </Helmet>
      <div className="home-page">
        {/* 1. Hero Banner Section */}
        <section className="hero">
          <div className="hero-slides">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
          </div>
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <span className="hero-label" data-aos="fade-down">✈️ Your Trusted Travel Partner Since Day One</span>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
              Explore the World with <span>Perfect Planners</span>
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
              Affordable Domestic & International Tour Packages
            </p>
            <div className="hero-btns" data-aos="fade-up" data-aos-delay="600">
              <NavLink to="/packages" className="btn btn-primary">🗺️ Explore Packages</NavLink>
              <NavLink to="/contact" className="btn btn-outline">📞 Book Now</NavLink>
            </div>
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="800">
              <div className="stat-badge"><span>500+</span> Happy Customers</div>
              <div className="stat-badge"><span>50+</span> Destinations</div>
              <div className="stat-badge"><span>10+</span> Years Experience</div>
            </div>
          </div>

          {/* 2. Quick Enquiry Search Bar */}
          <div className="search-bar-container" data-aos="zoom-in" data-aos-delay="1000">
            <div className="glass-card search-card">
              <div className="search-field">
                <label><i className="fa-solid fa-earth-americas"></i> Destination</label>
                <select
                  name="destination"
                  value={enquiry.destination}
                  onChange={handleEnquiryChange}
                >
                  <option value="">Where to go?</option>
                  <option value="Andaman">Andaman</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Europe">Europe</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Manali">Manali</option>
                  <option value="Kodaikanal">Kodaikanal</option>
                </select>
              </div>
              <div className="search-field">
                <label><i className="fa-solid fa-calendar-days"></i> Travel Date</label>
                <input
                  type="date"
                  name="date"
                  value={enquiry.date}
                  onChange={handleEnquiryChange}
                />
              </div>
              <div className="search-field">
                <label><i className="fa-solid fa-users"></i> Travelers</label>
                <input
                  type="number"
                  name="travelers"
                  min="1"
                  value={enquiry.travelers}
                  onChange={handleEnquiryChange}
                  placeholder="1"
                />
              </div>
              <button
                className="btn btn-navy search-btn"
                onClick={handleWhatsAppEnquiry}
              >
                Plan My Trip Now
              </button>
            </div>
          </div>
        </section>

        {/* 3. Featured Tour Packages Section */}
        <section className="section-padding container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">🌟 Our Featured Packages</h2>
            <p className="section-subtitle">Handpicked tours for every traveler and every budget</p>
          </div>
          <div className="grid grid-4">
            {featuredPackages.map((pkg) => (
              <div className="package-card" key={pkg.id} data-aos="fade-up" data-aos-delay={pkg.delay}>
                <div className="pkg-img img-zoom">
                  <img src={pkg.image} alt={pkg.title} />
                  <span className="pkg-badge">{pkg.badge}</span>
                </div>
                <div className="pkg-content">
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <div className="pkg-info-row">
                    <span><i className="fa-solid fa-clock"></i> {pkg.duration}</span>
                    <span><i className="fa-solid fa-user-group"></i> {pkg.capacity}</span>
                  </div>
                  <p className="pkg-highlights">{pkg.highlights}</p>
                  <div className="pkg-footer">
                    <div className="pkg-price-row">
                      <div className="pkg-price">
                        <span className="price-label">Starts from</span>
                        <span className="price-val">{pkg.price}</span>
                      </div>
                    </div>
                    <div className="pkg-btns">
                      <NavLink to="/packages" className="btn btn-outline-navy btn-sm">Details</NavLink>
                      <NavLink to="/contact" className="btn btn-primary btn-sm">Enquire Now</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-60">
            <NavLink to="/packages" className="btn btn-navy">View All Packages <i className="fa-solid fa-arrow-right"></i></NavLink>
          </div>
        </section>

        {/* 4. Why Choose Us Section */}
        <section className="why-choose section-padding bg-white">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Why Travelers Trust Perfect Planners</h2>
              <p className="section-subtitle">Experience matters when you're exploring the unknown</p>
            </div>
            <div className="grid grid-3">
              <div className="feature-box" data-aos="fade-right">
                <div className="feature-icon">✈️</div>
                <h3>Best Price Guarantee</h3>
                <p>Lowest prices with no hidden charges. We offer the best value for your money.</p>
              </div>
              <div className="feature-box" data-aos="fade-up">
                <div className="feature-icon">🛡️</div>
                <h3>100% Safe & Secure</h3>
                <p>Verified hotels, transport, and expert guides to ensure your safety throughout.</p>
              </div>
              <div className="feature-box" data-aos="fade-left">
                <div className="feature-icon">🌍</div>
                <h3>Domestic & International</h3>
                <p>From local hidden gems to global wonders, we cover it all.</p>
              </div>
              <div className="feature-box" data-aos="fade-right" data-aos-delay="200">
                <div className="feature-icon">💳</div>
                <h3>Easy EMI Options</h3>
                <p>Don't let budget hold you back. Book now and pay in easy installments.</p>
              </div>
              <div className="feature-box" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-icon">📞</div>
                <h3>24/7 Customer Support</h3>
                <p>Always here when you need us. Round-the-clock assistance for peace of mind.</p>
              </div>
              <div className="feature-box" data-aos="fade-left" data-aos-delay="200">
                <div className="feature-icon">🏅</div>
                <h3>Expert Travel Planners</h3>
                <p>Experienced team with deep knowledge of destinations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Popular Destinations Section */}
        <section className="section-padding container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">🗺️ Popular Destinations</h2>
            <p className="section-subtitle">Explore our most loved vacation spots across the globe</p>
          </div>
          <div className="destinations-grid">
            {popularDestinations.map((dest, index) => (
              <div className={`dest-card dest-card-${index}`} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <img src={dest.image} alt={dest.name} />
                <div className="dest-overlay">
                  <h3>{dest.name}</h3>
                  <p>{dest.tag}</p>
                  <NavLink to="/packages" className="explore-link">Explore <i className="fa-solid fa-arrow-right"></i></NavLink>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. How It Works Section */}
        <section className="section-padding bg-sky pos-relative">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">Your dream vacation is just 4 simple steps away</p>
            </div>
            <div className="journey-grid">
              {[
                { num: "01", icon: "🔍", title: "Choose Destination", desc: "Browse our handpicked domestic and international packages." },
                { num: "02", icon: "📋", title: "Customize Trip", desc: "Talk to our experts to tailor the itinerary to your needs." },
                { num: "03", icon: "💰", title: "Secure Booking", desc: "Confirm with easy payments and instant confirmation." },
                { num: "04", icon: "✈️", title: "Start Journey", desc: "Pack your bags and fly to your dream destination!" }
              ].map((step, i) => (
                <React.Fragment key={i}>
                  <div className="journey-item" data-aos="fade-up" data-aos-delay={i * 150}>
                    <div className="journey-card">
                      <div className="step-count">{step.num}</div>
                      <div className="journey-icon">{step.icon}</div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="journey-arrow" data-aos="fade-in" data-aos-delay={i * 150 + 100}>
                      <i className="fa-solid fa-plane-up"></i>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Testimonials Section */}
        <section className="section-padding container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">What Our Travelers Say ❤️</h2>
            <p className="section-subtitle">Stories of happiness from across the world</p>
          </div>
          <div className="testimonials-track">
            {[
              { name: "Rahul S.", place: "Chennai, TN", text: "Our trip to Andaman with Perfect Planners was absolutely flawless. From the airport pickup to the hotel stay, everything was perfectly organized.", icon: "👤" },
              { name: "Priyadharshini M.", place: "Madurai, TN", text: "Amazing honeymoon trip to Kerala! The houseboat experience was a dream. The team took care of every small detail. Will definitely book again!", icon: "👩" },
              { name: "Anish Kumar", place: "Bangalore, KA", text: "Booked a Dubai family tour. Exceptional service and very friendly guides. The desert safari was the highlight of our trip. Thank you!", icon: "👨" }
            ].map((review, i) => (
              <div className="review-card glass-card" key={i} data-aos="fade-up" data-aos-delay={i * 200}>
                <div className="quote-mark">“</div>
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-user">
                  <div className="user-avatar">{review.icon}</div>
                  <div className="user-info">
                    <h4>{review.name}</h4>
                    <span>{review.place}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Quick Contact Banner */}
        <section className="contact-banner">
          <div className="container banner-inner" data-aos="flip-up">
            <h2>Ready to Plan Your Dream Holiday?</h2>
            <p>Contact us today and get a FREE customized itinerary!</p>
            <div className="banner-btns">
              <a href="tel:7339004469" className="btn btn-primary"><i className="fa-solid fa-phone"></i> Call Us Now — 7339004469</a>
              <a href="https://wa.me/917339004469" className="btn btn-outline"><i className="fa-brands fa-whatsapp"></i> WhatsApp Us</a>
            </div>
          </div>
        </section>

        <style>{`
        /* Hero Section */
        .hero {
          min-height: 100vh;
          width: 100%;
          position: relative;
          color: white;
          display: flex;
          align-items: center;
          margin-bottom: 100px; /* Space for search bar overlap */
          padding-top: 80px;
          background: #003580 url('https://images.unsplash.com/photo-1589136777351-fdc9c9c85f95?auto=format&fit=crop&q=20&w=1200') no-repeat center/cover;
        }

        .hero-slides {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-slide {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 2s ease-in-out;
          will-change: opacity;
        }

        .hero-slide.active {
          opacity: 1;
          z-index: 2;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%);
          z-index: 3;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
          padding-top: 40px;
          padding-bottom: 120px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            min-height: auto;
            padding-top: 100px;
            padding-bottom: 40px;
            margin-bottom: 0px;
            text-align: center;
          }
          .hero-content {
            padding-bottom: 30px;
            width: 100%;
          }
          .hero-title {
            font-size: 2.4rem !important;
          }
          .hero-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 30px;
          }
        }

        .hero-label {
          background: rgba(255,183,0,0.2);
          color: var(--accent-gold);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 25px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,183,0,0.4);
        }

        .hero-title {
          font-size: clamp(2.8rem, 8vw, 5rem);
          margin-bottom: 25px;
          color: white;
          line-height: 1.1;
          font-family: 'Playfair Display', serif;
        }

        .hero-title span {
          color: var(--accent-gold);
          display: block;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 45px;
          opacity: 0.95;
          font-weight: 300;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-btns {
          display: flex;
          gap: 25px;
          justify-content: center;
          margin-bottom: 60px;
        }

        @media (max-width: 768px) {
          .hero-btns {
            margin-bottom: 40px;
          }
        }

        .hero-stats {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-stats {
            gap: 15px;
            margin-bottom: 20px;
          }
        }

        .stat-badge {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          padding: 10px 18px; /* More compact */
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.25);
          font-size: 0.8rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }

        .stat-badge span {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--accent-gold);
          line-height: 1.2;
        }

        @media (max-width: 480px) {
          .hero-btns {
            flex-direction: column;
            gap: 15px;
            width: 100%;
            padding: 0 20px;
          }
          .hero-btns .btn {
            width: 100%;
            justify-content: center;
          }
          .hero-stats {
            gap: 15px;
          }
          .stat-badge {
            flex: 1 1 40%;
          }
        }

        /* Search Bar Fixed Alignment */
        .search-bar-container {
          position: absolute;
          bottom: 0;
          left: 5%;
          right: 5%;
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
          transform: translateY(60%); /* Adjusted shift */
          z-index: 100;
        }

        .search-card {
          padding: 25px 35px;
          display: flex;
          flex-wrap: wrap;
          gap: 45px;
          align-items: flex-end;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          width: 100%;
        }

        .search-field {
          flex: 1;
          min-width: 180px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .search-btn {
          flex: 0 0 auto;
          height: 52px;
          padding: 0 35px;
        }

        @media (max-width: 768px) {
          .search-bar-container {
            position: relative;
            transform: none;
            width: 100%;
            left: 0;
            right: 0;
            margin-top: 0px;
            padding: 20px 15px;
            bottom: auto;
            z-index: 10;
            overflow: hidden; /* Prevent internal elements from leaking */
          }
          .search-card {
            flex-direction: column;
            align-items: stretch;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            width: 100%;
            margin: 0;
          }
          .search-field {
            width: 100%;
            min-width: 100%;
          }
          .search-btn {
            width: 100%;
          }
        }

        .search-field label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--deep-navy);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .search-field label i {
          color: var(--primary-blue);
        }

        .search-field select, .search-field input {
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 10px;
          outline: none;
          font-family: inherit;
        }

        /* Package Cards Fixes */
        .package-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.4s ease;
          border: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          height: 100%; /* Equal height cards */
        }

        .package-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .pkg-img {
          height: 200px;
          width: 100%;
          position: relative;
          background-color: #f0f4f8; /* Fallback color */
          overflow: hidden;
        }

        .pkg-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pkg-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(4px);
          color: var(--deep-navy);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 2;
        }

        .pkg-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .pkg-title {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--deep-navy);
          line-height: 1.3;
        }

        .pkg-info-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 0.8rem;
          color: #666;
        }

        .pkg-info-row span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .pkg-info-row i {
          color: var(--primary-blue);
        }

        .pkg-highlights {
          font-size: 0.85rem;
          color: #777;
          margin-bottom: 20px;
          flex: 1; /* Pushes footer to bottom */
        }

        .pkg-footer {
          display: flex;
          flex-direction: column; /* Stacked for better fit */
          gap: 15px;
          border-top: 1px solid #f0f0f0;
          padding-top: 15px;
          margin-top: auto;
        }

        .pkg-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pkg-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .btn-sm {
          padding: 10px 12px;
          font-size: 0.75rem;
          text-align: center;
          justify-content: center;
        }

        /* Feature Boxes */
        .feature-box {
          text-align: center;
          padding: 40px;
          background: var(--soft-gray);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .feature-box:hover {
          background: white;
          box-shadow: var(--shadow-md);
          transform: translateY(-5px);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .feature-box h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
        }

        /* Destinations Grid */
        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 250px;
          gap: 20px;
        }

        .dest-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .dest-card-0 { grid-column: span 2; grid-row: span 2; }
        .dest-card-1 { grid-column: span 1; grid-row: span 1; }
        .dest-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .dest-card:hover img {
          transform: scale(1.1);
        }

        .dest-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px;
          color: white;
        }

        .dest-overlay h3 {
          color: white;
          font-size: 1.4rem;
          margin-bottom: 5px;
        }

        @media (max-width: 768px) {
          .destinations-grid {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: 200px;
            gap: 15px;
          }
          .dest-card-0 { grid-column: span 2; grid-row: span 1; }
          .dest-overlay { padding: 15px; }
          .dest-overlay h3 { font-size: 1.2rem; }
        }

        @media (max-width: 480px) {
          .destinations-grid {
            grid-template-columns: 1fr;
          }
          .dest-card-0 { grid-column: span 1; }
        }

        .explore-link {
          color: var(--accent-gold);
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 10px;
        }

        /* Steps Staggered Redesign */
        /* Journey Grid Redesign */
        .journey-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 60px;
          position: relative;
        }

        .journey-item {
          flex: 1;
          min-width: 200px;
        }

        .journey-card {
          background: white;
          padding: 40px 25px;
          border-radius: 30px;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
          border: 1px solid rgba(0,0,0,0.05);
          height: 100%;
        }

        .journey-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: var(--accent-gold);
        }

        .step-count {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--blue-gradient);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 5px 15px rgba(0,51,102,0.3);
        }

        .journey-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: inline-block;
          filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1));
        }

        .journey-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--deep-navy);
        }

        .journey-card p {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }

        .journey-arrow {
          color: var(--accent-gold);
          font-size: 1.5rem;
          opacity: 0.5;
          animation: flight 3s infinite ease-in-out;
        }

        @keyframes flight {
          0%, 100% { transform: translateX(0) translateY(0) rotate(45deg); }
          50% { transform: translateX(10px) translateY(-5px) rotate(45deg); }
        }

        @media (max-width: 992px) {
          .journey-grid {
            flex-direction: column;
            gap: 40px;
          }
          .journey-arrow {
            transform: rotate(135deg);
            animation: flight-down 2s infinite;
          }
          @keyframes flight-down {
            0%, 100% { transform: translateY(0) rotate(135deg); }
            50% { transform: translateY(10px) rotate(135deg); }
          }
        }

        /* Testimonials */
        .testimonials-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .review-card {
          padding: 45px 35px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255,255,255,0.7);
          position: relative;
        }

        .review-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
          border-color: var(--accent-gold);
        }

        .quote-mark {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 4rem;
          color: var(--light-sky);
          font-family: 'Playfair Display', serif;
          line-height: 1;
          opacity: 0.5;
        }

        .review-stars {
          margin-bottom: 20px;
          letter-spacing: 2px;
          font-size: 0.9rem;
        }

        .review-text {
          font-style: italic;
          color: #555;
          margin-bottom: 30px;
          line-height: 1.8;
        }

        .review-user {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .user-avatar {
          width: 50px;
          height: 50px;
          background: var(--light-sky);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
          font-size: 1.2rem;
        }

        .user-info h4 {
          font-size: 1rem;
          margin: 0;
        }

        .user-info span {
          font-size: 0.85rem;
          color: #888;
        }

        /* Contact Banner */
        .contact-banner {
          padding: 80px 0;
          background: var(--blue-gradient);
          color: white;
          text-align: center;
        }

        .banner-inner h2 {
          font-size: 3rem;
          color: white;
          margin-bottom: 20px;
        }

        .banner-inner p {
          font-size: 1.1rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .banner-btns {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .banner-btns .btn {
            width: 100%;
            justify-content: center;
          }
          .contact-banner {
            padding: 60px 0;
          }
          .banner-inner h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 992px) {
          .search-card {
            grid-template-columns: 1fr 1fr;
          }
          .destinations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .steps-container::before {
            display: none;
          }
          .testimonials-track {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding-top: 80px;
          }
          .search-bar-container {
            position: relative;
            bottom: 0;
            transform: none;
            left: 0;
            margin-top: -50px;
            padding: 0 15px;
          }
          .search-card {
            grid-template-columns: 1fr;
          }
          .banner-btns {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default Home;
