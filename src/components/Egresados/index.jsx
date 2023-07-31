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
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wLg0yy0pSuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </section>
         </div>
    )
} 