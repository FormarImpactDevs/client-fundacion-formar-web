import "./_aliados.scss";
import pampaEnergia from "../../assets/pampaenergia.png";
import santander from "../../assets/santander.png";
import accenture from "../../assets/accenture.png";
import arredo from "../../assets/arredo.png";
import essarp from "../../assets/essarp.png";
import globant from "../../assets/globant.png";
import idea from "../../assets/idea.png";
import insur from "../../assets/insur.png";
import kaiapuni from "../../assets/kaiapuni.png";
import ypf from "../../assets/martalouestau.png";
import merck from "../../assets/merck.png";
import northlands from "../../assets/northlands.png";
import odisea from "../../assets/odisea.png";
import ofelia from "../../assets/ofelia.png";
import omnit from "../../assets/omint.png";
import pedidosya from "../../assets/pedidosya.png";
import sanandres from "../../assets/sanandres.png";
import stine from "../../assets/stine.png";
import summitagro from "../../assets/summitagro.jpg";
import technogies from "../../assets/technogies.png";
import tecro from "../../assets/TECRO_LOGOpng_Mesa-de-trabajo-1.png";
import uia from "../../assets/uia.jpg"; 
import Title from "../Title";
import Slide3d from "../Slider3d";


export const Aliados = () => {
    
    const images = [pampaEnergia,santander, merck,accenture,arredo,essarp,globant,idea,insur,kaiapuni,ypf,northlands,odisea,ofelia,omnit,pedidosya,sanandres,stine,summitagro,technogies,tecro,uia]
   /*  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };
  const prevImageIndex = (currentImage - 1 + images.length) % images.length;
  const nextImageIndex = (currentImage + 1) % images.length; */
  
    return(
        <div className="aliados_container">
            <Title text="Hacen posible este programa"/>
            {/*images.map(image => (
                <img src={image} alt="" />

            ))*/}
            <Slide3d list={images} />

     {/* <div className="image-slider">

     <button className="anterior" onClick={goToPrevImage}>&lt;</button>
   
      <img src={images[prevImageIndex]} alt={`Image ${prevImageIndex + 1}`} />
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      <img src={images[nextImageIndex]} alt={`Image ${nextImageIndex + 1}`} />

     
      <button className="posterior" onClick={goToNextImage}>&gt;</button>
    </div> */}
        </div>
    )
}



/* export const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />

      <button onClick={goToPrevImage}>Anterior</button>
      <button onClick={goToNextImage}>Siguiente</button>
    </div>
  );
}; */

