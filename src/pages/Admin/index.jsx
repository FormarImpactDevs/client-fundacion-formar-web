import { MainLayout } from "../../layout";
import "../../components/Axes/_axes.scss";
import Title from "../../components/Title";
import ButtonWhitImage from "../../components/ButtonWhitImage";
import img from "../../assets/admin/fondo.png";

export const Admin = () => {
  const images = [
    {
      url: img,
      title: "Emprendimientos",
      width: "45%",
      rute: "/admin/enterprises",
    },
    {
      url: img,
      title: "Productos",
      width: "45%",
      rute: "/admin/products",
    },
    {
      url: img,
      title: "Categorías",
      width: "45%",
      rute: "/admin/categories",
    },
    {
      url: img,
      title: "Pedidos",
      width: "45%",
      rute: "/admin/orders",
    },
    {
      url: img,
      title: "Puntos de retiro",
      width: "91%",
      rute: "/admin/points",
    },
  ];

  return (
    <>
      <MainLayout>
        <Title text="Consola de administrador" />
        <ButtonWhitImage images={images} />
      </MainLayout>
    </>
  );
};
