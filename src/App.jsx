import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Shop1 from './pages/Shop1'
import Shop2 from './pages/Shop2'
import Shop3 from './pages/Shop3'
import Shop4 from './pages/Shop4'
import Shop5 from './pages/Shop5'
import Occasions from './pages/Occasions'
import BestSellers from './pages/BestSellers'
import CustomBouquet from './pages/CustomBouquet'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/1" element={<Shop1 />} />
        <Route path="/shop/2" element={<Shop2 />} />
        <Route path="/shop/3" element={<Shop3 />} />
        <Route path="/shop/4" element={<Shop4 />} />
        <Route path="/shop/5" element={<Shop5 />} />
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/custom-bouquet" element={<CustomBouquet />} />
      </Routes>
    </>
  )
}
