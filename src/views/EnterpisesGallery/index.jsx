import { useEnterprises } from "../../hooks/enterprise/useEnterprise";
import GalleryImages from "../../components/GalleryImages";
import Title from "../../components/Title";

const EnterpisesGallery = () => {
  const { enterprises } = useEnterprises();

  return (
    <section className="container pt-5">
      <Title text={"Conocé los emprendimientos que acompañamos"} />
      <GalleryImages array={enterprises} />
    </section>
  );
};

export default EnterpisesGallery;
