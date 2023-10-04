import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { HomeEcommerce } from '../pages/HomeEcommerce'
import { EnterprisesEcommerce } from '../pages/EnterprisesEcommerce'


export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/products' element={<HomeEcommerce />} /> 
            <Route path='/enterprises' element={<EnterprisesEcommerce />} /> 
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
  )
}
