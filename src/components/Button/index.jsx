import PropTypes from 'prop-types';
import "./_button.scss";

export const Button = ({info}) => {
  return <button className="button-arrow ">{info}</button>;
};

Button.propTypes = {
  info: PropTypes.string,
};