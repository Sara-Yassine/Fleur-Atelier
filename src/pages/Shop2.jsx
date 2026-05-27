import { Pagination } from './Shop1'

export default function Shop2() {
  return (
    <div className="shop2-page">
      <div className="pink">
        <h1 className="shop1">Romantic</h1>
        <p className="shop2">Bouquets for Lovers</p>
      </div>
      <div className="A">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/enchanted.jpg`} className="enchanted" alt="" />
          <div>
            <h1 className="flow">Enchanted</h1>
            <h1 className="price">$89.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/passionate.jpg`} className="passionate" alt="" />
          <div>
            <h1 className="flow">Passionate</h1>
            <h1 className="price">$74.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/nights.jpg`} className="nights" alt="" />
          <div>
            <h1 className="flow">Velvet Nights</h1>
            <h1 className="price">$99.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="B">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/sweetest.jpg`} className="sweetest" alt="" />
          <div>
            <h1 className="flow">Sweetest Devotion</h1>
            <h1 className="price">$69.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/eternal.jpg`} className="eternal" alt="" />
          <div>
            <h1 className="flow">Eternal Flame Box</h1>
            <h1 className="price">$109.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/pure.jpg`} className="pure" alt="" />
          <div>
            <h1 className="flow">Pure Love</h1>
            <h1 className="price">$84.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="C">
        <div className="classic">
          <img src={`${import.meta.env.BASE_URL}images/secret.jpg`} className="secret" alt="" />
          <div>
            <h1 className="flow">Secret Garden</h1>
            <h1 className="price">$64.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic1">
          <img src={`${import.meta.env.BASE_URL}images/love.jpg`} className="love" alt="" />
          <div>
            <h1 className="flow">Amethyst Love</h1>
            <h1 className="price">$79.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
        <div className="classic2">
          <img src={`${import.meta.env.BASE_URL}images/wishes.jpg`} className="wishes" alt="" />
          <div>
            <h1 className="flow">Heartfelt Wishes</h1>
            <h1 className="price">$94.99</h1>
            <button className="add">Add to Cart</button>
          </div>
        </div>
      </div>
      <Pagination active={2} />
    </div>
  )
}
