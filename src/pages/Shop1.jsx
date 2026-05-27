import { Link } from 'react-router-dom'

export default function Shop1() {
  return (
    <div className="shop1-page">
      <div className="pink">
        <h1 className="shop1">Roses</h1>
        <p className="shop2">Beautiful Rose Bouquets</p>
      </div>
      <div className="A">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/classic.jpg`} className="classics" alt="" />
          <div>
            <h1 className="flow">Classic Red Roses</h1>
            <h1 className="price">$59.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/red.jpg`} className="reds" alt="" />
          <div>
            <h1 className="flow">Pink &amp; Red Roses</h1>
            <h1 className="price">$64.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/white.jpg`} className="whites" alt="" />
          <div>
            <h1 className="flow">White Roses</h1>
            <h1 className="price">$54.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="B">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/pinky.jpg`} className="pinkys" alt="" />
          <div>
            <h1 className="flow">Pink Rose Bouquet</h1>
            <h1 className="price">$55.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/luxury.jpg`} className="luxurys" alt="" />
          <div>
            <h1 className="flow">Luxury Red Rose</h1>
            <h1 className="price">$79.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/whity.jpg`} className="whitys" alt="" />
          <div>
            <h1 className="flow">Red &amp; White Roses</h1>
            <h1 className="price">$79.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="C">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/velvet.jpg`} className="velvets" alt="" />
          <div>
            <h1 className="flow">Red &amp; White Roses</h1>
            <h1 className="price">$69.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/lavender.jpg`} className="lavenders" alt="" />
          <div>
            <h1 className="flow">Lavender &amp; Roses</h1>
            <h1 className="price">$62.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/dozen.jpg`} className="dozens" alt="" />
          <div>
            <h1 className="flow">Red Dozen</h1>
            <h1 className="price">$49.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <Pagination active={1} />
    </div>
  )
}

export function Pagination({ active }) {
  return (
    <div className="page">
      {[1, 2, 3, 4, 5].map(n => (
        <div key={n} className={active === n ? (n === 4 ? 'pagination4' : n === 5 ? 'pagination5' : 'pagination') : 'pagination'}>
          <Link to={`/shop/${n}`}>{n}</Link>
        </div>
      ))}
    </div>
  )
}
