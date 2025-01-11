import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="px-4 py-10 flex justify-center">
      <div className="w-full max-w-4xl mx-auto">
        {/* Title and description with text-center for centering */}
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <p className="text-md text-white-600 opacity-85 text-center mb-6">
          Everything you need to know about the product and billing.
        </p>

        {/* Questions */}
        {[
          { question: 'Is there a free trial available?', answer: 'Yes, we offer a 30-day free trial for new users.' },
          { question: 'Can I change my plan later?', answer: 'Yes, you can change your plan at any time through your account settings.' },
          { question: 'What is your cancellation policy?', answer: 'You can cancel your plan at any time with no penalty.' },
          { question: 'Can other info be added to an invoice?', answer: 'Yes, you can add additional information to your invoice upon request.' },
          { question: 'How does billing work?', answer: 'Billing is processed monthly, based on your selected plan.' },
          { question: 'How do I change my account email?', answer: 'You can change your account email from the account settings page.' }
        ].map((item, index) => (
          <div key={index} className="my-4">
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-300">
              <p className="text-lg sm:text-base flex-grow text-center sm:text-left">{item.question}</p>  {/* Adjusted text for mobile */}
              <button
                onClick={() => toggleAnswer(index)}
                className="text-black-600 hover:text-black-400 focus:outline-none mt-2 sm:mt-0 sm:ml-4"
              >
                {activeQuestion === index ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Hidden answer */}
            {activeQuestion === index && (
              <div className="mt-2 text-gray-600">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
