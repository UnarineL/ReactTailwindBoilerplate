import React, { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import FinalPage from './FinalPage';

const MultiStepForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState({
    page1: '',
    page2: '',
    page3: '',
    page4: '',
    page5: 0, // Rating
  });

  const handleNext = (data) => {
    // Update the userData object with the data from the current page
    setUserData({ ...userData, [`page${currentPage}`]: data });
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePathSelect = (path) => {
    setUserData({ ...userData, learningPath: path });
    submitForm();
  };

  const submitForm = () => {
    console.log('Form submitted:', userData);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <FirstPage onNext={handleNext} />;
      case 2:
        return <SecondPage onNext={handleNext} />;
      case 3:
        return <ThirdPage onNext={handleNext} />;
      case 4:
        return <FourthPage onNext={handleNext} />;
      case 5:
        return <FifthPage onNext={handleNext} />;
      case 6:
        return <SixthPage onNext={handleNext} />;
      case 7:
        return <FinalPage onPathSelect={handlePathSelect} mathComfortLevel={userData.page4} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {currentPage <= 5 && (
        <div className="flex items-center justify-between my-5">
          <button onClick={handleBack} disabled={currentPage === 1} className="text-2xl">&lt;</button>
          <div className="relative w-full h-3 bg-gray-200 rounded-full">
            <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: `${(currentPage - 1) * 25}%` }}></div>
          </div>
          <button onClick={handleNext} disabled={currentPage === 5} className="text-2xl">&gt;</button>
        </div>
      )}
      <div className="w-11/12 mx-auto">
        {renderPage()}
      </div>
    </div>
  );
}

export default MultiStepForm;
