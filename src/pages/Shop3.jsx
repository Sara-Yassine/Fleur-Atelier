import { Pagination } from './Shop1'

export default function Shop3() {
  return (
    <div>
      <div className="pink">
        <h1 className="ok">Birthday Flowers</h1>
        <p className="beautiful">Bright flowers for unforgettable birthdays</p>
      </div>
      <div className="A">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/birth1.jpg`} className="birth1" alt="" />
          <div>
            <h1 className="flow">Birthday Bloom</h1>
            <h1 className="price">$44.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/birth2.jpg`} className="birth2" alt="" />
          <div>
            <h1 className="flow">Birthday Bliss</h1>
            <h1 className="price">$51.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/sunny.jpg`} className="sunny" alt="" />
          <div>
            <h1 className="flow">Sunny Birthday</h1>
            <h1 className="price">$47.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="B">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/dream.jpg`} className="dream" alt="" />
          <div>
            <h1 className="flow">Pink Dream</h1>
            <h1 className="price">$59.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/celebration.jpg`} className="celebration" alt="" />
          <div>
            <h1 className="flow">Celebration</h1>
            <h1 className="price">$49.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/surprise.jpg`} className="surprise" alt="" />
          <div>
            <h1 className="flow">Surprise Box</h1>
            <h1 className="price">$74.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="C">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/teddy.jpg`} className="teddy" alt="" />
          <div>
            <h1 className="flow">Bloom &amp; Teddy Set</h1>
            <h1 className="price">$79.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/cheers.jpg`} className="cheers" alt="" />
          <div>
            <h1 className="flow">Cheerful Blooms</h1>
            <h1 className="price">$41.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/sweet.jpg`} className="sweet" alt="" />
          <div>
            <h1 className="flow">Sweet Celebration</h1>
            <h1 className="price">$54.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <Pagination active={3} />
    </div>
  )
}
