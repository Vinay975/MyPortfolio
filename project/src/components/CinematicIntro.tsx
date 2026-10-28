import React, { useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, FastForward, ArrowRight, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { getDialogue } from '../data/marvelDialogue';
import {
  getAudioMuted,
  toggleAudioMute,
  playCinematicDrone,
  playCinematicWhoosh,
  playCinematicEnter,
} from '../utils/soundEffects';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'sceneA' | 'sceneB' | 'sceneC' | 'sceneD'>('sceneA');
  const [subTextIndex, setSubTextIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(getAudioMuted());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setStage('sceneD');
    }
  }, []);

  // Sequence timer advancement (around 4.5 seconds total if not skipped)
  useEffect(() => {
    if (prefersReducedMotion) return;

    // Scene A: Initial ambient black & particles (0 -> 1.0s)
    const t1 = setTimeout(() => {
      setStage('sceneB');
      setSubTextIndex(1); // 'INITIALIZING DEVELOPER UNIVERSE'
      playCinematicDrone();
    }, 700);

    // Scene B Part 2: 'A WORLD BUILT WITH CODE' (1.8s)
    const t2 = setTimeout(() => {
      setSubTextIndex(2);
    }, 1800);

    // Scene C: Original Developer Emblem & Name (2.8s)
    const t3 = setTimeout(() => {
      setStage('sceneC');
      playCinematicWhoosh();
    }, 2800);

    // Scene D: 'WELCOME TO MY UNIVERSE' & 'ENTER PORTFOLIO' (4.2s)
    const t4 = setTimeout(() => {
      setStage('sceneD');
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [prefersReducedMotion]);

  const handleEnter = useCallback(() => {
    playCinematicEnter();
    sessionStorage.setItem('hasSeenCinematicIntro', 'true');
    onComplete();
  }, [onComplete]);

  // Keyboard navigation: Escape or Enter skips/enters
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleEnter]);

  const handleSoundToggle = () => {
    const newMuted = toggleAudioMute();
    setIsMuted(newMuted);
    if (!newMuted) {
      playCinematicDrone();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic Universe Introduction"
      className="fixed inset-0 z-[100] bg-[#090B10] text-[#F5F3EF] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle red core ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D62828]/15 rounded-full blur-[140px]" />
        {/* Deep blue-charcoal secondary rim light */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#171C25]/40 rounded-full blur-[100px]" />

        {/* Ambient grid texture */}
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at center, #B9C1CC 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Top Utility Controls: Audio toggle & Skip Intro */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
        <button
          onClick={handleSoundToggle}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#2A303B] bg-[#10141C]/80 backdrop-blur-sm text-xs font-mono text-[#A5ACB8] hover:text-[#F5F3EF] hover:border-[#D62828] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
          title={isMuted ? 'Enable procedural audio' : 'Mute audio'}
          aria-label={isMuted ? 'Sound muted. Click to enable sound' : 'Sound active. Click to mute sound'}
        >
          {isMuted ? <VolumeX size={14} className="text-[#A5ACB8]" /> : <Volume2 size={14} className="text-[#D62828] animate-pulse" />}
          <span>{isMuted ? 'AUDIO: MUTED' : 'AUDIO: ENGAGED'}</span>
        </button>

        <button
          onClick={handleEnter}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#2A303B] bg-[#10141C]/80 backdrop-blur-sm text-xs font-mono font-medium text-[#B9C1CC] hover:text-white hover:border-[#D62828] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
        >
          <span>SKIP INTRO</span>
          <FastForward size={13} className="text-[#D62828]" />
        </button>
      </div>

      {/* Centerpiece Stage Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Stage B: Cinematic Narrative Reveals */}
        {stage === 'sceneB' && (
          <div className="space-y-4 animate-in fade-in duration-700">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D62828] block">
              {subTextIndex === 1 ? '● INITIALIZING DEVELOPER UNIVERSE' : '● MULTIVERSE PROTOCOL ACTIVE'}
            </span>
            <h2 className="font-cinematic font-black text-4xl sm:text-6xl tracking-widest uppercase text-[#F5F3EF] leading-tight">
              {subTextIndex === 1 ? 'A WORLD BUILT WITH CODE' : personalInfo.name}
            </h2>
          </div>
        )}

        {/* Stage C: Original Developer Emblem & Identity */}
        {stage === 'sceneC' && (
          <div className="flex flex-col items-center animate-in zoom-in-95 fade-in duration-700">
            {/* Original Geometric Emblem: Hexagonal Shield with Red Reactor Core */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#2A303B] bg-[#10141C]/90 shadow-2xl rotate-45 transform" />
              <div className="absolute inset-2 rounded-xl border border-[#D62828]/40 rotate-45 transform" />

              {/* Glowing Inner Core */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <Shield size={38} className="text-[#B9C1CC] mb-0.5" />
                <span className="font-cinematic font-black text-xl sm:text-2xl tracking-widest text-[#D62828]">
                  VT
                </span>
              </div>
            </div>

            <div className="font-mono text-[11px] uppercase tracking-widest text-[#B9C1CC] mb-2">
              IDENTITY CONFIRMED // CODE IDENTIFIER: VT-975
            </div>
            <h1 className="font-cinematic font-black text-5xl sm:text-7xl tracking-widest uppercase text-white mb-2">
              {personalInfo.name}
            </h1>
            <p className="font-sans text-sm text-[#A5ACB8] max-w-md">
              Full Stack Developer & Software Engineer
            </p>
          </div>
        )}

        {/* Stage D / Fallback: Final Title Card & Enter Action */}
        {stage === 'sceneD' && (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Mini Emblem */}
            <div className="w-14 h-14 rounded-xl border border-[#D62828]/60 bg-[#171C25] flex items-center justify-center mb-6 shadow-lg shadow-[#D62828]/15">
              <span className="font-cinematic font-black text-2xl tracking-wider text-[#D62828]">
                VT
              </span>
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-[#D62828] mb-3">
              MULTIVERSE SYNCHRONIZED
            </div>

            <h1 className="font-cinematic font-black text-4xl sm:text-6xl tracking-widest uppercase text-white mb-3">
              WELCOME TO MY UNIVERSE
            </h1>

            {/* Understated Personal Dialogue Signature */}
            {getDialogue('introSignature') && (
              <div
                className="mb-6 py-2 px-5 rounded-xl border border-[#2A303B]/80 bg-[#171C25]/60 backdrop-blur-sm inline-flex flex-col items-center max-w-md animate-in fade-in duration-700"
                aria-label={getDialogue('introSignature')?.ariaLabel}
              >
                <p className="font-cinematic font-bold text-lg sm:text-xl text-[#F5F3EF] tracking-widest italic text-center">
                  {getDialogue('introSignature')?.quote}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#D62828] mt-0.5 text-center">
                  {getDialogue('introSignature')?.subtext}
                </span>
              </div>
            )}

            <p className="font-sans text-sm sm:text-base text-[#A5ACB8] max-w-lg mb-7 leading-relaxed">
              Explore active missions, technical architecture, and software systems engineered by {personalInfo.name}.
            </p>

            <button
              onClick={handleEnter}
              autoFocus
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#D62828] hover:bg-[#A91F27] text-white font-cinematic font-bold text-lg sm:text-xl tracking-wider uppercase shadow-xl shadow-[#D62828]/25 hover:shadow-[#D62828]/40 transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>ENTER PORTFOLIO</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Mission Status Ticker */}
      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between font-mono text-[11px] text-[#A5ACB8] border-t border-[#2A303B]/60 pt-3">
        <span>SECURITY LEVEL: AUTHORIZED</span>
        <span className="text-[#D62828]">PRESS [ESC] OR CLICK ENTER</span>
      </div>
    </div>
  );
};

export default CinematicIntro;
