import "../Feedback/feedback.module.scss"
import { MainLayout } from "../../layout";  
import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import Alert from '@mui/material/Alert';

export const Feedback = () => {
  return (
    <MainLayout>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
  <div style={{ position: 'relative', top:"10rem", left: "9rem" }}>
   <a href="/"><ButtonGoToBack /></a> 
  </div>
  <div style={{display: "flex", position: "relative",}}>
    <Alert severity="success">El pago ha sido realizado correctamente</Alert>
    <Alert severity="warning">El pago esta pendiente</Alert>
    <Alert severity="error">El pago fue fallido</Alert>
  </div>
</div>
    </MainLayout>
  );
};
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
