import React from 'react';

const FinalPage = ({ onPathSelect, mathComfortLevel }) => {
  const handlePathSelect = (path) => {
    onPathSelect(path);
  };

  const getLearningPaths = (mathComfortLevel) => {
    switch (mathComfortLevel) {
      case 'arithmetic':
        return [
          { name: 'Basic Arithmetic', description: 'Learn fundamental arithmetic operations and number concepts.' },
          { name: 'Number Sense', description: 'Develop a deeper understanding of numbers and their relationships.' }
        ];
      case 'basicAlgebra':
        return [
          { name: 'Foundational Math', description: 'Build a solid foundation in algebraic concepts and problem-solving techniques.' },
          { name: 'Mathematical Thinking', description: 'Cultivate critical thinking skills through mathematical reasoning and problem-solving.' }
        ];
      case 'intermediateAlgebra':
        return [
          { name: 'Intermediate Algebra', description: 'Expand your algebraic knowledge and problem-solving abilities to an intermediate level.' },
          { name: 'Advanced Algebra', description: 'Dive deeper into advanced algebraic topics and their applications.' }
        ];
      case 'calculus':
        return [
          { name: 'Differential Calculus', description: 'Study the fundamental concepts of differential calculus and their applications in real-world scenarios.' },
          { name: 'Integral Calculus', description: 'Explore integral calculus and its role in modeling and analyzing continuous change.' }
        ];
      default:
        return [];
    }
  };
  

  const options = getLearningPaths(mathComfortLevel);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Learning paths based on your answers</h1>
      <p className="text-lg mb-4">Choose one to get started. You can switch anytime.</p>
      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
            <div key={index} className={`relative ${index === 0 ? 'mb-4' : ''}`}>
            {index === 0 && (
                <div className="absolute top-0 left-0 bg-yellow-400 text-xs font-bold py-1 px-2 rounded-t-md">
                Most popular
                </div>
            )}
            <button onClick={() => handlePathSelect(option.name)} className={`bg-transparent hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md border border-yellow-600 ${index === 0 ? 'rounded-b-md' : ''}`}>
                <strong>{option.name}</strong>
                <p>{option.description}</p>
            </button>
            </div>
            ))}
        </div>
    </div>
  );
}

export default FinalPage;
