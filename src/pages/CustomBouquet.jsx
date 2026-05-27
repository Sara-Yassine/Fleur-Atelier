import { useState, useMemo } from 'react'

const CATS = [
  { id: 'row1', img: 'row1', preview: 'roses',     name: 'Roses',             basePrice: 85 },
  { id: 'row2', img: 'row2', preview: 'romantics', name: 'Romantic Bouquets', basePrice: 95 },
  { id: 'row3', img: 'row3', preview: 'birthday',  name: 'Birthday Flowers',  basePrice: 75 },
  { id: 'row4', img: 'row4', preview: 'sunflower', name: 'Sunflowers',        basePrice: 65 },
  { id: 'row5', img: 'row5', preview: 'sympathy',  name: 'Sympathy',          basePrice: 70 },
]

const ADDONS = [
  { id: 'vase',   img: 'vase',   name: 'Vase',          price: 12.00 },
  { id: 'wrap',   img: 'wrap',   name: 'Premium Wrap',  price:  6.00 },
  { id: 'ribbon', img: 'ribbon', name: 'Ribbon',        price:  3.00 },
  { id: 'greet',  img: 'greet',  name: 'Greeting Card', price:  2.50 },
]

const money = n => `$${n.toFixed(2)}`

export default function CustomBouquet() {
  const [catId, setCatId] = useState('row1')
  const [selected, setSelected] = useState({ vase: true, ribbon: true })

  const cat = useMemo(() => CATS.find(c => c.id === catId), [catId])
  const addonsTotal = useMemo(
    () => ADDONS.filter(a => selected[a.id]).reduce((s, a) => s + a.price, 0),
    [selected]
  )
  const subtotal = cat.basePrice + addonsTotal

  const toggleAddon = id => setSelected(s => ({ ...s, [id]: !s[id] }))

  return (
    <div className="custom-bouquet-page">
      <div className="custom">
        <h1 className="brave1">Custom Bouquet</h1>
        <h1 className="brave2">Your flowers, your way.<span>💖</span></h1>
        <p className="brave3">Create a one-of-a-kind bouquet that's perfect</p>
        <p className="brave3">for any moment.</p>
      </div>

      <h1 className="perfect">Build Your Perfect Bouquet</h1>
      <div className="earn1 expiry-divider">
        <hr className="expiry2" />
        <span className="void">🌺</span>
        <hr className="expiry3" />
      </div>

      <div className="fast">
        {/* Step 1: category */}
        <div className="smart">
          <h1 className="car">1. Choose a Category</h1>
          <p className="full">Pick a style to get started.</p>
          {CATS.map(c => (
            <button
              key={c.id}
              type="button"
              className={`gigi ${catId === c.id ? 'gigi--active' : ''}`}
              onClick={() => setCatId(c.id)}
              aria-pressed={catId === c.id}
            >
              <img src={`${import.meta.env.BASE_URL}images/${c.img}.jpg`} className={c.img} alt={c.name} />
              <span className="app">{c.name}</span>
              <span className="gigi-price">{money(c.basePrice)}</span>
            </button>
          ))}
        </div>

        {/* Step 2: preview + totals */}
        <div className="random">
          <div className="pre">
            <div className="follow">
              <span className="n2">2.</span>
              <span className="eye">👁️</span>
              <span className="borrow">Your Bouquet Preview</span>
            </div>
            <p className="wash2">This is how your bouquet looks</p>
            <div className="preview-img-wrap">
              <img
                src={`${import.meta.env.BASE_URL}images/${cat.preview}.jpg`}
                alt={cat.name}
                className="preview-img"
              />
              <span className="preview-tag">{cat.name}</span>
            </div>
          </div>
          <div className="head">
            <div className="uni">
              <span className="rot1">Flowers ({cat.name})</span>
              <span className="rot2">{money(cat.basePrice)}</span>
            </div>
            <div className="uni">
              <span className="rot1">Add-ons</span>
              <span className="rot2">{money(addonsTotal)}</span>
            </div>
            <hr className="crazy" />
            <div className="tot">
              <span className="everything">Total</span>
              <span className="less">{money(subtotal)}</span>
            </div>
            <button className="out" type="button">Review &amp; Checkout</button>
          </div>
        </div>

        {/* Step 3: addons */}
        <div className="finish">
          <h1 className="touch">3. Add Finishing Touches (Optional)</h1>
          <p className="extra">Make your bouquet extra special</p>
          <div className="serious">
            {ADDONS.map(a => {
              const on = !!selected[a.id]
              return (
                <label
                  key={a.id}
                  className={`addon ${on ? 'addon--on' : ''}`}
                >
                  <img src={`${import.meta.env.BASE_URL}images/${a.img}.jpg`} className="addon-img" alt={a.name} />
                  <div className="why1">
                    <div className="way1">
                      <span className="v1">{a.name}</span>
                      <span className="v2">{money(a.price)}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggleAddon(a.id)}
                      className="addon-check"
                    />
                  </div>
                </label>
              )
            })}
          </div>
        </div>
      </div>

      <div className="expert">
        <div className="be">
          <span className="shine">✨</span>
          <div className="byebye">
            <h1 className="welc1">Need help creating your bouquet ?</h1>
            <p className="welc2">Our floral experts are here for you.</p>
          </div>
          <div>
            <button className="chat" type="button">
              <span className="chat1">💬</span>Chat with Us
            </button>
          </div>
        </div>
      </div>

      <div className="candy" />
      <div className="hope">
        <span className="shape1">💕</span>
        <h1 className="unique">Your story. Your flowers. Uniquely yours.</h1>
        <span className="shape2">💕</span>
      </div>
    </div>
  )
}
