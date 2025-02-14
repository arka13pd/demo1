import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const Gallery: React.FC = () => {
  const photos = [
    {
      url: '/demo1/images/where_it_all_started.png',
      caption: 'Where it all Started',
    },
    {
      url: '/demo1/images/first_time_i_saw_you.jpg',
      caption: 'First time we saw each other',
    },
    {
      url: '/demo1/images/confess.png',
      caption: 'When we confessed',
    },
    {
      url: '/demo1/images/first_time_we_met.jpg',
      caption: 'When we met',
    },
    {
      url: '/demo1/images/rose.jpg',
      caption: 'My panda with roses',
    },
    {
      url: '/demo1/images/blush.jpg',
      caption: 'You blushing in Moscow on my proposal',
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <ImageIcon className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl font-dancing text-gray-800 mb-4">Our Favorite Memories</h2>
          <p className="text-gray-600 text-lg">Capturing our most precious moments together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                style={{ objectFit: 'cover' }} // Ensures perfect fit
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-lg font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;