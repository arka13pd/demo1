import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <Heart className="mx-auto mb-8 text-rose-400" size={48} />
        <h1 className="text-5xl md:text-6xl font-dancing mb-6">Our Love Story</h1>
        <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
          To my dearest, who makes every day feel like Valentine's Day.
          This is our story, our journey, and our endless love.
        </p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
          Begin Our Journey
        </button>
      </div>
    </div>
  );
};

export default Hero;