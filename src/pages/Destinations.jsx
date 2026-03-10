import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Destinations = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'South India', 'North India', 'International', 'Beach', 'Hill Station'];

  const allDestinations = [
    { name: "Andaman", tag: "Tropical Island", category: "Beach", description: "Experience crystal clear waters, white sandy beaches, and thrilling water sports at India's favorite tropical paradise.", image: "/images/destinations/andaman.png" },
    { name: "Kerala", tag: "God's Own Country", category: "South India", description: "Explore serene backwaters, lush tea plantations, and beautiful coastlines in the heart of South India.", image: "/images/destinations/kerala.png" },
    { name: "Thailand", tag: "Amazing Thailand", category: "International", description: "Discover exotic culture, stunning temples, and world-class street food in the Land of Smiles.", image: "/images/destinations/thailand.png" },
    { name: "Kodaikanal", tag: "Princess of Hill Stations", category: "South India", description: "Relax amidst misty hills, peaceful lakes, and pine forests in the queen of South India.", image: "/images/destinations/kodai.png" },
    { name: "Manali", tag: "Snowy Peaks", category: "North India", description: "Breathtaking views of the Himalayas and adventurous activities await you in this popular hill station.", image: "/images/destinations/manali.png" },
    { name: "Singapore", tag: "The Lion City", category: "International", description: "A perfect blend of technology, nature, and modern luxury for a futuristic city experience.", image: "/images/destinations/singapore.png" },
    { name: "Dubai", tag: "City of Gold", category: "International", description: "Unparalleled luxury, desert safaris, and some of the world's most iconic buildings.", image: "/images/destinations/dubai.png" },
    { name: "Bali", tag: "Island of the Gods", category: "International", description: "Stunning beaches, volcanic mountains, and spiritual culture make Bali a must-visit destination.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200" },
    { name: "Kashmir", tag: "Heaven on Earth", category: "North India", description: "Experience the ultimate beauty of Dal Lake, snow-capped peaks, and warm Himalayan hospitality.", image: "https://images.unsplash.com/photo-1566833925222-3860bb632145?q=80&w=1200" }
  ];

  const filteredDestinations = filter === 'All'
    ? allDestinations
    : allDestinations.filter(d => d.category === filter || d.tag.includes(filter));

  return (
    <>
      <Helmet>
        <title>Top Travel Destinations | Andaman, Kerala, Thailand & Dubai</title>
        <meta name="description" content="Explore top travel destinations. Specialized in Andaman, Kerala, Thailand, Dubai, and Singapore tour planning. Best travel itineraries from Tirunelveli." />
        <meta name="keywords" content="Best Holiday Destinations, South India Tours, Thailand Vacation, Dubai City Tour, Kerala Backwaters, International Destinations" />
        <link rel="canonical" href="https://perfectplannerstours.vercel.app/destinations" />
      </Helmet>
      <div className="destinations-page">
        <section className="page-hero">
          <div className="container">
            <h1 data-aos="fade-up">Explore Our Destinations</h1>
            <p className="breadcrumb">Home / Destinations</p>
          </div>
        </section>

        <div className="destinations-filter container pt-60">
          <div className="filter-tabs" data-aos="fade-up">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="destinations-list container section-padding">
          <div className="grid grid-2">
            {filteredDestinations.map((dest, index) => (
              <div className="dest-mag-card" key={index} data-aos="fade-up">
                <div className="dest-mag-img">
                  <img src={dest.image} alt={dest.name} />
                </div>
                <div className="dest-mag-overlay">
                  <span className="dest-mag-tag">{dest.tag}</span>
                  <h3 className="dest-mag-name">{dest.name}</h3>
                  <p className="dest-mag-desc">{dest.description}</p>
                  <button className="btn btn-outline-gold">View Packages &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
        .pt-60 { padding-top: 60px; }
        
        .dest-mag-card {
          border-radius: 40px;
          overflow: hidden;
          position: relative;
          height: 600px;
          transition: all 0.5s ease;
          box-shadow: 0 15px 45px rgba(0,0,0,0.2);
        }

        .dest-mag-card:hover {
          transform: translateY(-10px);
        }

        .dest-mag-img {
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease;
        }

        .dest-mag-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .dest-mag-card:hover .dest-mag-img {
          transform: scale(1.1);
        }

        .dest-mag-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 60px;
          color: white;
          text-align: left;
        }

        .dest-mag-tag {
          color: var(--accent-gold);
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 10px;
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 2px;
        }

        .dest-mag-name {
          font-size: 3.5rem;
          color: white;
          margin-bottom: 20px;
          line-height: title;
          font-family: 'Playfair Display', serif;
        }

        .dest-mag-desc {
          margin-bottom: 30px;
          font-size: 1.1rem;
          opacity: 0.9;
          font-weight: 300;
          max-width: 80%;
          line-height: 1.6;
        }

        .btn-outline-gold {
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          background: transparent;
          border-radius: 50px;
          padding: 10px 25px;
          width: fit-content;
          transition: all 0.3s ease;
        }

        .btn-outline-gold:hover {
          background: var(--accent-gold);
          color: var(--deep-navy);
          transform: scale(1.05);
        }

        @media (max-width: 1200px) {
           .dest-mag-name { font-size: 2.8rem; }
           .dest-mag-overlay { padding: 40px; }
        }

        @media (max-width: 768px) {
          .dest-mag-card { height: 450px; }
          .dest-mag-name { font-size: 2.2rem; }
          .dest-mag-desc { font-size: 0.95rem; max-width: 100%; }
          .dest-mag-overlay { padding: 30px; }
          .page-hero {
            padding-top: 120px;
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default Destinations;
