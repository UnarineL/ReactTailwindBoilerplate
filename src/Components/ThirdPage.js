import React from 'react';

const ThirdPage = ({ onNext }) => {
  const handleContinue = () => {
    // No selection needed on this page, just continue
    onNext();
  };

  return (
    <div>
      <h1>You're in the right place</h1>
      <p>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in maths, science, and computer science.</p>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default ThirdPage;
