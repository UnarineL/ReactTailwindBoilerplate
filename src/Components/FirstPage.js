import React, { useState } from 'react';

// Importing images for each option
import studentImage from './images/student.jpg';
import professionalImage from './images/professional.jpg';
import parentImage from './images/parent.jpg';
import learnerImage from './images/learner.jpg';
import teacherImage from './images/teacher.jpg';
import otherImage from './images/other.jpg';

const FirstPage = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    onNext(selectedOption);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Which Describes you best?</h1>
      <p className="mb-4">This will help us personalize your experience.</p>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => handleOptionSelect('student')} className="flex items-center bg-white p-4 rounded-lg shadow cursor-pointer">
          <img src={studentImage} alt="Student" className="w-10 h-10 mr-4" />
          <span className="text-lg">Student or soon to be enrolled 🎓</span>
        </button>
        <button onClick={() => handleOptionSelect('professional')} className="flex items-center bg-white p-4 rounded-lg shadow cursor-pointer">
          <img src={professionalImage} alt="Professional" className="w-10 h-10 mr-4" />
          <span className="text-lg">Professional pursuing a career 💼</span>
        </button>
        <button onClick={() => handleOptionSelect('parent')} className="flex items-center bg-white p-4 rounded-lg shadow cursor-pointer">
          <img src={parentImage} alt="Parent" className="w-10 h-10 mr-4" />
          <span className="text-lg">Parent of a school-age child 👨‍👩‍👧‍👦</span>
        </button>
        <button onClick={() => handleOptionSelect('learner')} className="flex items-center bg-white p-4 rounded-lg shadow cursor-pointer">
          <img src={learnerImage} alt="Learner" className="w-10 h-10 mr-4" />
          <span className="text-lg">Lifelong learner 📚</span>
        </button>
        <button onClick={() => handleOptionSelect('teacher')} className="flex items-center bg-white p-4 rounded-lg shadow cursor-pointer">
          <img src={teacherImage} alt="Teacher" className="w-10 h-10 mr-4" />
          <span className="text-lg">Teacher 👩‍🏫</span>
        </button>
        <button onClick={() => handleOptionSelect('other')} className="flex items-center bg-white p-4 rounded-lg shadow cursor-pointer">
          <img src={otherImage} alt="Other" className="w-10 h-10 mr-4" />
          <span className="text-lg">Other 🤔</span>
        </button>
      </div>
      {selectedOption && (
        <button onClick={handleContinue} className="mt-4 bg-black text-white font-bold py-2 px-4 rounded-md">
          Continue
        </button>
      )}
    </div>
  );
}

export default FirstPage;
