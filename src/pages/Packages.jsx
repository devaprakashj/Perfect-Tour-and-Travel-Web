import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Packages = () => {
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const categories = ['All', 'Domestic', 'International', 'Hill Stations', 'Beach', 'Adventure'];

  const allPackages = [
    { id: 1, type: 'Beach', category: 'Domestic', image: '/images/packages/andaman.png', title: 'Andaman Islands Tour', duration: '4 Nights 5 Days', price: '₹29,999', badge: 'Popular', highlights: ['Radhanagar Beach', 'Cellular Jail', 'Havelock Island'] },
    { id: 2, type: 'Nature', category: 'Domestic', image: '/images/packages/kerala.png', title: 'Kerala Backwaters Tour', duration: '3 Days 2 Nights', price: '₹8,000', badge: 'Best Seller', highlights: ['Alappuzha', 'Varkala', 'Trivandrum'] },
    { id: 3, type: 'Beach', category: 'International', image: '/images/packages/thailand.png', title: 'Thailand Tour Package', duration: '5 Days', price: '₹40,000', badge: 'Exotic', highlights: ['Bangkok', 'Pattaya', 'Phi Phi Islands'] },
    { id: 4, type: 'Hill Stations', category: 'Domestic', image: '/images/packages/kodai.png', title: 'Kodaikanal Weekend Tour', duration: '2 Days 1 Night', price: '₹4,500', badge: 'Quick Escape', highlights: ['Kodai Lake', 'Bryant Park', 'Coaker\'s Walk'] },
    { id: 5, type: 'Hill Stations', category: 'Domestic', image: '/images/packages/ooty.png', title: 'Ooty Tour', duration: '1 Night 2 Days', price: '₹3,500', badge: 'Budget', highlights: ['Botanical Garden', 'Doddabetta Peak', 'Ooty Lake'] },
    { id: 6, type: 'Adventure', category: 'International', image: '/images/packages/singapore.png', title: 'Singapore Tour', duration: '6 Days 5 Nights', price: '₹65,000', badge: 'Luxury', highlights: ['Gardens by the Bay', 'Sentosa Island', 'Universal Studios'] },
    { id: 7, type: 'Hill Stations', category: 'Domestic', image: '/images/packages/manali.png', title: 'Manali Tour', duration: '5 Nights 6 Days', price: '₹18,000', badge: 'Adventure', highlights: ['Rohtang Pass', 'Hadimba Temple', 'Solang Valley'] },
    { id: 8, type: 'Luxury', category: 'International', image: '/images/packages/dubai.png', title: 'Dubai Tour', duration: '5 Days 4 Nights', price: '₹75,000', badge: 'Premium', highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall'] },
  ];

  const filteredPackages = filter === 'All'
    ? allPackages
    : allPackages.filter(p => p.category === filter || p.type === filter);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    travelers: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const message = `Hi Perfect Planners! 👋\n\nI'm interested in the *${selectedPkg?.title}* package.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📍 *Destination:* ${selectedPkg?.title}\n📅 *Travel Date:* ${formData.date || 'TDec'}\n👥 *Travelers:* ${formData.travelers}\n✉️ *Message:* ${formData.message || 'No additional requirements'}`;
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/917339004469?text=${encodedMsg}`, '_blank');
    closeModal();
  };

  const openModal = (pkg) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', date: '', travelers: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Tour Packages | Andaman, Kerala, Thailand & Dubai | Perfect Planners</title>
        <meta name="description" content="Explore our domestic and international tour packages from Tirunelveli. Best deals for Andaman, Kerala, Thailand, and Dubai. Custom itineraries at affordable prices." />
        <meta name="keywords" content="Budget Tour Packages, Luxury Holidays, Andaman Packages, Kerala Trip, International Holidays from India, Honeymoon Deals" />
        <link rel="canonical" href="https://perfectplannerstours.vercel.app/packages" />
      </Helmet>
      <div className="packages-page">
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <h1 data-aos="fade-up">Our Tour Packages</h1>
            <p className="breadcrumb">Home / Packages</p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="filter-section container section-padding">
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

          {/* Packages Grid */}
          <div className="grid grid-3">
            {filteredPackages.map((pkg) => (
              <div className="package-card" key={pkg.id} data-aos="fade-up">
                <div className="pkg-img img-zoom">
                  <img src={pkg.image} alt={pkg.title} />
                  <span className="pkg-badge">{pkg.badge}</span>
                </div>
                <div className="pkg-content">
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <div className="pkg-info-row">
                    <span><i className="fa-solid fa-clock"></i> {pkg.duration}</span>
                  </div>
                  <ul className="pkg-highlights-list">
                    {pkg.highlights.map((h, i) => (
                      <li key={i}><i className="fa-solid fa-check"></i> {h}</li>
                    ))}
                  </ul>
                  <div className="pkg-footer">
                    <div className="pkg-price">
                      <span className="price-label">Starts from</span>
                      <span className="price-val">{pkg.price}</span>
                    </div>
                    <div className="pkg-btns">
                      <button className="btn btn-primary btn-sm" onClick={() => openModal(pkg)}>Enquire Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content glass-card" onClick={e => e.stopPropagation()} data-aos="zoom-in">
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <h2 className="section-title">Enquiry Form</h2>
              <p className="modal-sub">Interested in: <strong>{selectedPkg?.title}</strong></p>
              <form className="enquiry-form" onSubmit={handleEnquirySubmit}>
                <div className="form-grid">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Destination"
                    value={selectedPkg?.title}
                    readOnly
                  />
                  <input
                    type="date"
                    name="date"
                    placeholder="Travel Date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                  <input
                    type="number"
                    name="travelers"
                    placeholder="No. of Travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message / Requirements"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <button type="submit" className="btn btn-primary w-full">Send WhatsApp Enquiry 📲</button>
              </form>
            </div>
          </div>
        )}

        <style>{`

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .filter-tab {
          padding: 10px 25px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 50px;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .filter-tab.active, .filter-tab:hover {
          background: var(--deep-navy);
          color: white;
          border-color: var(--deep-navy);
          box-shadow: var(--shadow-md);
        }

        .pkg-highlights-list {
          margin-bottom: 25px;
        }

        .pkg-highlights-list li {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pkg-highlights-list i {
          color: var(--emerald-green);
          font-size: 0.7rem;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: white;
          width: 100%;
          max-width: 700px;
          padding: 40px;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 2rem;
          border: none;
          background: none;
          cursor: pointer;
          color: #aaa;
        }

        .modal-sub {
          text-align: center;
          margin-top: -45px;
          margin-bottom: 40px;
          color: #666;
        }

        .enquiry-form .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .enquiry-form input, .enquiry-form textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 10px;
          outline: none;
        }

        .w-full {
          width: 100%;
          justify-content: center;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .filter-tabs {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 10px 5px;
            -webkit-overflow-scrolling: touch;
            margin-bottom: 30px;
          }
          .filter-tab {
            flex: 0 0 auto;
            white-space: nowrap;
            padding: 8px 18px;
          }
          .modal-content {
            padding: 30px 20px;
          }
          .modal-sub {
            margin-top: -30px;
            font-size: 0.9rem;
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default Packages;
