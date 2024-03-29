import { useState } from 'react'
import { 
  createRoutesFromElements, 
  RouterProvider , 
  createBrowserRouter, 
  Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as vansLoader} from './pages/Vans'
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

import Error from './components/Error'
import Login from './pages/Login'


/* New routers from v6.4 Data APIs */
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="login"
          element={<Login />}
        />
        <Route 
          path='vans' 
          element={<Vans />} 
          loader={vansLoader}
          />
          
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
))

function App() {
  
  return (
   <RouterProvider router={router} />
  )
}

export default App
