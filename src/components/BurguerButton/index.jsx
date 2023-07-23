import PropTypes from 'prop-types';
import "./burguerButton.scss"

export const BurguerButton = ({callback, state}) => {
  return (
    <button className="buttonMenu">
      <input id="openClose" name="openClose" type="checkbox" value="" checked={state}  onClick={callback ? callback : ""}/>
      <label htmlFor="openClose" className="toggle_button"></label>
    </button>
  );
};

BurguerButton.propTypes = {
  callback: PropTypes.func,
  state: PropTypes.bool
};
