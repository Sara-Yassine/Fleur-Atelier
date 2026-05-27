import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="fresh">Fresh Flowers</h1>
        <h1 className="fresh1">for Every Occasion</h1>
        <p className="beautiful">Beautiful Bouquets Delivered to Your Door</p>
        <Link to="/shop/1" className="shop">Shop Now</Link>
      </section>
      <h1 className="category">Shop by Category</h1>
      <p className="browse">Browse our beautiful floral collections</p>
      <div className="group1">
        <div className="one">
          <img src={`${import.meta.env.BASE_URL}images/roses.jpg`} className="roses" alt="" />
          <h1 className="rose">ROSES</h1>
        </div>
        <div className="one">
          <img src={`${import.meta.env.BASE_URL}images/romantics.jpg`} className="romantics" alt="" />
          <h1 className="romantic1">ROMANTIC</h1>
          <h1 className="romantic2">BOUQUETS</h1>
        </div>
        <div className="one">
          <img src={`${import.meta.env.BASE_URL}images/birthday.jpg`} className="birthdays" alt="" />
          <h1 className="birthday1">BIRTHDAY</h1>
          <h1 className="birthday2">FLOWERS</h1>
        </div>
      </div>
      <div className="group2">
        <div className="one">
          <img src={`${import.meta.env.BASE_URL}images/sunflower.jpg`} className="sunflowers" alt="" />
          <h1 className="sunflower">SUNFLOWERS</h1>
        </div>
        <div className="one">
          <img src={`${import.meta.env.BASE_URL}images/sympathy.jpg`} className="sympathys" alt="" />
          <h1 className="sympathy">SYMPATHY</h1>
        </div>
      </div>
      <h1 className="seller">Best Sellers</h1>
      <p className="loved">Our Most Loved Bouquets</p>
      <div className="sell">
        <div className="sell1">
          <img src={`${import.meta.env.BASE_URL}images/rosee.jpg`} className="rosee" alt="" />
          <h1 className="deal">Red Velvet</h1>
          <h1 className="price3">$85.99</h1>
          <button className="add3">Add to Cart</button>
        </div>
        <div className="sell1">
          <img src={`${import.meta.env.BASE_URL}images/romanticc.jpg`} className="romanticc" alt="" />
          <h1 className="deal">Romantic</h1>
          <h1 className="price3">$44.99</h1>
          <button className="add3">Add to Cart</button>
        </div>
        <div className="sell1">
          <img src={`${import.meta.env.BASE_URL}images/birthdayy.jpg`} className="birthdayy" alt="" />
          <h1 className="deal">Birthday Bliss</h1>
          <h1 className="price3">$65.99</h1>
          <button className="add3">Add to Cart</button>
        </div>
      </div>
      <div className="selll">
        <div className="sell1">
          <img src={`${import.meta.env.BASE_URL}images/sunflowerr.jpg`} className="sunflowerr" alt="" />
          <h1 className="deal">Golden Glow</h1>
          <h1 className="price3">$85.99</h1>
          <button className="add3">Add to Cart</button>
        </div>
        <div className="sell1">
          <img src={`${import.meta.env.BASE_URL}images/puree.jpg`} className="puree" alt="" />
          <h1 className="deal">Pure Sympathy</h1>
          <h1 className="price3">$44.99</h1>
          <button className="add3">Add to Cart</button>
        </div>
      </div>
      <div className="back">
        <h1 className="why">Why Choose Us?</h1>
        <hr className="line" />
        <div className="play">
          <div>
            <img src={`${import.meta.env.BASE_URL}images/day.jpg`} className="day" alt="" />
            <h1 className="text">Same-Day Delivery</h1>
            <hr className="line1" />
            <h1 className="text1">Fast &amp; reliable service</h1>
          </div>
          <div className="fun">
            <img src={`${import.meta.env.BASE_URL}images/green.jpg`} className="green" alt="" />
            <h1 className="text">Fresh Flowers</h1>
            <hr className="line1" />
            <h1 className="text1">Handpicked &amp; beautiful</h1>
          </div>
          <div className="fun1">
            <img src={`${import.meta.env.BASE_URL}images/secure.jpg`} className="secure" alt="" />
            <h1 className="text">Secure Payment</h1>
            <hr className="line1" />
            <h1 className="text1">Safe &amp; trusted checkout</h1>
          </div>
          <div className="fun1">
            <img src={`${import.meta.env.BASE_URL}images/lovely.jpg`} className="lovely" alt="" />
            <h1 className="text">Lovely Packaging</h1>
            <hr className="line1" />
            <h1 className="text1">Beautifully wrapped gifts</h1>
          </div>
        </div>
        <hr className="line2" />
        <h1 className="customer">Our customers love us !</h1>
        <hr className="line3" />
        <p className="and">"The flowers were stunning and delivered so quickly!</p>
        <p className="and">Highly recommend!"</p>
        <span className="stars">⭐⭐⭐⭐⭐</span>
      </div>
      <Footer />
    </>
  )
}
