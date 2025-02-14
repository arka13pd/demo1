import React from 'react';
import { HeartHandshake } from 'lucide-react';

const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HeartHandshake className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl font-dancing text-gray-800 mb-4">Our Chance Encounter</h2>
          <p className="text-gray-600 text-lg">How a simple swipe right changed our lives forever</p>
        </div>
        
        <div className="prose prose-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <p className="text-gray-700 leading-relaxed mb-6">
            It all started with a simple notification on a dating app. Little did I know that this
            ordinary Sunday evening would lead me to the most extraordinary person I've ever met.
            Your profile caught my eye - not just because of your beautiful smile, but because of
            the genuine warmth that radiated from your photos.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Our first conversation flowed effortlessly, as if we'd known each other for years.
            There was an instant connection, a natural rhythm to our words that felt both comforting and familiar.
            Yet, as time passed, I discovered how distinct we truly are—our perspectives, experiences, 
            and ways of seeing the world often diverging in surprising ways. 
            But it was within those differences that I found something even more beautiful:
            a bond enriched by contrast, deepened by understanding, 
            and strengthened by the space we gave each other to simply be ourselves.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Now, looking back at that fateful match, I can't help but feel grateful for the
            algorithms that brought us together. But I know it was more than just code - it was
            destiny. Every day since then has been brighter with you in my life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;