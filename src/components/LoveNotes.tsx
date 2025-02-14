import React, { useState } from 'react';
import { MessageCircleHeart, Send } from 'lucide-react';

const LoveNotes: React.FC = () => {
  const [notes, setNotes] = useState([
    {
      author: 'Ishita',
      content: 'You two are the definition of relationship goals! So happy for you both! ❤️',
      date: '2024-02-14',
    },
    {
      author: 'Titash',
      content: 'Your love story is inspiring! Wishing you both endless happiness!',
      date: '2024-02-13',
    },
  ]);

  const [newNote, setNewNote] = useState({
    author: '',
    content: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.author.trim() && newNote.content.trim()) {
      setNotes([
        {
          ...newNote,
          date: new Date().toISOString().split('T')[0],
        },
        ...notes,
      ]);
      setNewNote({ author: '', content: '' });
    }
  };

  return (
    <section id="notes" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MessageCircleHeart className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl font-dancing text-gray-800 mb-4">Love Notes</h2>
          <p className="text-gray-600 text-lg">Share your wishes and thoughts</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={newNote.author}
              onChange={(e) => setNewNote({ ...newNote, author: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-rose-500 focus:ring focus:ring-rose-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Write your message..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-rose-500 focus:ring focus:ring-rose-200 focus:ring-opacity-50 h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-md flex items-center justify-center gap-2 transition-colors"
          >
            <Send size={18} />
            Send Note
          </button>
        </form>

        <div className="space-y-6">
          {notes.map((note, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-gray-800">{note.author}</h3>
                <time className="text-sm text-gray-500">{note.date}</time>
              </div>
              <p className="text-gray-700">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;