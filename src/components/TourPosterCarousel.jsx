import React, { useState, useEffect, useRef, useCallback } from 'react';

const posters = [
  { id: 1, src: '/images/packages/poster_munnar.png.jpeg',    alt: 'Weekend Escape to Munnar – Rs 8,000 | 2N 3D' },
  { id: 2, src: '/images/packages/poster_andaman.png.jpeg',   alt: 'Andaman & Nicobar Island – 35,000 | 3N 4D' },
  { id: 3, src: '/images/packages/poster_vagamon.png.jpeg',   alt: "Let's Explore Vagamon – Rs 6,000 | 1N 2D" },
  { id: 4, src: '/images/packages/poster_kerala.png.jpeg',    alt: "Let's Explore Kerala – Rs 7,000 | 2N 3D" },
  { id: 5, src: '/images/packages/poster_yercaud.png.jpeg',   alt: 'Yercaud Tourism – Rs 6,000 | 1N 2D' },
  { id: 6, src: '/images/packages/poster_thailand.png.jpeg',  alt: 'Thailand Tour – Rs 45,000 | 3N 4D' },
  { id: 7, src: '/images/packages/poster_goa.png.jpeg',       alt: "Let's Go to Goa – 8,000 | 2N 3D" },
  { id: 8, src: '/images/packages/poster_kodai.png.jpeg',     alt: 'Kodaikkanal Trip – Rs 4,000 | 1N 2D' },
];

// How many visible slides per breakpoint
const getVisibleCount = () => {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth < 640)  return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
};

const TourPosterCarousel = () => {
  const [visibleCount, setVisibleCount]   = useState(getVisibleCount);
  const [currentIndex, setCurrentIndex]   = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging]       = useState(false);
  const [dragStartX, setDragStartX]       = useState(0);
  const [dragDelta, setDragDelta]         = useState(0);
  const autoPlayRef  = useRef(null);
  const trackRef     = useRef(null);

  // Infinite clone strategy: prepend last N + append first N
  const clonedPosters = [
    ...posters.slice(-visibleCount),
    ...posters,
    ...posters.slice(0, visibleCount),
  ];

  const total        = posters.length;
  const offset       = visibleCount; // how many clones prepended
  // Real index in cloned array
  const realIndex    = currentIndex + offset;

  // Slide width as percentage
  const slideWidthPct = 100 / visibleCount;

  /* ---------- resize handler ---------- */
  useEffect(() => {
    const onResize = () => {
      const next = getVisibleCount();
      if (next !== visibleCount) {
        setVisibleCount(next);
        setCurrentIndex(0);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [visibleCount]);

  /* ---------- auto-play ---------- */
  const startAutoPlay = useCallback(() => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    clearInterval(autoPlayRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  /* ---------- infinite loop: jump without animation when hitting clone zone ---------- */
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    // If we went past the end clones → jump to real start
    if (currentIndex >= total) {
      setCurrentIndex(0);
    }
    // If we went before the start clones → jump to real end
    if (currentIndex < 0) {
      setCurrentIndex(total - 1);
    }
  }, [currentIndex, total]);

  /* ---------- navigation ---------- */
  const goTo = (dir) => {
    stopAutoPlay();
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + dir);
    startAutoPlay();
  };

  /* ---------- touch / mouse swipe ---------- */
  const onDragStart = (clientX) => {
    stopAutoPlay();
    setIsDragging(true);
    setDragStartX(clientX);
    setDragDelta(0);
  };

  const onDragMove = (clientX) => {
    if (!isDragging) return;
    setDragDelta(clientX - dragStartX);
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 60;
    if (dragDelta < -threshold) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    } else if (dragDelta > threshold) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
    setDragDelta(0);
    startAutoPlay();
  };

  // Translate: each slide takes (100/visibleCount)% of the track
  const translateX = -(realIndex * slideWidthPct) + (dragDelta / (trackRef.current?.offsetWidth || 1)) * 100;

  return (
    <section className="poster-carousel-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">🎫 Featured Tour Packages</h2>
          <p className="section-subtitle">Exclusive deals curated just for you — swipe or browse to explore</p>
        </div>

        {/* Carousel Wrapper */}
        <div className="pcarousel-wrapper" data-aos="fade-up" data-aos-delay="200">
          {/* Prev Arrow */}
          <button
            className="pcarousel-arrow pcarousel-arrow-prev"
            onClick={() => goTo(-1)}
            aria-label="Previous package"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Track */}
          <div className="pcarousel-viewport">
            <div
              ref={trackRef}
              className="pcarousel-track"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning && !isDragging ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                width: `${(clonedPosters.length / visibleCount) * 100}%`,
              }}
              onTransitionEnd={handleTransitionEnd}
              /* Mouse drag */
              onMouseDown={e => onDragStart(e.clientX)}
              onMouseMove={e => onDragMove(e.clientX)}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
              /* Touch drag */
              onTouchStart={e => onDragStart(e.touches[0].clientX)}
              onTouchMove={e => onDragMove(e.touches[0].clientX)}
              onTouchEnd={onDragEnd}
            >
              {clonedPosters.map((poster, idx) => (
                <div
                  key={`${poster.id}-${idx}`}
                  className="pcarousel-slide"
                  style={{ width: `${100 / clonedPosters.length * visibleCount}%` }}
                >
                  <div className="poster-card">
                    <img
                      src={poster.src}
                      alt={poster.alt}
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            className="pcarousel-arrow pcarousel-arrow-next"
            onClick={() => goTo(1)}
            aria-label="Next package"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="pcarousel-dots">
          {posters.map((_, i) => (
            <button
              key={i}
              className={`pcarousel-dot ${i === ((currentIndex % total) + total) % total ? 'active' : ''}`}
              onClick={() => {
                stopAutoPlay();
                setIsTransitioning(true);
                setCurrentIndex(i);
                startAutoPlay();
              }}
              aria-label={`Go to poster ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* ===== Poster Carousel Section ===== */
        .poster-carousel-section {
          background: linear-gradient(135deg, #f0f6ff 0%, #fff8e6 50%, #f0f6ff 100%);
          overflow: hidden;
        }

        .pcarousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* Arrow Buttons */
        .pcarousel-arrow {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          border: 2px solid #e0e8f4;
          color: var(--deep-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,53,128,0.12);
          z-index: 10;
          position: relative;
        }

        .pcarousel-arrow:hover {
          background: var(--deep-navy);
          border-color: var(--deep-navy);
          color: white;
          box-shadow: 0 8px 24px rgba(0,53,128,0.25);
          transform: scale(1.08);
        }

        .pcarousel-arrow-prev { margin-right: 16px; }
        .pcarousel-arrow-next { margin-left:  16px; }

        /* Viewport & Track */
        .pcarousel-viewport {
          flex: 1;
          overflow: hidden;
          border-radius: 0;
        }

        .pcarousel-track {
          display: flex;
          will-change: transform;
          cursor: grab;
          user-select: none;
        }

        .pcarousel-track:active {
          cursor: grabbing;
        }

        .pcarousel-slide {
          flex-shrink: 0;
          padding: 12px 10px;
          box-sizing: border-box;
        }

        /* Poster Card */
        .poster-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(0,0,0,0.10);
          background: white;
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.35s ease;
          aspect-ratio: 3 / 4;   /* Vertical flyer proportion */
          display: flex;
        }

        .poster-card:hover {
          transform: scale(1.04) translateY(-6px);
          box-shadow: 0 18px 48px rgba(0,53,128,0.18), 0 4px 16px rgba(0,0,0,0.10);
        }

        .poster-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;   /* Show full poster, no cropping */
          object-position: center;
          display: block;
          pointer-events: none;
          border-radius: 16px;
        }

        /* Dot Indicators */
        .pcarousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .pcarousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccd8ea;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .pcarousel-dot.active {
          background: var(--primary-blue);
          width: 28px;
          border-radius: 5px;
        }

        /* ===== Responsive ===== */
        @media (max-width: 1024px) {
          .pcarousel-arrow {
            width: 40px;
            height: 40px;
          }
          .pcarousel-arrow-prev { margin-right: 10px; }
          .pcarousel-arrow-next { margin-left:  10px; }
        }

        @media (max-width: 640px) {
          .pcarousel-arrow {
            width: 36px;
            height: 36px;
          }
          .pcarousel-arrow-prev { margin-right: 8px; }
          .pcarousel-arrow-next { margin-left:  8px; }
          .pcarousel-slide {
            padding: 8px 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default TourPosterCarousel;
