import React, { useState } from 'react';
import './Coursedirection.css';

const Coursedirection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState(Array(3).fill(null));
  const [totalScore, setTotalScore] = useState(0);

  const steps = [
    {
      videoLink: 'https://link.to/video1',
      questions: [
        { question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'], answer: 'O(log n)' },
        { question: 'Which data structure uses LIFO?', options: ['Queue', 'Stack', 'Linked List', 'Tree'], answer: 'Stack' },
        { question: 'Which algorithm is used for finding the shortest path in a graph?', options: ['Dijkstra\'s Algorithm', 'Prim\'s Algorithm', 'Kruskal\'s Algorithm', 'Floyd-Warshall Algorithm'], answer: 'Dijkstra\'s Algorithm' },
      ],
    },
    {
      videoLink: 'https://link.to/video2',
      questions: [
        { question: 'What is the best case time complexity of quicksort?', options: ['O(n^2)', 'O(n log n)', 'O(n)', 'O(log n)'], answer: 'O(n log n)' },
        { question: 'Which data structure is used in breadth-first search of a graph?', options: ['Stack', 'Queue', 'Heap', 'Linked List'], answer: 'Queue' },
        { question: 'What is the height of a balanced binary tree with n nodes?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], answer: 'O(log n)' },
      ],
    },
  ];

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newScores = [...scores];
    newScores[questionIndex] = steps[currentStep].questions[questionIndex].answer === selectedOption ? 1 : 0;
    setScores(newScores);
  };

  const handleSubmit = () => {
    const stepScore = scores.reduce((acc, score) => acc + (score !== null ? score : 0), 0);
    if (stepScore >= 2) {
      setTotalScore(totalScore + stepScore);
      setCurrentStep(currentStep + 1);
      setScores(Array(3).fill(null));
    } else {
      alert('You need at least 2 correct answers to proceed.');
    }
  };

  const handleReset = () => {
    setScores(Array(3).fill(null));
  };

  return (
    <div className="course-direction">
      <h1>Data Structures and Algorithms Course</h1>
      {steps.map((step, index) => (
        <div key={index} className={`step ${index === currentStep ? 'active' : 'hidden'}`}>
          <div className="video-section">
            <h2>Step {index + 1}: Watch the Video and Attempt the MCQs</h2>
            <a href={step.videoLink} target="_blank" rel="noopener noreferrer" className="video-link">Watch Video</a>
          </div>
          <div className="questions-section">
            <h3>MCQs</h3>
            {step.questions.map((q, i) => (
              <div key={i} className="question">
                <p>{q.question}</p>
                {q.options.map((option, j) => (
                  <label key={j}>
                    <input
                      type="radio"
                      name={`question-${index}-${i}`}
                      value={option}
                      onChange={() => handleOptionChange(i, option)}
                      disabled={index !== currentStep}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
          </div>
          {index === currentStep && (
            <div className="buttons">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Coursedirection;
