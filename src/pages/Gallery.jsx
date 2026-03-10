import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Our Trips', 'Beaches', 'Hill Stations', 'Temples', 'International'];

  const images = [
    { id: 1, src: '/images/gallery/boat_trip.jpg', category: 'Our Trips', title: 'Happy Customers - Boat Ride' },
    { id: 2, src: '/images/gallery/educational_tour.jpg', category: 'Our Trips', title: 'School Educational Tour' },
    { id: 3, src: '/images/gallery/group_trip.jpg', category: 'Our Trips', title: 'Family Group Tour' },
    { id: 4, src: '/images/gallery/tanjore_temple.jpg', category: 'Temples', title: 'Tanjore Temple Visit' },
    { id: 5, src: '/images/gallery/tour_bus.jpg', category: 'Our Trips', title: 'Tour Bus Departure' },
    { id: 6, src: '/images/destinations/andaman.png', category: 'Beaches', title: 'Andaman Paradise' },
    { id: 7, src: '/images/destinations/kerala.png', category: 'Beaches', title: 'Kerala Serenity' },
    { id: 8, src: '/images/destinations/thailand.png', category: 'International', title: 'Amazing Thailand' },
    { id: 9, src: '/images/destinations/kodai.png', category: 'Hill Stations', title: 'Misty Kodaikanal' },
    { id: 10, src: '/images/destinations/ooty.png', category: 'Hill Stations', title: 'Green Ooty' },
    { id: 11, src: '/images/destinations/singapore.png', category: 'International', title: 'Singapore Skyline' },
    { id: 12, src: '/images/destinations/dubai.png', category: 'International', title: 'Royal Dubai' },
  ];

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  const openLightbox = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <Helmet>
        <title>Travel Gallery | Our Trip Memories | Perfect Planners Tours & Travels</title>
        <meta name="description" content="Explore our travel gallery to see happy memories from our domestic and international tours. Real photos from Andaman, Kerala, Thailand excursions." />
        <meta name="keywords" content="Travel Photos, Tour Memories, Andaman Gallery, Kerala Trip Pictures, Group Tour Photos, Travel Agency Portfolio" />
        <link rel="canonical" href="https://perfectplannerstours.com/gallery" />
      </Helmet>
      <div className="gallery-page">
        <section className="page-hero">
          <div className="container">
            <h1 data-aos="fade-up">Our Travel Memories</h1>
            <p className="breadcrumb">Home / Gallery</p>
          </div>
        </section>

        <div className="gallery-section container section-padding">
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

          <div className="gallery-grid" data-aos="fade-up">
            {filteredImages.map((img, index) => (
              <div
                className={`gallery-item-box ${index % 5 === 0 ? 'tall' : index % 7 === 0 ? 'wide' : ''}`}
                key={img.id}
                onClick={() => openLightbox(img)}
              >
                <div className="img-zoom">
                  <img src={img.src} alt={img.title} />
                </div>
                <div className="gallery-item-overlay">
                  <span>{img.title}</span>
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()} data-aos="zoom-in">
              <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <h3 className="lightbox-title">{selectedImage.title}</h3>
            </div>
          </div>
        )}

        <style>{`

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          grid-auto-rows: 280px;
          grid-auto-flow: dense;
          gap: 20px;
        }

        .gallery-item-box {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }

        .gallery-item-box.tall {
          grid-row: span 2;
        }

        .gallery-item-box.wide {
          grid-column: span 2;
        }

        .gallery-item-box:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .gallery-item-box .img-zoom {
          width: 100%;
          height: 100%;
        }

        .gallery-item-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 53, 128, 0.8), transparent);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 30px;
          color: white;
          opacity: 0;
          transition: all 0.3s ease;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .gallery-item-box:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-item-overlay span {
          transform: translateY(20px);
          transition: transform 0.3s ease;
          font-size: 1.1rem;
        }

        .gallery-item-box:hover .gallery-item-overlay span {
          transform: translateY(0);
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(10px);
        }

        .lightbox-content {
          max-width: 900px;
          width: 100%;
          text-align: center;
          position: relative;
        }

        .lightbox-content img {
          width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 15px;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }

        .lightbox-close {
          position: absolute;
          top: -50px;
          right: 0;
          color: white;
          font-size: 3rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .lightbox-title {
          color: white;
          margin-top: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.4rem;
        }

        @media (max-width: 768px) {
          .gallery-item-box.wide {
            grid-column: span 1;
          }
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default Gallery;
