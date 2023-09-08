import { useEffect, useState } from 'react';

function ProductsEcommerce() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API aquí
    fetch('/api/product')
      .then((response) => response.json())
      .then((data) => {
        // Al recibir los datos de la API, actualiza el estado
        setProductos(data);
      })
      .catch((error) => {
        // Manejar errores
        console.error('Error al obtener los datos de los productos:', error);
      });
  }, []); // El segundo argumento vacío garantiza que esto se ejecute solo una vez al montar el componente

  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <div className="product-card" key={producto.id}>
          <h2 className="product-title">{producto.nombre}</h2>
          <p className="product-price">Precio: {producto.precio}</p>
          {/* Otros detalles del producto */}
        </div>
      ))}
    </div>
  );
}

export default ProductsEcommerce;