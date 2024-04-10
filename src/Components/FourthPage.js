import React, { useState } from 'react';

const FourthPage = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    onNext(selectedOption);
  };

  return (
    <div>
      <h1>What is your math comfort level?</h1>
      <p>Choose the highest level you feel confident in - you can always adjust later.</p>
      <div>
        <button onClick={() => handleOptionSelect('arithmetic')}>Arithmetic (Introductory)</button>
        <button onClick={() => handleOptionSelect('basicAlgebra')}>Basic Alagebra (Foundational)</button>
        <button onClick={() => handleOptionSelect('intermediateAlgebra')}>Intermediate Algebra (Intermediate)</button>
        <button onClick={() => handleOptionSelect('calculus')}>Calculus (Advanced)</button>
      </div>
      {selectedOption && (
        <button onClick={handleContinue}>Continue</button>
      )}
    </div>
  );
}

export default FourthPage;
