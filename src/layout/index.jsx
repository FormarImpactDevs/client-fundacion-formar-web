import { Header } from "../components/Header";
/* import {Footer} from "../components/Footer"; */
import "./mainLayout.scss";
import PropTypes from "prop-types";

export const MainLayout = ({children}) => {
    return (
        <div className="main">
          <Header />
    
          <section className="container">{children}</section>
    
         {/*  <Footer /> */}
        </div>
      );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};



