import { useState } from "react";
import { PropTypes } from "prop-types";
import { Card } from "../Card";
import "./_slider.scss";

export const Slider = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const goToNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const goToPrevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };


  const numberOfCardsToShow = 2;

  const startIndex = currentCard;
  const endIndex = (startIndex + numberOfCardsToShow) % cards.length;
  const displayedCards = cards.slice(startIndex, endIndex + 1);

  return (
    <div className="slider">
      <button onClick={goToPrevCard}>&lt;</button>
      {displayedCards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
      <button onClick={goToNextCard}>&gt;</button>
    </div>
  );
};

Slider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
