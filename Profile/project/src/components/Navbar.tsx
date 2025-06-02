import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.a 
              href="#home"
              className="flex items-center gap-2 text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="text-accent-cyan" />
              <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
                Developer
              </span>
            </motion.a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={item.href}
                    className="text-sm font-medium hover:text-accent-cyan transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent-cyan"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background/90 backdrop-blur-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium hover:text-accent-cyan"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;