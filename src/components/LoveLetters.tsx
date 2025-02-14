import React from 'react';
import { PenLine } from 'lucide-react';

const LoveLetters: React.FC = () => {
  const letters = [
    {
      date: 'December 25, 2024',
      title: 'My Valentine',
      content: 'Every day with you feels like Valentine\'s Day. Your smile lights up my world in ways I never thought possible. Thank you for being the most amazing partner anyone could ask for.',
    },
    {
      date: 'February 2, 2025',
      title: 'New Year, New Beginning',
      content: 'As we enter a new together, I\'m reminded of how lucky I am to have you by my side. Here\'s to creating more beautiful memories together.',
    },
  ];

  return (
    <section id="letters" className="py-20 px-4 bg-rose-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <PenLine className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl font-dancing text-gray-800 mb-4">Love Letters</h2>
          <p className="text-gray-600 text-lg">Words from my heart to yours</p>
        </div>

        <div className="space-y-8">
          {letters.map((letter, index) => (
            <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-dancing text-gray-800">{letter.title}</h3>
                  <time className="text-sm text-gray-500">{letter.date}</time>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{letter.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveLetters;