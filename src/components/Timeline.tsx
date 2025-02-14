import React from 'react';
import { Calendar, Coffee, Plane, Heart, Home, Star } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      date: 'December 24, 2024',
      title: 'When We First Saw Each Other',
      description: 'Just a video call and we talked for hours',
      icon: Coffee,
    },
    {
      date: 'December 25, 2024',
      title: 'First "I Love You"',
      description: 'After Santa Gave Me a Present',
      icon: Heart,
    },
    {
      date: 'January 15, 2025',
      title: 'Trusting You Blindly',
      description: 'You had my Complete Trust by this Time',
      icon: Plane,
    },
    {
      date: 'February 2, 2025',
      title: 'We met and you left',
      description: 'Anxious me met you for the first time',
      icon: Home,
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-rose-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Calendar className="mx-auto mb-4 text-rose-500" size={40} />
          <h2 className="text-4xl font-dancing text-gray-800 mb-4">Our Journey Together</h2>
          <p className="text-gray-600 text-lg">Every moment with you is a treasure</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-200"></div>

          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={index} className="relative mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="w-5/12">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-2">{event.date}</p>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-2/12 flex justify-center">
                    <div className="bg-rose-500 rounded-full p-2 shadow-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;