import { Link } from 'react-router-dom'

export default function Occasions() {
  return (
    <div className="occasions-page">
      <div className="occ">
        <h1 className="flower1">Flowers for</h1>
        <h1 className="every">Every Occasion</h1>
        <p className="celeb">Wether it's a celebration, a</p>
        <p className="celeb">thank you, or a moment of comfort,</p>
        <p className="celeb">we have the perfect flowers</p>
        <p className="celeb">to express what words cannot.</p>
      </div>
      <div className="high">
        <h1 className="explore">EXPLORE BY OCCASIONS</h1>
        <span className="low">🌸</span>
      </div>
      <div className="rom">
        {[
          { img: 'rom1', cls: 'rom1', title: 'Romance', lines: ['Celebrate love and', 'create unforgettable', 'moments.'] },
          { img: 'rom2', cls: 'rom2', title: 'Birthday', lines: ['Make their day extra', 'special with beautiful', 'birthday flowers.'] },
          { img: 'rom3', cls: 'rom3', title: 'Sympathy', lines: ['Send comfort and', 'express your deepest', 'condolences.'] },
          { img: 'rom4', cls: 'rom4', title: 'Congratualtions', lines: ['Celebrate achievements', "and life's special", 'milestones.'] },
          { img: 'rom5', cls: 'rom5', title: 'Get Well Soon', lines: ['Brighten their day and', 'send your warmest', 'wishes.'] },
          { img: 'rom6', cls: 'rom6', title: 'Thank You', lines: ['Show your appreciation', 'and say thank you', 'beautifully.'] },
        ].map((c, i) => (
          <div key={c.img} className={i === 0 ? 'Rom' : 'Rom1'}>
            <img src={`${import.meta.env.BASE_URL}images/${c.img}.jpg`} className={c.cls} alt="" />
            <div>
              <h1 className="point">{c.title}</h1>
              {c.lines.map((l, j) => <p key={j} className="for">{l}</p>)}
              <button className="no">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <h1 className="not">NOT SURE WHAT TO SEND?</h1>
      <p className="let">Let us help you choose the perfect flowers for any occasion.</p>
      <div className="please">
        <div>
          <span className="see1">💐</span>
          <h1 className="tell">Tell us the occasion</h1>
          <h1 className="tell">and recipient</h1>
        </div>
        <div className="vertical-line1"></div>
        <div className="hey">
          <span className="see2">🌻</span>
          <h1 className="tell">We'll suggest the</h1>
          <h1 className="tell">perfect arrangement</h1>
        </div>
        <div className="vertical-line1"></div>
        <div className="hey">
          <span className="see3">🌷</span>
          <h1 className="tell">Handcrafted with</h1>
          <h1 className="tell">care &amp; love</h1>
        </div>
        <div className="vertical-line1"></div>
        <div className="hey">
          <span className="see4">🚚</span>
          <h1 className="tell">Delivered fresh</h1>
          <h1 className="tell">to their door</h1>
        </div>
      </div>
      <div className="help-wrap">
        <Link to="/custom-bouquet" className="help">HELP ME CHOOSE</Link>
      </div>
      <div className="mean">
        <div className="easy">
          <h1 className="need">NEED MORE INSPIRATION ?</h1>
          <h1 className="make">Make Every Moment</h1>
          <h1 className="make">More Meaningful</h1>
          <p className="our">Explore our handpicked arrangements</p>
          <p className="our">for life's beautiful moments.</p>
          <button className="all">SHOP ALL COLLECTIONS</button>
        </div>
      </div>
    </div>
  )
}
