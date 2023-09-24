import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { HomeEcommerce } from "../pages/HomeEcommerce";
import { Admin } from "../pages/Admin";
import { FormCategoryCreate } from "../components/FormsCategory/FormCategoryCreate";
import { FormCategoryEdit } from "../components/FormsCategory/FormCategoryEdit";
import { EnterprisesList } from "../views/EnterprisesList";
import { CategoriesList } from "../views/CategoriesList";
import { FormCreate } from "../views/Enterprises/FormCreate";
import { FormUpdate } from "../views/Enterprises/FormUdate";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<HomeEcommerce />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/enterprises" element={<EnterprisesList />} />
        <Route
          path="/admin/enterprises/create"
          element={<FormCreate/>}
        />
        <Route
          path="/admin/enterprises/edit/:id"
          element={<FormUpdate />}
        />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/category/create" element={<FormCategoryCreate />} />
        <Route path="/admin/category/edit/:id" element={<FormCategoryEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router> 
  );
}
  