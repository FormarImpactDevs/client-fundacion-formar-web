import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { HomeEcommerce } from '../pages/HomeEcommerce'
import LoginEcommerce from '../pages/LoginEcommerce'
import {Admin} from '../pages/Admin'
import { ProtectedRoute } from "./ProtectedRoute";
import { ProductDetail } from '../pages/ProductDetail'


export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path="/" element={<ProtectedRoute />}></Route>
            <Route path='/products' element={<HomeEcommerce />} /> 
            <Route path='/product/:id' element={<ProductDetail />} /> 
            <Route path='/admin/login' element={<LoginEcommerce />} /> 
            <Route path="/admin" element={<Admin />} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
  )
}
  