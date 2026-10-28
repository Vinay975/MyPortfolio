import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { playCinematicWhoosh } from '../utils/soundEffects';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Arsenal', href: '#skills' },
  { name: 'Missions', href: '#projects' },
  { name: 'Field Records', href: '#experience' },
  { name: 'Credentials', href: '#certifications' },
  { name: 'Comms', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.substring(1));
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      playCinematicWhoosh();
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#F5F3EF]/95 dark:bg-[#090B10]/95 backdrop-blur-md border-b border-[#D6D5D0] dark:border-[#2A303B]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Brand Wordmark & Developer Call-Sign */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] rounded-md"
          >
            {/* Custom Monogram Shield */}
            <div className="w-9 h-9 rounded-lg bg-[#171C25] border border-[#2A303B] group-hover:border-[#D62828] flex items-center justify-center transition-colors">
              <span className="font-cinematic font-black text-lg tracking-wider text-[#D62828]">
                VT
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-cinematic font-bold text-xl sm:text-2xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF] group-hover:text-[#D62828] transition-colors leading-none">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5E6672] dark:text-[#A5ACB8] mt-0.5">
                FULL STACK // MULTIVERSE ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Command Center Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors relative rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] ${
                    isActive
                      ? 'text-[#D62828] font-bold'
                      : 'text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D62828] rounded-full shadow-[0_0_8px_#D62828]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Theme Switch, Resume */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#151922] dark:text-[#F5F3EF] hover:border-[#D62828] hover:text-[#D62828] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Resume Action */}
            <a
              href="/Vinay_FullStack_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#D62828] hover:bg-[#A91F27] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-md shadow-[#D62828]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FileText size={13} />
              <span>DOSSIER / CV</span>
              <ArrowUpRight size={12} className="opacity-80" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#151922] dark:text-[#F5F3EF]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#151922] dark:text-[#F5F3EF]"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className="sm:hidden border-t border-[#D6D5D0] dark:border-[#2A303B] bg-[#F5F3EF] dark:bg-[#090B10] px-3 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-mono uppercase tracking-wider transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#D62828]/15 text-[#D62828] font-bold border border-[#D62828]/30'
                        : 'text-[#5E6672] dark:text-[#A5ACB8] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-[#D6D5D0] dark:border-[#2A303B] flex flex-col gap-2">
              <a
                href="/Vinay_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#D62828] text-white font-mono font-bold text-xs uppercase tracking-wider"
              >
                <FileText size={15} />
                <span>DOWNLOAD DOSSIER / CV</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;