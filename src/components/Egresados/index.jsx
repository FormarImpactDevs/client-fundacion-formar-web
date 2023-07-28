import video from "../../assets/video.mp4"
import "./_egresados.scss";


export const Egresados =() => {
    return (
        <div className="egresados_container">
            <h1 className="title">Conoce a los egresados</h1>

            <section className="egresados_text_video">
            <div className="egresados_text">
                <h2>Te compartimos los testimonios de algunos egresados de Programando la Inclusión</h2>        
                </div>
                <div className="video">
                <video width="400px" height="300px"src ={video} controls/>
                </div> 
           </section>
         </div>
    )
} 