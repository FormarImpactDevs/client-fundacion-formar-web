import {useContext} from "react";
/* import { useState, useEffect, useContext } from "react"; */
import GalleryImages from "../../components/GalleryImages";
import { EnterpriseContext } from "../../context/EnterpriseContext/EnterpriseContext";

const EnterpisesGallery = () => {
  const { enterprises } = useContext(EnterpriseContext);
  console.log('====================================');
  console.log(enterprises);
  console.log('====================================');
  return (
    <section className="container">
      <GalleryImages array={enterprises} />
    </section>
  );
};

export default EnterpisesGallery;
