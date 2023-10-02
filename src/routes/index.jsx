import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { HomeEcommerce } from '../pages/HomeEcommerce'
import LoginEcommerce from '../pages/LoginEcommerce'


export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/products' element={<HomeEcommerce />} /> 
            <Route path='/admin/login' element={<LoginEcommerce />} /> 
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
  )
}
  