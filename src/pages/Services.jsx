import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Tour Packages (Domestic & International)",
      description: "We offer curated domestic and international tour packages that cater to every kind of traveler. From the serene backwaters of Kerala to the vibrant streets of Bangkok, our packages are designed for maximum comfort and an unforgettable experience. We also specialize in group tours with Tamil-speaking guides.",
      icon: "🌍",
      image: "/images/services/tours.png",
      list: ["Customized Domestic Tours", "International Destinations", "Tamil-Speaking Guides", "Honeymoon Specials", "Family Group Tours"]
    },
    {
      id: 2,
      name: "Air Ticket Booking",
      description: "Get the best fare guarantee for all your domestic and international air travels. We handle bookings for all major airlines including Indigo, Air India, Emirates, Qatar Airways, and more. Our team ensures a hassle-free booking experience with transparent pricing.",
      icon: "✈️",
      image: "/images/services/air_ticket.png",
      list: ["Domestic & International Flights", "Student Discount Fares", "LCC & Full Service Carriers", "Group Booking Discounts", "24/7 Ticketing Support"]
    },
    {
      id: 3,
      name: "Money Exchange Services",
      description: "Traveling abroad? Get competitive exchange rates for all major world currencies. We provide quick and secure money exchange services, ensuring you have the right currency before you fly. We deal with USD, EUR, SGD, THB, AED, and more.",
      icon: "💱",
      image: "/images/services/exchange.png",
      list: ["Competitive Exchange Rates", "Major Currencies Available", "Fast & Reliable Transaction", "RBI Authorized Full Fledged Money Changer", "Transparent Fees"]
    },
    {
      id: 4,
      name: "Certificate Attestation Services",
      description: "Simplify your international travel or visa process with our professional document attestation services. We provide MEA, Embassy, and HRD attestation, along with Apostille services for both personal and educational documents. Reliable and efficient handling of your important paperwork.",
      icon: "📋",
      image: "/images/services/attestation.png",
      list: ["MEA Attestation", "Embassy Attestation", "HRD & Notary Services", "Apostille Services", "PCC & Medical Registration"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Flights, Money Exchange & Attestation | Perfect Planners</title>
        <meta name="description" content="One-stop travel solution in Tirunelveli. We offer international air ticket booking, RBI authorized money exchange, and professional certificate attestation services." />
        <meta name="keywords" content="Air Ticket Booking Tirunelveli, Money Exchange Agent, Certificate Attestation MEA, Apostille Services, Travel Insurance, Passport Services" />
        <link rel="canonical" href="https://perfectplannerstours.vercel.app/services" />
      </Helmet>
      <div className="services-page">
        <section className="page-hero">
          <div className="container">
            <h1 data-aos="fade-up">Our Premium Services</h1>
            <p className="breadcrumb">Home / Services</p>
          </div>
        </section>

        <div className="services-container container section-padding">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${index % 2 !== 0 ? 'row-reverse' : ''}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="service-content">
                <div className="service-header-row">
                  <span className="service-icon-bg">{service.icon}</span>
                  <h2 className="service-name">{service.name}</h2>
                </div>
                <p className="service-desc">{service.description}</p>
                <ul className="service-list">
                  {service.list.map((item, i) => (
                    <li key={i}><i className="fa-solid fa-circle-check"></i> {item}</li>
                  ))}
                </ul>
                <button className="btn btn-navy mt-40">Enquire Now</button>
              </div>
              <div className="service-image-box">
                <img src={service.image} alt={service.name} />
                <div className="service-image-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        <style>{`

        .service-card {
          display: flex;
          align-items: center;
          gap: 60px;
          margin-bottom: 120px;
        }

        .row-reverse {
          flex-direction: row-reverse;
        }

        .service-content {
          flex: 1;
        }

        .service-image-box {
          flex: 1;
          height: 450px;
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .service-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,53,128,0.3), transparent);
        }

        .service-header-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .service-icon-bg {
          width: 70px;
          height: 70px;
          background: var(--light-sky);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          color: var(--primary-blue);
          box-shadow: 0 10px 20px rgba(0,87,184,0.1);
        }

        .service-name {
          font-size: 2rem;
          color: var(--deep-navy);
          font-family: 'Playfair Display', serif;
        }

        .service-desc {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .service-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .service-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: #666;
          font-weight: 500;
        }

        .service-list i {
          color: var(--emerald-green);
          font-size: 1.1rem;
        }

        .mt-40 { margin-top: 40px; }

        @media (max-width: 992px) {
          .service-card {
            flex-direction: column;
            gap: 40px;
            margin-bottom: 80px;
          }
          .service-image-box {
            height: 300px;
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .service-list {
            grid-template-columns: 1fr;
          }
           .service-icon-bg {
            width: 60px;
            height: 60px;
            font-size: 1.8rem;
          }
          .service-name {
            font-size: 1.6rem;
          }
          .service-desc {
            font-size: 1rem;
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default Services;
