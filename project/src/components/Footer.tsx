import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ArrowUpRight, Play } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { getDialogue } from '../data/marvelDialogue';

interface FooterProps {
  onReplayIntro?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Dossier', href: '#about' },
    { name: 'Technical Arsenal', href: '#skills' },
    { name: 'Mission Archives', href: '#projects' },
    { name: 'Field Records', href: '#experience' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Comms', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090B10] text-[#F5F3EF] border-t border-[#2A303B] transition-colors duration-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2A303B]">
          {/* Brand & Creative Direction Summary (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#171C25] border border-[#2A303B] flex items-center justify-center">
                  <span className="font-cinematic font-black text-base text-[#D62828]">VT</span>
                </div>
                <span className="font-cinematic font-black text-2xl tracking-wider uppercase text-[#F5F3EF]">
                  {personalInfo.name}
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-widest text-[#D62828] mb-4">
                DEVELOPER MULTIVERSE ARCHITECT // SOFTWARE ENGINEER
              </p>

              <p className="font-sans text-sm text-[#A5ACB8] max-w-md leading-relaxed">
                Engineering high-resilience web and cross-platform mobile systems with React, Node.js, and TypeScript.
                Architecting solutions where superhero-level ambition meets clean, production-grade systems design.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-[#2A303B] bg-[#171C25] text-[#A5ACB8] hover:text-[#F5F3EF] hover:border-[#D62828] transition-all"
              >
                <Github size={16} />
              </a>

              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-[#2A303B] bg-[#171C25] text-[#A5ACB8] hover:text-[#F5F3EF] hover:border-[#D62828] transition-all"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send direct transmission"
                className="p-2.5 rounded-xl border border-[#2A303B] bg-[#171C25] text-[#A5ACB8] hover:text-[#F5F3EF] hover:border-[#D62828] transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Mission Navigation (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D62828] mb-4 font-bold">
              NAVIGATION INDEX
            </h4>
            <ul className="space-y-2.5 font-mono text-xs uppercase">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#A5ACB8] hover:text-[#D62828] transition-colors focus-visible:outline-none focus-visible:text-[#D62828]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Replay Intro & Dossier Download (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#D62828] mb-4 font-bold">
                EXPERIENCE PROTOCOLS
              </h4>
              <p className="font-mono text-xs text-[#A5ACB8] mb-4">
                Re-experience the title sequence or download verifiable credentials:
              </p>

              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#2A303B] bg-[#171C25] text-[#F5F3EF] hover:border-[#D62828] text-xs font-mono font-bold uppercase tracking-wider transition-colors mb-3"
                >
                  <Play size={12} className="text-[#D62828]" />
                  <span>REPLAY CINEMATIC INTRO</span>
                </button>
              )}
            </div>

            <div>
              <a
                href="/Vinay_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D62828] hover:bg-[#A91F27] text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
              >
                <span>VERIFIED CV DOSSIER</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Dialogue Sign-off & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A5ACB8]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p className="uppercase">
              © {currentYear} {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.
            </p>
            {getDialogue('footerSignoff') && (
              <>
                <span className="text-[#D62828] hidden sm:inline">·</span>
                <span className="italic text-[11px] text-[#A5ACB8]" aria-label={getDialogue('footerSignoff')?.ariaLabel}>
                  {getDialogue('footerSignoff')?.quote}
                </span>
              </>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#2A303B] bg-[#171C25] text-[#A5ACB8] hover:text-[#F5F3EF] hover:border-[#D62828] uppercase transition-all focus-visible:outline-none"
            aria-label="Back to top"
          >
            <span>TOP OF UNIVERSE</span>
            <ArrowUp size={13} className="text-[#D62828]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;