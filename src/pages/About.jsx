import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 data-aos="fade-up">About Perfect Planners</h1>
          <p className="breadcrumb">Home / About Us</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section container section-padding">
        <div className="grid grid-2 items-center">
          <div className="story-image" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200" alt="Perfect Planners Team" />
            <div className="experience-badge">
              <span>10+</span>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="story-content" data-aos="fade-left">
            <h2 className="section-title text-left">Our Incredible Journey</h2>
            <p className="about-text">
              Perfect Planners Tours and Travels is a trusted travel agency based in Tirunelveli, Tamil Nadu, dedicated to making every journey memorable, affordable, and hassle-free. We specialize in customized domestic and international tour packages, air ticket booking, money exchange, and attestation services.
            </p>
            <p className="about-text">
              Our experienced team works tirelessly to ensure that every traveler gets the best experience within their budget. From the start, we've focused on quality service and customer satisfaction, which has made us one of South India's favorite travel planners.
            </p>
            <div className="vision-mission-row">
              <div className="vm-box">
                <i className="fa-solid fa-bullseye"></i>
                <h3>Our Mission</h3>
                <p>To make quality travel accessible to every family in Tamil Nadu and beyond.</p>
              </div>
              <div className="vm-box">
                <i className="fa-solid fa-eye"></i>
                <h3>Our Vision</h3>
                <p>To become South India's most trusted and loved travel planning company.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights section-padding bg-navy text-white">
        <div className="container">
          <div className="grid grid-4 text-center">
            <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
              <i className="fa-solid fa-users"></i>
              <div className="counter">500+</div>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
              <i className="fa-solid fa-earth-asia"></i>
              <div className="counter">50+</div>
              <p>Destinations</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
              <i className="fa-solid fa-thumbs-up"></i>
              <div className="counter">100%</div>
              <p>Satisfaction Rate</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
              <i className="fa-solid fa-award"></i>
              <div className="counter">10+</div>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section container section-padding">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Expert Team</h2>
          <p className="section-subtitle">The passionate people behind your perfect journeys</p>
        </div>
        <div className="grid grid-3">
          {[
            { name: "S. NIJAMTHEEN", role: "Founder", image: "/images/team/founder.jpg", linkedin: "#" },
            { name: "Devaprakash J", role: "Website Developer", icon: "fa-code", linkedin: "https://www.linkedin.com/in/devaprakashj/" },
            { name: "Inas Husayn K", role: "Website Developer", icon: "fa-laptop-code", linkedin: "https://www.linkedin.com/in/inas-husayn/" }
          ].map((member, i) => (
            <div className="team-card glass-card text-center" key={i} data-aos="fade-up" data-aos-delay={i * 200}>
              <div className="team-avatar">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="avatar-img" />
                ) : (
                  <i className={`fa-solid ${member.icon}`}></i>
                )}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-socials">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .bg-navy { 
          background: var(--deep-navy); 
          color: white; 
        }

        .text-left { text-align: left; }
        .text-left::after { left: 30px; transform: none; }

        .about-text {
          margin-bottom: 25px;
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
        }

        .story-image {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .experience-badge {
          position: absolute;
          bottom: 40px;
          right: -20px;
          background: var(--accent-gold);
          color: var(--deep-navy);
          padding: 20px 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: var(--shadow-lg);
          transform: rotate(-5deg);
        }

        .experience-badge span {
          display: block;
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
        }

        .experience-badge p {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-top: 5px;
        }

        .vision-mission-row {
          display: flex;
          gap: 30px;
          margin-top: 40px;
        }

        .vm-box {
          flex: 1;
        }

        .vm-box i {
          font-size: 2rem;
          color: var(--primary-blue);
          margin-bottom: 15px;
        }

        .vm-box h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: var(--deep-navy);
        }

        .vm-box p {
          font-size: 0.95rem;
          color: #666;
        }

        .stat-card i {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: var(--accent-gold);
        }

        .counter {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: white;
          font-family: 'Poppins', sans-serif;
        }

        .stat-card p {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .team-avatar {
          width: 140px;
          height: 140px;
          background: var(--light-sky);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          color: var(--primary-blue);
          margin: 0 auto 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          overflow: hidden;
          border: 4px solid white;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-card {
          padding: 40px;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-gold);
        }

        .team-name {
          font-size: 1.4rem;
          margin-bottom: 5px;
          color: var(--deep-navy);
        }

        .team-role {
          color: #888;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .team-socials {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .team-socials a {
          color: #ccc;
          font-size: 1.2rem;
          transition: var(--transition);
        }

        .team-socials a:hover {
          color: var(--primary-blue);
        }

        @media (max-width: 768px) {
          .vision-mission-row {
            flex-direction: column;
            gap: 20px;
          }
          .experience-badge {
            bottom: 10px;
            right: 0px;
            padding: 10px 20px;
            transform: none;
          }
          .experience-badge span {
            font-size: 1.8rem;
          }
          .team-avatar {
            width: 120px;
            height: 120px;
            font-size: 2.5rem;
          }
          .team-card {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
