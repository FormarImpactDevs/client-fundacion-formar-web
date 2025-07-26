import PropTypes from "prop-types";
import "./CardProgramming.scss";

export const CardProgramming = ({ icon, nameIcon, text, list }) => {
  return (
    <div className="cardProgramming">
      <figure className="containerIcon">
        <img src={icon} alt={nameIcon} />
      </figure>
      <div>
        <p className="paragraph2" dangerouslySetInnerHTML={{ __html: text }}></p>

        {list && list.length > 0 && (
          <ul className="description">
            {list.map((item, index) => (
              <li key={index}>{item}</li> 
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

CardProgramming.propTypes = {
  icon: PropTypes.string,
  nameIcon: PropTypes.string,
  text: PropTypes.node,
  list: PropTypes.array,
};