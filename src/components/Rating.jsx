import React from 'react';

const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={i < rating ? 'star filled' : 'star'}
        role="img"
        aria-label="star"
      >
        ⭐
      </span>
    );
  }

  return <div className="rating-stars">{stars.slice(0, rating)}</div>;
};

export default RatingStars;

