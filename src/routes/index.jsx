import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { HomeEcommerce } from "../pages/HomeEcommerce";
import { Admin } from "../pages/Admin";
import { ProtectedRoute } from "./ProtectedRoute";
import { EnterprisesList } from "../views/EnterprisesList";
import { CategoriesList } from "../views/CategoriesList";
import { FormCreate } from "../views/Enterprises/FormCreate";
import { FormUpdate } from "../views/Enterprises/FormUdate";
import { FormCategoryCreate } from "../pages/Admin/components/FormsCategory/FormCategoryCreate";
import { FormCategoryEdit } from "../pages/Admin/components/FormsCategory/FormCategoryEdit";
import { ProductsList } from "../views/ProductsList";
import { FormProductEdit } from "../pages/Admin/components/FormProducts/FormProductsEdit";
import { FormProductCreate } from "../pages/Admin/components/FormProducts/FormProductsCreate";
import LoginEcommerce from "../pages/LoginEcommerce";
import { OrdersList } from "../views/OrdersList";
import { FormUpdateOrder } from "../views/Orders/FormUpdateOrder";
import { ProductDetail } from "../pages/ProductDetail";
import CartPage from "../pages/Cart";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<HomeEcommerce />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
      <Route path="/mi-compra" element={<CartPage />} />
      <Route path="/login" element={<LoginEcommerce />} />
      <Route element={<ProtectedRoute />}>
        <Route index path="/admin" element={<Admin />} />
        <Route path="/admin/enterprises" element={<EnterprisesList />} />
        <Route path="/admin/enterprises/create" element={<FormCreate />} />
        <Route path="/admin/enterprises/edit/:id" element={<FormUpdate />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/category/create" element={<FormCategoryCreate />} />
        <Route path="/admin/category/edit/:id" element={<FormCategoryEdit />} />
        <Route path="/admin/products" element={<ProductsList />} />
        <Route path="/admin/products/create" element={<FormProductCreate />} />
        <Route path="/admin/products/edit/:id" element={<FormProductEdit />} />
        <Route path="/admin/orders" element={<OrdersList />} />
        <Route path="/admin/orders/edit/:orderNumber" element={<FormUpdateOrder />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
