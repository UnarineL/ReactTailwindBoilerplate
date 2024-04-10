import React, { useEffect } from 'react';

const SixthPage = ({ onNext }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the next page after a delay
      onNext();
    }, 3000); // Simulate a 3-second delay for loading
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div>
      <div className="loading-circle"></div>
      <p>Finding learning path recommendations for you based on responses...</p>
    </div>
  );
}

export default SixthPage;
