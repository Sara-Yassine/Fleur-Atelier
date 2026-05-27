export default function Footer() {
  return (
    <div className="fleur">
      <div className="co">
        <h1 className="fleurs">Fleur Atelier</h1>
        <img src={`${import.meta.env.BASE_URL}images/twitter.jpg`} className="twitter" alt="" />
        <img src={`${import.meta.env.BASE_URL}images/facebook.jpg`} className="facebook" alt="" />
        <img src={`${import.meta.env.BASE_URL}images/insta.jpg`} className="insta" alt="" />
      </div>
      <div className="link">
        <div className="space">
          <h1 className="quick">Quick Links</h1>
          <h1 className="about">About Us</h1>
          <h1 className="shopy">Shop Flowers</h1>
          <h1 className="care">Care Tips</h1>
          <h1 className="contact">Contact</h1>
        </div>
        <div className="vertical-line1"></div>
        <div className="space">
          <h1 className="cs">Customer Service</h1>
          <h1 className="faq">FAQ</h1>
          <h1 className="ship">Shipping information</h1>
          <h1 className="return">Returns &amp; Refunds</h1>
          <h1 className="order">Order Tracking</h1>
          <h1 className="term">Terms &amp; Conditions</h1>
        </div>
        <div className="vertical-line2"></div>
        <div className="space">
          <h1 className="sf">Shop Flowers</h1>
          <h1 className="anniv">Roses</h1>
          <h1 className="vol">Romantic Bouquets</h1>
          <h1 className="well">Birthday Flowers</h1>
          <h1 className="sympa">Sunflowers</h1>
          <h1 className="arr">Sympathy</h1>
        </div>
        <div className="vertical-line3"></div>
        <div className="space">
          <h1 className="news">Join Our NewsLetter</h1>
          <p className="up">Sign up for exclusive offers &amp; floral tips!</p>
          <div className="subscribe-box">
            <input type="email" id="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
          <div className="phone">
            <div className="addition1">
              <span className="tele">📞</span>
              <p className="para">+1 (800) 123-4567</p>
            </div>
            <div className="addition1">
              <span className="env">💌</span>
              <p className="para">info@bloomandco.com</p>
            </div>
            <div className="addition1">
              <span className="loc">📍</span>
              <p className="para">123 Flower St,BloomVille, NY 12401</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
