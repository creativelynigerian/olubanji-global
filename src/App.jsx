import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* HEADER / NAVIGATION */}
      <header className="navbar">
        <h1 className="logo">Olubanji Global</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <h2>Explore the World with Olubanji Global</h2>
        <p>Your trusted partner for unforgettable tours, flights, and visa assistance.</p>
        <button className="cta-button">Book Your Next Trip</button>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Flight Booking</h3>
            <p>Get the best deals on local and international flights.</p>
          </div>
          <div className="service-card">
            <h3>Hotel Reservations</h3>
            <p>Comfortable and luxury stays wherever you go.</p>
          </div>
          <div className="service-card">
            <h3>Tour Packages</h3>
            <p>Curated experiences for individuals and groups.</p>
          </div>
          <div className="service-card">
            <h3>Visa Assistance</h3>
            <p>Hassle-free visa processing for your dream destinations.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <h3>Olubanji Global</h3>
        <p>Email: info@olubanjiglobal.com | Phone: +234 000 000 0000</p>
        <p>&copy; 2024 Olubanji Global. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App