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
  </div>
</div>
    </MainLayout>
  );
};