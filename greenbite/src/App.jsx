import "./index.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">GreenBite 🌱</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="cart-btn">🛒 Cart</button>
      </nav>


      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="small-title">
            FRESH • ORGANIC • NUTRITIOUS
          </p>

          <h1>
            Small Greens.
            <br />
            <span>Big Nutrition.</span>
          </h1>

          <p className="hero-description">
            Freshly harvested microgreens grown with care and
            delivered straight to your table.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Shop Microgreens
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://www.allthatgrows.in/cdn/shop/articles/Feat_image-6_microgreens_f719e522-6892-4219-ad5f-57771ba100ac.jpg?v=1746610459"
            alt="Fresh microgreens"
          />
        </div>
      </section>


      {/* WHY MICROGREENS */}
      <section className="why-section">
        <p className="section-label">
          WHY MICROGREENS?
        </p>

        <h2>Little Greens, Powerful Benefits</h2>

        <p className="section-description">
          Microgreens are young plants packed with essential
          nutrients, freshness and natural goodness.
        </p>

        <div className="benefits">

          <div className="benefit-card">
            <div className="icon">💪</div>
            <h3>Rich in Nutrients</h3>
            <p>
              Packed with vitamins, minerals and antioxidants.
            </p>
          </div>

          <div className="benefit-card">
            <div className="icon">🌱</div>
            <h3>Fresh & Natural</h3>
            <p>
              Freshly harvested and grown with care.
            </p>
          </div>

          <div className="benefit-card">
            <div className="icon">❤️</div>
            <h3>Healthy Living</h3>
            <p>
              An easy way to add more nutrition to your meals.
            </p>
          </div>

        </div>
      </section>


      {/* PRODUCTS */}
      <section className="products-section" id="shop">

        <p className="section-label">
          OUR PRODUCTS
        </p>

        <h2>Fresh From Our Farm</h2>

        <p className="section-description">
          Freshly harvested microgreens, grown naturally and
          delivered with care.
        </p>

        <div className="products">

          {/* BROCCOLI */}
          <div className="product-card">
            <img
              src="https://www.allthatgrows.in/cdn/shop/articles/broccoli-microgreens.jpg"
              alt="Broccoli microgreens"
            />

            <div className="product-info">
              <h3>Broccoli Microgreens</h3>
              <p>Fresh & nutritious</p>

              <div className="product-bottom">
                <strong>₹99 / 50g</strong>
                <button>+</button>
              </div>
            </div>
          </div>


          {/* RADISH */}
          <div className="product-card">
            <img
              src="https://www.allthatgrows.in/cdn/shop/articles/radish-microgreens.jpg"
              alt="Radish microgreens"
            />

            <div className="product-info">
              <h3>Radish Microgreens</h3>
              <p>Fresh & flavorful</p>

              <div className="product-bottom">
                <strong>₹89 / 50g</strong>
                <button>+</button>
              </div>
            </div>
          </div>


          {/* SUNFLOWER */}
          <div className="product-card">
            <img
              src="https://www.allthatgrows.in/cdn/shop/articles/sunflower-microgreens.jpg"
              alt="Sunflower microgreens"
            />

            <div className="product-info">
              <h3>Sunflower Microgreens</h3>
              <p>Fresh & crunchy</p>

              <div className="product-bottom">
                <strong>₹109 / 50g</strong>
                <button>+</button>
              </div>
            </div>
          </div>

        </div>

        <button className="view-btn">
          View All Microgreens →
        </button>

      </section>


      {/* HOW IT WORKS */}
      <section className="steps-section">

        <p className="section-label">
          HOW IT WORKS
        </p>

        <h2>From Our Farm to Your Table</h2>

        <div className="steps">

          <div className="step">
            <span>01</span>
            <h3>Choose</h3>
            <p>
              Pick your favorite fresh microgreens.
            </p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>We Harvest</h3>
            <p>
              We harvest your greens fresh at the right time.
            </p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>We Deliver</h3>
            <p>
              Fresh greens arrive at your doorstep.
            </p>
          </div>

        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="cta-section">

        <h2>
          Ready to Make Your Meals Greener?
        </h2>

        <p>
          Bring freshness and nutrition to your everyday meals.
        </p>

        <button className="primary-btn">
          Shop Now 🌱
        </button>

      </section>


      {/* FOOTER */}
      <footer id="contact">

        <div>
          <h3>GreenBite 🌱</h3>
          <p>Small Greens. Big Nutrition.</p>
        </div>

        <div>
          <p>Fresh • Healthy • Natural</p>
          <p>© 2026 GreenBite</p>
        </div>

      </footer>


      {/* PAGE STYLES */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .app {
          min-height: 100vh;
          background: #fffdf5;
        }


        /* NAVBAR */

        .navbar {
          height: 75px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          border-bottom: 1px solid #e8eee8;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #1b5e20;
        }

        .nav-links {
          display: flex;
          gap: 35px;
        }

        .nav-links a {
          text-decoration: none;
          color: #263238;
          font-weight: 500;
        }

        .cart-btn {
          border: none;
          background: #1b5e20;
          color: white;
          padding: 12px 22px;
          border-radius: 25px;
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
        }


        /* BUTTONS */

        .primary-btn {
          border: none;
          background: #1b5e20;
          color: white;
          padding: 13px 24px;
          border-radius: 25px;
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
        }

        .secondary-btn {
          padding: 12px 24px;
          border: 1px solid #2e7d32;
          background: transparent;
          color: #1b5e20;
          border-radius: 25px;
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
        }


        /* HERO */

        .hero {
          min-height: 600px;
          padding: 70px 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .hero-text {
          max-width: 570px;
        }

        .small-title,
        .section-label {
          color: #4f8f52;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .hero h1 {
          font-size: clamp(45px, 6vw, 75px);
          line-height: 1.05;
          color: #263238;
          margin: 15px 0;
        }

        .hero h1 span {
          color: #2e7d32;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.7;
          color: #60716a;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .hero-image {
          width: 48%;
        }

        .hero-image img {
          width: 100%;
          height: 470px;
          object-fit: cover;
          border-radius: 35px;
        }


        /* COMMON SECTIONS */

        .why-section,
        .products-section,
        .steps-section {
          padding: 90px 7%;
          text-align: center;
        }

        .why-section {
          background: #e8f5e9;
        }

        h2 {
          font-size: 38px;
          color: #263238;
          margin: 10px 0;
        }

        .section-description {
          max-width: 600px;
          margin: 15px auto 45px;
          color: #60716a;
          line-height: 1.7;
        }


        /* BENEFITS */

        .benefits,
        .products,
        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          max-width: 1100px;
          margin: 40px auto 0;
        }

        .benefit-card,
        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(27, 94, 32, 0.08);
        }

        .benefit-card {
          padding: 35px 25px;
        }

        .icon {
          font-size: 40px;
        }

        .benefit-card h3,
        .product-info h3 {
          color: #263238;
        }

        .benefit-card p,
        .product-info p,
        .step p {
          color: #718078;
          line-height: 1.6;
        }


        /* PRODUCTS */

        .product-card {
          text-align: left;
        }

        .product-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
        }

        .product-info {
          padding: 20px;
        }

        .product-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #1b5e20;
        }

        .product-bottom button {
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: #e8f5e9;
          color: #1b5e20;
          font-size: 22px;
          cursor: pointer;
        }

        .view-btn {
          margin-top: 40px;
          padding: 13px 25px;
          border: 1px solid #1b5e20;
          background: transparent;
          color: #1b5e20;
          border-radius: 25px;
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
        }


        /* STEPS */

        .steps-section {
          background: #f5f8f2;
        }

        .step {
          padding: 30px;
        }

        .step span {
          font-size: 35px;
          font-weight: 700;
          color: #66bb6a;
        }


        /* CTA */

        .cta-section {
          margin: 70px 7%;
          padding: 70px 30px;
          text-align: center;
          border-radius: 30px;
          background: #e8f5e9;
        }

        .cta-section p {
          color: #60716a;
          margin-bottom: 25px;
        }


        /* FOOTER */

        footer {
          padding: 45px 7%;
          display: flex;
          justify-content: space-between;
          background: #1b5e20;
          color: white;
        }

        footer h3 {
          font-size: 22px;
        }

        footer p {
          opacity: 0.85;
        }


        /* MOBILE */

        @media (max-width: 800px) {

          .nav-links {
            display: none;
          }

          .hero {
            flex-direction: column;
            padding-top: 45px;
          }

          .hero-image {
            width: 100%;
          }

          .hero-image img {
            height: 350px;
          }

          .benefits,
          .products,
          .steps {
            grid-template-columns: 1fr;
          }

          h2 {
            font-size: 30px;
          }

          footer {
            flex-direction: column;
            gap: 20px;
          }

        }

      `}</style>

    </div>
  );
}

export default App;