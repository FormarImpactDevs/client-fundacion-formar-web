import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { HomeEcommerce } from "../pages/HomeEcommerce";
import { Admin } from "../pages/Admin";
import { FormEnterpriseCreate } from "../components/FormsEnterprise/FormEnterpriseCreate";
import { FormEnterpriseEdit } from "../components/FormsEnterprise/FormEnterpriseEdit";
import { EnterprisesList } from "../views/EnterprisesList";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
