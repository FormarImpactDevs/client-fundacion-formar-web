import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { HomeEcommerce } from "../pages/HomeEcommerce";
import { Admin } from "../pages/Admin";
import { FormEnterpriseCreate } from "../components/FormsEnterprise/FormEnterpriseCreate";
import { FormEnterpriseEdit } from "../components/FormsEnterprise/FormEnterpriseEdit";
import { FormCategoryCreate } from "../components/FormsCategory/FormCategoryCreate";
import { FormCategoryEdit } from "../components/FormsCategory/FormCategoryEdit";
import { EnterprisesList } from "../views/EnterprisesList";
import { CategoriesList } from "../views/CategoriesList";

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
          element={<FormEnterpriseCreate />}
        />
        <Route
          path="/admin/enterprises/edit/:id"
          element={<FormEnterpriseEdit />}
        />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/category/create" element={<FormCategoryCreate />} />
        <Route path="/admin/categories/edit/:id" element={<FormCategoryEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
