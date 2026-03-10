import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: 'Package Interested In',
    date: '',
    adults: '',
    children: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, package: pkg, date, adults, children, message: userMsg } = formData;

    const message = `Hi Perfect Planners! 👋\n\nI want to Plan a Trip with the following details:\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📧 *Email:* ${email}\n📍 *Package:* ${pkg}\n📅 *Travel Date:* ${date || 'TBD'}\n👥 *Travelers:* ${adults} Adults, ${children || 0} Children\n✉️ *Message:* ${userMsg || 'No specific requirements'}`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/917339004469?text=${encodedMsg}`, '_blank');

    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

  const contactOptions = [
    { icon: 'fa-location-dot', title: 'Visit Our Office', content: '635, Sivanthipatti Main Road, Thiyagarajanagar, Tirunelveli – 627011, Tamil Nadu, India' },
    { icon: 'fa-phone', title: 'Call Us Now', content: '+91 73390 04469 | 8122694469 | 9894104469' },
    { icon: 'fa-envelope', title: 'Email Address', content: 'nellainijam1980@gmail.com' },
    { icon: 'fa-clock', title: 'Business Hours', content: 'Mon–Sat: 9:00 AM – 7:00 PM | Sun: 10:00 AM – 4:00 PM' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Perfect Planners Tours & Travels | Book Your Trip</title>
        <meta name="description" content="Get in touch with Perfect Planners Tours & Travels for custom tour planning and bookings. Visit our office in Tirunelveli or chat with us on WhatsApp." />
        <meta name="keywords" content="Contact Perfect Planners, Travel Agency Tirunelveli WhatsApp, Booking Enquiry, Tour Agent Phone number, Tirunelveli Office address" />
        <link rel="canonical" href="https://perfectplannerstours.com/contact" />
      </Helmet>
      <div className="contact-page">
        <section className="page-hero">
          <div className="container">
            <h1 data-aos="fade-up">Get In Touch With Us</h1>
            <p className="breadcrumb">Home / Contact Us</p>
          </div>
        </section>

        <section className="contact-section container section-padding">
          <div className="grid grid-2 items-center">
            {/* Left Column - Contact Info */}
            <div className="contact-info-col" data-aos="fade-right">
              <h2 className="section-title text-left">We're Here to Help You Plan Your Perfect Trip</h2>
              <p className="about-text">Have questions about our packages or need a custom itinerary? Our team of experts is ready to assist you in making your travel dreams come true.</p>

              <div className="contact-info-grid">
                {contactOptions.map((opt, i) => (
                  <div className="contact-info-item" key={i}>
                    <div className="contact-icon-box">
                      <i className={`fa-solid ${opt.icon}`}></i>
                    </div>
                    <div className="contact-text-box">
                      <h3>{opt.title}</h3>
                      <p>{opt.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="whatsapp-grid">
                <a href="https://wa.me/917339004469" className="btn btn-emerald w-full" target="_blank" rel="noopener noreferrer">Chat with Agent 1 <i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://wa.me/918122694469" className="btn btn-emerald w-full" target="_blank" rel="noopener noreferrer">Chat with Agent 2 <i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="contact-form-col" data-aos="fade-left">
              <div className="glass-card contact-form-card">
                <h3>Plan Your Trip Now</h3>
                <p>Fill out the form below and we'll get back to you with a personalized itinerary!</p>

                {formStatus === 'success' ? (
                  <div className="success-msg" data-aos="zoom-in">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>WhatsApp Redirected! We'll receive your message shortly.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <select name="package" value={formData.package} onChange={handleInputChange}>
                        <option>Package Interested In</option>
                        <option>Andaman Islands</option>
                        <option>Kerala Backwaters</option>
                        <option>Thailand Tour</option>
                        <option>Kodaikanal Weekend</option>
                        <option>Custom Package</option>
                      </select>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <input
                          type="date"
                          name="date"
                          placeholder="Travel Date"
                          value={formData.date}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          name="adults"
                          placeholder="No. of Adults"
                          min="1"
                          value={formData.adults}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          name="children"
                          placeholder="No. of Children"
                          min="0"
                          value={formData.children}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Special Requirements / Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full shadow-gold">Send WhatsApp Enquiry 📲</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section section-padding-0">
          <iframe
            title="Perfect Planners Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252407.2226359512!2d77.5499540225802!3d8.704571571016562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040dc01726cab3%3A0x1db81390802ecd2c!2sPERFECT%20PLANNERS%20TOURS%20AND%20TRAVELS.!5e0!3m2!1sen!2sin!4v1773112202568!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <style>{`
        .contact-info-grid {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .contact-info-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .contact-icon-box {
          width: 50px;
          height: 50px;
          background: var(--light-sky);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--primary-blue);
          flex-shrink: 0;
        }

        .contact-text-box h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: var(--deep-navy);
        }

        .contact-text-box p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .whatsapp-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .btn-emerald {
          background: var(--emerald-green);
          color: white;
          justify-content: center;
        }

        .btn-emerald:hover {
          background: #008F5A;
        }

        .contact-form-card {
          padding: 50px;
          background: white;
          border-radius: 30px;
        }

        .contact-form-card h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: var(--deep-navy);
        }

        .contact-form-card p {
          margin-bottom: 30px;
          color: #666;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .contact-grid {
            gap: 40px;
          }
          .contact-form-card {
            padding: 30px 20px;
          }
        }

        @media (max-width: 576px) {
          .form-row { grid-template-columns: 1fr; gap: 0; }
          .whatsapp-grid { grid-template-columns: 1fr; }
        }

        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #eee;
          background: #fdfdfd;
          border-radius: 10px;
          outline: none;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--primary-blue);
          background: white;
          box-shadow: 0 5px 15px rgba(0,87,184,0.1);
        }

        .success-msg {
          text-align: center;
          padding: 60px 40px;
        }

        .success-msg i {
          font-size: 4rem;
          color: var(--emerald-green);
          margin-bottom: 20px;
        }

        .success-msg p {
          font-size: 1.2rem;
          color: var(--deep-navy);
          font-weight: 600;
        }

        .section-padding-0 {
          padding-top: 0;
          padding-bottom: 0;
        }
      `}</style>
      </div>
    </>
  );
};

export default Contact;
