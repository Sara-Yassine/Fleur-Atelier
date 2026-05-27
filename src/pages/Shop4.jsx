import { Pagination } from './Shop1'

export default function Shop4() {
  return (
    <div className="shop4-page">
      <div className="purple1">
        <h1 className="ok1">Sunflowers</h1>
        <p className="beautiful1">Radiant sunflower Bouquets</p>
      </div>
      <div className="A">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/bunch.jpg`} className="bunch" alt="" />
          <div>
            <h1 className="flow1">Classic Sunny</h1>
            <h1 className="price1">$65.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/delph.jpg`} className="delph" alt="" />
          <div>
            <h1 className="flow1">Delphium Bliss</h1>
            <h1 className="price1">$80.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/golden.jpg`} className="golden" alt="" />
          <div>
            <h1 className="flow1">Golden Roses</h1>
            <h1 className="price1">$55.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="B">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/purple.jpg`} className="purple" alt="" />
          <div>
            <h1 className="flow1">Purple Pastel</h1>
            <h1 className="price1">$75.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/garden.jpg`} className="garden" alt="" />
          <div>
            <h1 className="flow1">Garden Basket</h1>
            <h1 className="price1">$90.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/sunsuprise.jpg`} className="sunsuprise" alt="" />
          <div>
            <h1 className="flow1">Surprise Box</h1>
            <h1 className="price1">$120.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="C">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/honey.jpg`} className="honey" alt="" />
          <div>
            <h1 className="flow1">Gift Set</h1>
            <h1 className="price1">$40.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/merry.jpg`} className="merry" alt="" />
          <div>
            <h1 className="flow1">Merry Bunch</h1>
            <h1 className="price1">$65.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/premium.jpg`} className="premium" alt="" />
          <div>
            <h1 className="flow1">Premium</h1>
            <h1 className="price1">$110.99</h1>
            <button className="add1">Add to Cart</button>
          </div>
        </div>
      </div>
      <Pagination active={4} />
    </div>
  )
}
