import { useState } from 'react'
import { BrowserRouter , Link, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/vanDetail'
import NotFound from './pages/NotFound'
import "./server"
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Hostvans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVansDetail'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'

import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VanDetail />} />
        
        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='vans' element={<Hostvans />} />
          <Route path='vans/:id' element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path='photos' element={<HostVanPhotos />} />
          </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
