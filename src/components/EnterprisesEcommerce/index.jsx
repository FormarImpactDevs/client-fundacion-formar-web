import { useEffect, useState } from 'react';
import "./_enterpriseEcommerce.scss";
import Button from '@mui/material/Button';
function EnterprisesEcommerce() {
  const [enterprises, setEnterprises] = useState([]);
  const [imagenAmpliadaVisible, setImagenAmpliadaVisible] = useState(false);
  const [imagenAmpliadaSrc, setImagenAmpliadaSrc] = useState('');

  const mostrarImagenAmpliada = (imagen) => {
    setImagenAmpliadaSrc(imagen);
    setImagenAmpliadaVisible(true);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliadaVisible(false);
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/enterprises')
      .then((response) => response.json())
      .then((data) => {
        setEnterprises(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de los emprendimientos:', error);
      });
  }, []); 

  return (
    
    <div>
      <h1 className="title">Emprendimientos</h1>
    <div className="enterprise-container">
      <div className="enterprise-grid">
        {enterprises.map((enterprise) => (
          <div className="enterprise-card" key={enterprise.id}>
            <img
              src="https://cdn.create.vista.com/api/media/small/24462071/stock-photo-multi-ethnic-business-group"
              alt={`Imagen de ${enterprise.nombre}`}
              className="enterprise-image"
              onClick={() => mostrarImagenAmpliada("https://cdn.create.vista.com/api/media/small/24462071/stock-photo-multi-ethnic-business-group")}
              />

            <div className="enterprise-info">
              <h2 className="enterprise-title">{enterprise.nombre}</h2>
              <p className="enterprise-description">{enterprise.descripcion}</p>
              <Button size="small">Listado de productos</Button>
              
            </div>
          </div>
        ))}
        </div>
      </div>

      <div
        id="imagenAmpliada"
        className="imagen-ampliada"
        style={{ display: imagenAmpliadaVisible ? 'block' : 'none' }}
      >
        <img
          src={imagenAmpliadaSrc}
          alt="Imagen ampliada del emprendimiento"
          id="imagenAmpliadaSrc"
          className="ampliada-image"
        />
        <span className="cerrar-x" onClick={() => cerrarImagenAmpliada()}>
          X
        </span>
      </div>
    </div>
  
  );
}

export default EnterprisesEcommerce;