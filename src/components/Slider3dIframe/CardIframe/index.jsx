import { useState } from "react";
import PropTypes from "prop-types";

export const CardIframe = ({ video, type, name, description }) => {
  const [play, setPlay] = useState(false);

  // Obtener ID del video de YouTube (funciona con links de "embed" o "watch")
  const getYouTubeID = (url) => {
    const regExp =
      /(?:youtube\.com.*(?:\\?|&)v=|youtu\.be\/|youtube\.com\/embed\/)([^&#]+)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  };

  const videoId = getYouTubeID(video);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="card">
      <div className="image_content">
        <div
          className={type === "person" ? "card_image_person" : "card_image"}
          onClick={() => setPlay(true)}
        >
          {play ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={name}
              className={type === "person" ? "card_img_person" : "card_img"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          ) : (
            <>
              <img
                src={thumbnail}
                alt={name}
                className={type === "person" ? "card_img_person" : "card_img"}
              />
              <span className="play-button">▶</span>
            </>
          )}
        </div>
      </div>

      {name && (
        <div className="card_content">
          <h2 className="paragraph1">{name}</h2>
          {description && <p className="paragraph2">{description}</p>}
        </div>
      )}
    </div>
  );
};

CardIframe.propTypes = {
  video: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
