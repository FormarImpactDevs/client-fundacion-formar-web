import PropTypes from "prop-types";
import "./_card.scss";

export const CardIframe = ({ video, title, subtitle }) => {
  return (
    <div className="card">
      <div className="iframe-wrapper">
        <iframe
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <h3 className="paragraph1">{title}</h3>
      <p className="paragraph2">{subtitle}</p>
    </div>
  );
};
CardIframe.propTypes = {
  video: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
