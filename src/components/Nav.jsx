import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul className="nav-left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop/1">Shop</Link></li>
        <li><Link to="/occasions">Occasions</Link></li>
        <li><Link to="/best-sellers">Best Sellers</Link></li>
        <li><Link to="/custom-bouquet">Custom Bouquet</Link></li>
      </ul>
      <ul className="nav-right">
        <div className="s1">
          <img src={`${import.meta.env.BASE_URL}images/search.jpg`} className="search" alt="" />
          <h1 className="search1">Search</h1>
          <div className="vertical-line"></div>
        </div>
        <div className="s2">
          <img src={`${import.meta.env.BASE_URL}images/account.jpg`} className="account" alt="" />
          <h1 className="account1">Account</h1>
          <div className="vertical-line"></div>
        </div>
        <div className="s3">
          <img src={`${import.meta.env.BASE_URL}images/cart.jpg`} className="cart" alt="" />
          <h1 className="cart1">Cart</h1>
          <div className="vertical-line"></div>
        </div>
      </ul>
    </nav>
  )
}
