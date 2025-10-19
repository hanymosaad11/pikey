import BestSeller from "./BestSeller";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <section className="best-seller">
      {/* ---------- Banner Grid ---------- */}
      <div className="banner-grid">
        {/* Left Big Banner */}
        <div className="banner-left ">
          <img src="/img/man.png" alt="Men Style" className="banner-img" />
          <div className="banner-content ">
            <p className="banner-subtitle">New Arrivals</p>
            <h2 className="banner-title">Men’s Style</h2>
            <button className="shop-btn">SHOP NOW</button>
          </div>
        </div>

        {/* Right Banners */}
        <div className="banner-right ">
          <div className="banner-top ">
            <div className="banner-small ">
              <span className="discount-badge">12% OFF</span>
              <h3 className="banner-text">Socks</h3>
              <img src="/img/scoks.png" alt="Socks" />
            </div>
            <div className="banner-small ">
              <span className="discount-badge">20% OFF</span>
              <h3 className="banner-text">Shoes</h3>
              <img src="/img/scoks.png" alt="Shoes" />
            </div>
          </div>

          <div className="banner-wide ">
            <span className="discount-badge">15% OFF</span>
            <img src="/img/scoks.png" alt="Cap" />
          </div>
        </div>
      </div>

      <BestSeller />
    </section>
  );
};

export default PromoSection;
