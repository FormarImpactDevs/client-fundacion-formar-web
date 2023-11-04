import { useParams } from "react-router-dom";
export function Feedback() {
    const { status } = useParams()
    return(
     console.log({status})
    )
}
//1er ejemplo

//*aca comienza el segundo ejemplo para renderizarlo
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Feedback() {
  const { status } = useParams();

  useEffect(() => {
    // Realiza alguna lógica basada en el estado del pago (status)
    // Por ejemplo, puedes utilizar las rutas del backend que proporcionaste

    if (status === "success") {
      // Lógica para un pago exitoso
      console.log("Pago exitoso");
    } else if (status === "pending") {
      // Lógica para un pago pendiente
      console.log("Pago pendiente");
    } else if (status === "failure") {
      // Lógica para un pago fallido
      console.log("Pago fallido");
    }

    // Puedes realizar acciones adicionales aquí, como redirecciones o mostrar mensajes al usuario
  }, [status]);

  return (
    <div>
      <h2>Estado del Pago: {status}</h2>
      {/* Puedes mostrar información adicional aquí */}
    </div>
  );
}

//aca te proporciono las rutas >>>>>>>>>>>
/*
back_urls: {
failure:   isChange 
?  process.env.BASE_URL + "/feedback/failure"
:   process.env.BASE_URL + "/feedback/failure"
pending:  idChange
?  process.env.BASE_URL + "/feedback/pending"
:   process.env.BASE_URL + "/feedback/pending"
success:  isChange 
?  process.env.BASE_URL + "/feedback/success"
:   process.env.BASE_URL + "/feedback/success"
*/
