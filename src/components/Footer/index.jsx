import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import gmail from "../../assets/gmail.png"
import logoFormar from "../../assets/logoFormar.png";
import "./_footer.scss";

export const Footer =() => {
    return (
        <footer>
          
           <div className="footer_container">

            <div className="row">

             <div className="footer_logo">
                <img src={logoFormar} alt="Logo de Fundación Formar" />
             </div>

             <div className="column">
                <p>&#169; FormarCodeando, 2023 | Hecho con amor!</p>
             </div>
             
             <div className="socials">
                <a href="https://www.instagram.com/fundacionformar/"><img src={instagram} alt="" /></a>
                <a href="https://www.linkedin.com/company/fundacion-formar/"><img src={linkedin} alt="" /></a>
                <a href=""><img src={gmail} /></a>
             </div>
         

           </div>

        </div>
          
     </footer>

    )
}
