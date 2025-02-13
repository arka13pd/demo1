import React, { useState } from 'react';
import { Heart, Calendar, Image, PenLine, MessageCircleHeart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveLetters from './components/LoveLetters';
import LoveNotes from './components/LoveNotes';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'story', label: 'Our Story', icon: Heart },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'letters', label: 'Love Letters', icon: PenLine },
    { id: 'notes', label: 'Love Notes', icon: MessageCircleHeart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar items={navItems} activeSection={activeSection} onNavChange={setActiveSection} />
      <main>
        <Hero />
        <OurStory />
        <Timeline />
        <Gallery />
        <LoveLetters />
        <LoveNotes />
      </main>
    </div>
  );
}

export default App;