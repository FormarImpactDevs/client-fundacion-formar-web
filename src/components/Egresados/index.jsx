import ReactPlayer from "react-player";
import "./_egresados.scss";


export const Egresados =() => {
    return (
        <section className="egresados_container">
            <h1 className="title">Conociendo a los egresados</h1>
            <div className="egresados_text">
                <p>Conoce los testimonios de algunos de <br/>
                los egresados de Programando la Inclusión.</p>        
                <ReactPlayer url="https://drive.google.com/file/d/142IkCCbOZsK1pC7HBOtvFNGRigfR4rjJ/view?usp=sharing" 
           controls
           className= "Player"/>
           </div>
           
       </section>
    )
} 