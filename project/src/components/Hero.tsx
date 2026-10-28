import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCinematicWhoosh } from '../utils/soundEffects';
import { useTheme } from '../contexts/ThemeContext';
import SplitFlapText from './SplitFlapText';

const roles = [
  'AI & MACHINE LEARNING PRACTITIONER',
  'FULL STACK DEVELOPER',
  'SOFTWARE ENGINEER',
  'REACT & REACT NATIVE DEVELOPER',
  'BACKEND SYSTEMS ARCHITECT',
];

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNameReady, setIsNameReady] = useState(false);
  const [flipKey, setFlipKey] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Set ready immediately if user prefers reduced motion
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsNameReady(true);
    }
  }, [prefersReducedMotion]);

  // Mission Profile Typewriter Effect: Starts AFTER SplitFlap Name Animation Completes
  useEffect(() => {
    if (!isNameReady) return;

    if (prefersReducedMotion) {
      setDisplayedRole(roles[roleIndex]);
      return;
    }

    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedRole.length < currentRole.length) {
        // Typing character by character
        timer = setTimeout(() => {
          setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        }, 55);
      } else {
        // Full role is typed; hold for 2.2 seconds
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedRole.length > 0) {
        // Backspacing character by character
        timer = setTimeout(() => {
          setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
        }, 25);
      } else {
        // Deleted completely; advance to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [isNameReady, displayedRole, isDeleting, roleIndex, prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      playCinematicWhoosh();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 overflow-hidden bg-[#F5F3EF] dark:bg-[#090B10] transition-colors duration-200"
    >
      {/* Background Cinematic Artwork & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Multiverse Backdrop Image - 80% Visibility */}
        <img
          src="/images/hero-bg.jpeg"
          alt="Developer Multiverse Architectural Gateway"
          className="w-full h-full object-cover object-right opacity-80 filter contrast-110 brightness-95"
        />

        {/* Directional Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3EF]/95 via-[#F5F3EF]/70 to-[#F5F3EF]/20 dark:from-[#090B10]/95 dark:via-[#090B10]/70 dark:to-[#090B10]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EF] via-transparent to-[#F5F3EF]/40 dark:from-[#090B10] via-transparent dark:to-[#090B10]/40" />

        {/* Subtle red core ambient lighting matching the image's energy beam */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#D62828]/15 rounded-full blur-[130px]" />

        {/* Tactical grid lines */}
        <div
          className="w-full h-full opacity-[0.14] dark:opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '4.5rem 4.5rem',
            color: 'currentColor',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center text-left max-w-xl lg:max-w-2xl mr-auto"
        >
          {/* Top Tactical Label */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#D62828]">
            <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
            <span>FULL STACK DEVELOPER // CALL-SIGN: VT-975</span>
          </motion.div>

          {/* Mechanical Split-Flap Departure Board Name: VINAY TELLAGORLA */}
          <motion.div
            variants={itemVariants}
            className="my-3 flex flex-col gap-2.5 cursor-pointer select-none group"
            onClick={() => {
              playCinematicWhoosh();
              setFlipKey((prev) => prev + 1);
            }}
            title="Click to trigger mechanical flip cascade"
          >
            {/* Row 1: VINAY */}
            <div className="flex items-center">
              <SplitFlapText
                key={`vinay-${flipKey}-${isDark ? 'dark' : 'light'}`}
                text="VINAY"
                fontSize="clamp(30px, 5.5vw, 68px)"
                gap="clamp(3px, 0.6vw, 6px)"
                tileRadius="clamp(4px, 0.7vw, 8px)"
                tileColor={isDark ? '#141822' : '#FFFFFF'}
                textColor={isDark ? '#F5F3EF' : '#151922'}
                tileStyle="board"
                depth={0.5}
                glare={0.25}
                flipsPerChar={6}
                flipDuration={0.08}
                stagger={0.035}
                padTo={5}
                order="left"
                align="left"
                intro={true}
                fontFamily="'Barlow Condensed', 'Oswald', 'JetBrains Mono', sans-serif"
              />
            </div>

            {/* Row 2: TELLAGORLA */}
            <div className="flex items-center">
              <SplitFlapText
                key={`tellagorla-${flipKey}-${isDark ? 'dark' : 'light'}`}
                text="TELLAGORLA"
                fontSize="clamp(30px, 5.5vw, 68px)"
                gap="clamp(3px, 0.6vw, 6px)"
                tileRadius="clamp(4px, 0.7vw, 8px)"
                tileColor={isDark ? '#141822' : '#FFFFFF'}
                textColor={isDark ? '#F5F3EF' : '#151922'}
                tileStyle="board"
                depth={0.5}
                glare={0.25}
                flipsPerChar={7}
                flipDuration={0.08}
                stagger={0.035}
                padTo={10}
                order="left"
                align="left"
                intro={true}
                fontFamily="'Barlow Condensed', 'Oswald', 'JetBrains Mono', sans-serif"
                onComplete={() => setIsNameReady(true)}
              />
            </div>

            {/* Marvel Studios Precision Dual Rule Lines */}
            <div className="flex items-center gap-2 mt-1.5 max-w-md">
              <div
                className={`h-[2px] bg-[#D62828] transition-all duration-700 ease-out ${
                  isNameReady ? 'w-16' : 'w-0'
                }`}
              />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D62828] font-bold">
                STUDIOS // MULTIVERSE ARCHITECT
              </span>
              <div
                className={`h-[2px] bg-[#D62828] transition-all duration-700 ease-out ${
                  isNameReady ? 'flex-1' : 'w-0'
                }`}
              />
            </div>
          </motion.div>

          {/* Sequential Typewriter Role Indicator: Triggers AFTER SplitFlap Name Animation */}
          <motion.div
            variants={itemVariants}
            className={`h-9 mb-4 flex items-center transition-all duration-500 ${
              isNameReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            aria-live="polite"
          >
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#D62828] mr-2 flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              MISSION PROFILE:
            </span>
            <span className="font-cinematic font-bold text-lg sm:text-2xl tracking-wider text-[#5E6672] dark:text-[#B9C1CC] uppercase transition-all duration-150">
              {displayedRole}
              {isNameReady && (
                <span className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1 bg-[#D62828] animate-pulse align-middle" />
              )}
            </span>
          </motion.div>

          {/* Bold Headline */}
          <motion.p variants={itemVariants} className="font-cinematic font-bold text-xl sm:text-2xl lg:text-3xl text-[#151922] dark:text-[#F5F3EF] tracking-wide uppercase leading-tight mb-4 max-w-xl lg:max-w-2xl drop-shadow-sm">
            BUILDING DIGITAL EXPERIENCES. ENGINEERING REAL SOLUTIONS.
          </motion.p>

          {/* Introduction Bio */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed mb-6 max-w-xl lg:max-w-2xl font-sans drop-shadow-sm">
            {personalInfo.bio}
          </motion.p>

          {/* Cinematic Primary & Secondary Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 mb-7">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#D62828] hover:bg-[#A91F27] text-white font-cinematic font-bold text-base tracking-wider uppercase shadow-lg shadow-[#D62828]/25 hover:shadow-[#D62828]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
            >
              <span>EXPLORE MISSIONS</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white/90 dark:bg-[#171C25]/90 backdrop-blur-sm text-[#151922] dark:text-[#F5F3EF] hover:border-[#D62828] font-cinematic font-bold text-base tracking-wider uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
            >
              <Mail size={16} className="text-[#D62828]" />
              <span>OPEN COMMS</span>
            </button>

            <a
              href="/Vinay_FullStack_Resume.pdf"
              download="Vinay_Tellagorla_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white/90 dark:bg-[#171C25]/90 backdrop-blur-sm text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF] hover:border-[#D62828] text-xs font-mono font-medium transition-all"
              title="Download verified resume"
            >
              <Download size={15} />
              <span>DOSSIER</span>
            </a>

            {/* Compact Networks */}
            <div className="flex items-center gap-2">
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white/90 dark:bg-[#171C25]/90 backdrop-blur-sm text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF] hover:border-[#D62828] transition-all"
              >
                <Github size={16} />
              </a>

              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white/90 dark:bg-[#171C25]/90 backdrop-blur-sm text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF] hover:border-[#D62828] transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* Scroll Cue */}
          <motion.div variants={itemVariants} className="mt-8 pt-2">
            <button
              onClick={() => scrollToSection('#about')}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#D62828] transition-colors focus-visible:outline-none"
              aria-label="Scroll to Origin Story Section"
            >
              <span>INITIALIZE EXPLORATION // SCROLL DOWN</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 text-[#D62828] transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;