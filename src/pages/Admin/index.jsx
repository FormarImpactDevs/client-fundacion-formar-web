import { MainLayout } from "../../layout";
import { Link } from "react-router-dom";
//import { EnterprisesList } from "../../views/EnterprisesList";

export const Admin = () => {
  return (
    <>
      <MainLayout>
        <h1>Consola de administrador</h1>
        <Link to="/admin/enterprises">Lista de emprendimientos</Link> 
        <br/>
        <Link to="/admin/categories">Lista de categorías</Link>
      </MainLayout>
    </>
  );
};
