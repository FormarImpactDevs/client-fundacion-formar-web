import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ObserverComponentContext = createContext();

const ObserverComponentProvider = ({ children }) => {

  const [aboutIsIntersecting, setAboutIsIntersecting] = useState(false);
  const [programingIsIntersecting, setProgramingIsIntersecting] =
    useState(false);
  const [volunteerIsIntersecting, setVolunteerIsIntersecting] = useState(false);
  const [undertakingIsIntersecting, setUndertakingIsIntersecting] =
    useState(false);
  const [contactIsIntersecting, setContactIsIntersecting] = useState(false);

  return (
    <ObserverComponentContext.Provider
      value={{
        aboutIsIntersecting,
        setAboutIsIntersecting,
        programingIsIntersecting,
        setProgramingIsIntersecting,
        volunteerIsIntersecting,
        setVolunteerIsIntersecting,
        undertakingIsIntersecting,
        setUndertakingIsIntersecting,
        contactIsIntersecting,
        setContactIsIntersecting,
      }}
    >
      {children}
    </ObserverComponentContext.Provider>
  );
};

ObserverComponentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ObserverComponentProvider };

export { ObserverComponentContext };
