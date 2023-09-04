import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { HomeEcommerce } from '../pages/HomeEcommerce'


export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/products' element={<HomeEcommerce />} /> 
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
  )
}
