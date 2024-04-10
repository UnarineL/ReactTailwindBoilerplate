import React, { useState } from 'react';

const SecondPage = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    // Pass the selected option to the onNext function
    onNext(selectedOption);
  };

  return (
    <div>
      <h1>Which are you most interested in?</h1>
      <p>Choose just one. This helps us get you started (but won't limit your experience).</p>
      <div>
        <button onClick={() => handleOptionSelect('skills')}>Learning specific skills to advance my career</button>
        <button onClick={() => handleOptionSelect('exploring')}>Exploring new topics I'm interested in</button>
        <button onClick={() => handleOptionSelect('refreshing')}>Refreshing my math foundations</button>
        <button onClick={() => handleOptionSelect('exercising')}>Exercising my brain to stay sharp</button>
        <button onClick={() => handleOptionSelect('other')}>Something else</button>
      </div>
      {selectedOption && (
        <button onClick={handleContinue}>Continue</button>
      )}
    </div>
  );
}

export default SecondPage;
