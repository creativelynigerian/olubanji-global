import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* HEADER / NAVIGATION */}
      <header className="navbar">
        <h1 className="logo">Olubanji Global</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Making International Travel Accessible & Stress-Free</h2>
          <p>Your trusted partner for dependable, professional, and personalized travel solutions.</p>
          <a href="#contact" className="cta-button">Book Your Next Trip</a>
        </div>
      </section>

      {/* ABOUT / COMMITMENT SECTION */}
      <section id="about" className="about">
        <h2>Our Commitment</h2>
        <p>
          At Olubanji Global Services, our mission is to deliver dependable, professional, and personalized travel solutions that meet the unique needs of each client, making international travel accessible and stress-free.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services">
        <h2>Our Key Services</h2>
        <p className="section-subtitle">Dedicated to providing comprehensive travel solutions tailored to your needs.</p>
        
        <div className="service-grid">
          <div className="service-card">
            <h3>Visa & Documentation</h3>
            <p>We simplify your application process, providing expert guidance and support to ensure timely approvals for various visa types.</p>
          </div>
          <div className="service-card">
            <h3>Flight & Hotel Bookings</h3>
            <p>Reliable reservations to ensure your travel arrangements are seamless. We find the best options that fit your schedule and budget.</p>
          </div>
          <div className="service-card">
            <h3>Travel Insurance</h3>
            <p>Protect your journey with comprehensive travel insurance plans, providing peace of mind throughout your travels.</p>
          </div>
          <div className="service-card">
            <h3>Travel Planning</h3>
            <p>Tailored travel advice, flight reservations, hotel bookings, and travel insurance to make your trip hassle-free from start to finish.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <p className="section-subtitle">Hear from satisfied clients who have experienced our dedicated support.</p>
        
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <h4>Excellent Visa Support</h4>
            <p>"Olubanji Global Services made my visa application process straightforward and stress-free. Their team was professional and attentive to every detail."</p>
          </div>
          <div className="testimonial-card">
            <h4>Seamless Travel Planning</h4>
            <p>"Thanks to their personalized travel consultation, I enjoyed a hassle-free trip. All bookings and arrangements were handled efficiently."</p>
          </div>
          <div className="testimonial-card">
            <h4>Reliable Support</h4>
            <p>"Their customer service is exceptional. Whenever I had questions, they responded promptly and professionally, making me feel confident."</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We're here to assist with your travel needs. Contact us today for personalized support.</p>
          
          <div className="info-block">
            <strong>Address:</strong>
            <p>Plot 32, Admiral Ayinla Way, Opp Treasure Garden Estate Freedom Way, Ikate Lekki, Lagos</p>
          </div>
          <div className="info-block">
            <strong>Hours:</strong>
            <p>Monday - Friday: 8AM - 6PM</p>
          </div>
          <div className="info-block">
            <strong>Phone:</strong>
            <p><a href="tel:08060482188">08060482188</a></p>
          </div>
          <div className="info-block">
            <strong>Email:</strong>
            <p><a href="mailto:banjiolu@gmail.com">banjiolu@gmail.com</a></p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2026 Olubanji Global Services. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App