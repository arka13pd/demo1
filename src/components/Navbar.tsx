import React, { useState } from 'react';
import { DivideIcon as LucideIcon, Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface NavbarProps {
  items: NavItem[];
  activeSection: string;
  onNavChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, activeSection, onNavChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavChange(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-dancing text-rose-600">Our Love Story</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'bg-rose-100 text-rose-600'
                      : 'text-gray-600 hover:bg-rose-50'
                  } px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'bg-rose-100 text-rose-600'
                    : 'text-gray-600 hover:bg-rose-50'
                } w-full px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-colors`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;