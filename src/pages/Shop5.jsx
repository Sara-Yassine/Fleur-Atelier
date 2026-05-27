import { Pagination } from './Shop1'

export default function Shop5() {
  return (
    <div className="shop5-page">
      <div className="path">
        <h1 className="ok2">Sympathy</h1>
        <p className="beautiful2">Flowers to express love, support, and remembrance</p>
      </div>
      <div className="A">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/peace.jpg`} className="peace" alt="" />
          <div>
            <h1 className="flow2">White Peace Lily</h1>
            <h1 className="price2">$69.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/blanche.jpg`} className="blanche" alt="" />
          <div>
            <h1 className="flow2">Pure White Roses</h1>
            <h1 className="price2">$95.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/soft.jpg`} className="soft" alt="" />
          <div>
            <h1 className="flow2">Soft Pastel</h1>
            <h1 className="price2">$120.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="B">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/orchid.jpg`} className="orchid" alt="" />
          <div>
            <h1 className="flow2">Elegant Orchid</h1>
            <h1 className="price2">$85.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/remember.jpg`} className="remember" alt="" />
          <div>
            <h1 className="flow2">Remembrance</h1>
            <h1 className="price2">$185.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/serenity.jpg`} className="serenity" alt="" />
          <div>
            <h1 className="flow2">Serenity Bouquet</h1>
            <h1 className="price2">$110.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="C">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/gentle.jpg`} className="gentle" alt="" />
          <div>
            <h1 className="flow2">White Tulips</h1>
            <h1 className="price2">$75.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/comfort.jpg`} className="comfort" alt="" />
          <div>
            <h1 className="flow2">Calm &amp; Comfort</h1>
            <h1 className="price2">$145.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/grace.jpg`} className="grace" alt="" />
          <div>
            <h1 className="flow2">Eternal Grace</h1>
            <h1 className="price2">$130.99</h1>
            <button className="add2">Add to Cart</button>
          </div>
        </div>
      </div>
      <Pagination active={5} />
    </div>
  )
}
