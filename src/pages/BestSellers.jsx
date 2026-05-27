import { useState, useMemo } from 'react'

const ITEMS = [
  { img: 'ever1', cls: 'ever1', title: 'Everlasting Love',  price: '$69.99', cat: 'Romantic Bouquets' },
  { img: 'ever2', cls: 'ever2', title: 'Classic Red',       price: '$79.99', cat: 'Roses' },
  { img: 'ever3', cls: 'ever3', title: 'Sunshine Radiance', price: '$59.99', cat: 'Sunflowers' },
  { img: 'ever4', cls: 'ever4', title: 'Birthday Bliss',    price: '$64.99', cat: 'Birthday Flowers' },
  { img: 'ever5', cls: 'ever5', title: 'Peaceful Grace',    price: '$74.99', cat: 'Sympathy' },
]

const FILTERS = ['All Best Sellers', 'Roses', 'Romantic Bouquets', 'Birthday Flowers', 'Sunflowers', 'Sympathy']

const FEATURES = [
  { emoji: '🌼', cls: 'pro1', t1: 'Fresh & Handpicked', t2: 'Quality flowers, always.' },
  { emoji: '🚚', cls: 'pro1', t1: 'Same-Day Delivery',  t2: 'Flowers delivered with care.' },
  { emoji: '💳', cls: 'pro2', t1: 'Secure Payments',    t2: 'Safe & trusted checkout.' },
  { emoji: '💟', cls: 'pro3', t1: '100% Satisfaction',  t2: "We're here to make you smile." },
]

export default function BestSellers() {
  const [filter, setFilter] = useState('All Best Sellers')

  const visible = useMemo(
    () => (filter === 'All Best Sellers' ? ITEMS : ITEMS.filter(i => i.cat === filter)),
    [filter]
  )

  return (
    <div className="best-sellers-page">
      <div className="most">
        <h1 className="road">Best Sellers</h1>
        <p className="chosen">Our most loved bouquets, chosen by you. <span className="emoji">💖</span></p>
      </div>
      <h1 className="selling">Shop Our Best Sellers</h1>
      <div className="earn">
        <hr className="expiry" />
        <span className="void">🌺</span>
        <hr className="expiry1" />
      </div>
      <p className="pick">Handpicked favorites that make every moment extra special.</p>

      <div className="bs-filters">
        {FILTERS.map(b => (
          <button
            key={b}
            type="button"
            className={`bs-chip ${filter === b ? 'bs-chip--active' : ''}`}
            onClick={() => setFilter(b)}
            aria-pressed={filter === b}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="wear">
        {visible.length === 0 ? (
          <p className="empty-state">No bouquets in this category yet.</p>
        ) : (
          visible.map(it => (
            <div key={it.img} className="bring">
              <img src={`${import.meta.env.BASE_URL}images/${it.img}.jpg`} className={it.cls} alt={it.title} />
              <h1 className="in">{it.title}</h1>
              <h1 className="in">{it.price}</h1>
              <button className="help1" type="button">Add to Cart</button>
            </div>
          ))
        )}
      </div>

      <hr className="section-line" />
      <div className="happy">
        {FEATURES.map((f, i) => (
          <div key={i} className="great">
            <span className={f.cls}>{f.emoji}</span>
            <div>
              <h1 className="main">{f.t1}</h1>
              <h1 className="always">{f.t2}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
