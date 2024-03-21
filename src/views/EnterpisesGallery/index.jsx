/* import { useContext } from "react"; */
/* import { useState, useEffect, useContext } from "react"; */
import GalleryImages from "../../components/GalleryImages";
/* import { EnterpriseContext } from "../../context/EnterpriseContext/EnterpriseContext"; */
import { useEffect, useState } from "react";
import { getEnterprisesService } from "../../services/enterprises.service";
import Title from "../../components/Title";

const EnterpisesGallery = () => {
  const [enterprises, setEnterprises] = useState([]);

  const getEnterprises = async () => {
    try {
      const EnterprisesData = await getEnterprisesService();
      setEnterprises(EnterprisesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  return (
    <section className="container pt-5">
      <Title text={"Conocé los emprendimientos que acompañamos"}/>
      <GalleryImages array={enterprises} />
    </section>
  );
};

export default EnterpisesGallery;
