import { MainLayout } from "../../layout";
import "../../components/Axes/_axes.scss";
import Title from "../../components/Title";
import ButtonWhitImage from "../../components/ButtonWhitImage";
//import { EnterprisesList } from "../../views/EnterprisesList";
import img from "../../assets/admin/fondo.png"
/* import presentation from "../../assets/presentation2.jpeg"; */

export const Admin = () => {

  const images = [
    {
      url: img,
      title: 'Emprendimientos',
      width: '45%',
      rute: '/admin/enterprises'
    },
    {
      url: img,
      title: 'Productos',
      width: '45%',
      rute: '/admin/'
    },
    {
      url: img,
      title: 'Categorías',
      width: '45%',
      rute: '/admin/categories'
    },
    {
      url: img,
      title: 'Usuarios',
      width: '45%',
      rute: '/admin/'
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
