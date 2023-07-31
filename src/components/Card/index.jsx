import PropTypes from 'prop-types';
import "./_card.scss";

export const Card = ({ image, title, subtitle}) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3 className='paragraph1'>{title}</h3>
            <p className='paragraph2'>{subtitle}</p>
        </div>
    )
};
Card.propTypes = {
    image : PropTypes.string,
    title : PropTypes.string,
    subtitle : PropTypes.string,
};