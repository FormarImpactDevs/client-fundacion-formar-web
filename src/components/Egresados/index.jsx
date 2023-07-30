import video from "../../assets/video.mp4"
import "./_egresados.scss";
import Title from "../Title"
import Subtitle from "../Subtitle";
export const Egresados =() => {
    return (
        <div className="egresados_container">
            <Title text="Conocé a los egresados  "/>
            <Subtitle text="Te compartimos los testimonios de algunos egresados de Programando la Inclusión" />
            <section className="egresados_text_video">
            
                <div className="video">
                <video width="100%" height="300px"src ={video} controls/>
                </div> 
           </section>
         </div>
    )
} 