import React, { useState } from 'react';

const FifthPage = ({ onNext }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleContinue = () => {
    // Pass the rating to the onNext function
    onNext(rating);
  };

  return (
    <div>
      <h1>You're on your way!</h1>
      <div>
        {[...Array(5)].map((_, index) => (
          <span key={index} onClick={() => handleRatingChange(index + 1)}>⭐</span>
        ))}
      </div>
      <p>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."</p>
      <p>- Jacob S.</p>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default FifthPage;
