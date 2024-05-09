import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="border border-gray-400 rounded-lg bg-purple-50">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className="cursor-pointer"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <button
            className="text-purple-600 hover:text-purple-800 focus:outline-none"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <FontAwesomeIcon icon={showAnswer ? faMinus : faPlus} />
          </button>
        </article>

        <article
          className={`transition-all duration-300 ease-out ${
            showAnswer &&
            'border-t border-gray-400 p-4 lg:p-6 bg-white rounded-br-lg rounded-bl-lg'
          }`}
        >
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
  );
};

export default SingleQuestion;
