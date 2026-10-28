/**
 * Zero-dependency Web Audio API sound design for the cinematic developer experience.
 * All sound is synthesized procedurally in-browser without copyrighted audio samples.
 * Disabled by default. Only triggers after explicit user interaction.
 */

let audioCtx: AudioContext | null = null;
let isMuted = true; // Disabled by default per requirements

// Initialize or resume AudioContext safely upon user interaction
const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
};

export const getAudioMuted = (): boolean => isMuted;

export const setAudioMuted = (muted: boolean): boolean => {
  isMuted = muted;
  if (!muted) {
    getAudioContext();
  }
  return isMuted;
};

export const toggleAudioMute = (): boolean => {
  return setAudioMuted(!isMuted);
};

/**
 * Procedural low cinematic sub-bass pulse (55Hz gentle swell)
 */
export const playCinematicDrone = () => {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(55, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(75, ctx.currentTime + 1.2);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 3.0);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 3.6);
  } catch {
    // Fail silently
  }
};

/**
 * Subtle cinematic whoosh for emblem reveals
 */
export const playCinematicWhoosh = () => {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3);
    osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.8);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.9);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.0);
  } catch {
    // Fail silently
  }
};

/**
 * Soft harmonic resonance chime for entering the portfolio
 */
export const playCinematicEnter = () => {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    [220, 330, 440, 660].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0.0001, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.035, now + i * 0.08 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + i * 0.08 + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 1.5);
    });
  } catch {
    // Fail silently
  }
};
