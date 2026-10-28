import React, { Suspense, useState, useEffect, useRef, useMemo, Component, ReactNode, ErrorInfo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, ArrowRight, Zap, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../contexts/ThemeContext';
import { playCinematicWhoosh } from '../utils/soundEffects';
import { getDialogue } from '../data/marvelDialogue';

// WebGL Error Boundary to guarantee fallback rendering
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Rendering fallback triggered:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Ambient Stardust Particle Cloud around the core
const ParticleCloud: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 48;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        color={isDark ? '#D62828' : '#C62828'}
        transparent
        opacity={0.55}
      />
    </points>
  );
};

// Original 3D "Multiverse Core" with Scroll-Driven Kinetic Rotation & Reactor Pulse
const MultiverseCore3D: React.FC<{ isDark: boolean; prefersReducedMotion: boolean }> = ({
  isDark,
  prefersReducedMotion,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const scrollYRef = useRef(0);
  const targetScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      targetScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    // Smoothly interpolate towards scroll offset
    scrollYRef.current = THREE.MathUtils.lerp(scrollYRef.current, targetScrollY.current, 0.08);
    const scroll = scrollYRef.current;

    // Scroll-bound 3D core rotation & dynamic tilt
    if (groupRef.current) {
      groupRef.current.rotation.y = scroll * 0.0024 + state.clock.elapsedTime * 0.22;
      groupRef.current.rotation.x = Math.sin(scroll * 0.001) * 0.32;
      groupRef.current.rotation.z = Math.cos(scroll * 0.0012) * 0.18;
    }

    // Outer Titanium Ring spin & orbital progression based on scroll
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + scroll * 0.0028;
      ring1Ref.current.rotation.z += delta * 0.32 + scroll * 0.0001;
    }

    // Inner Warm Gold Ring counter-rotation based on scroll
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.PI / 6 - scroll * 0.0026;
      ring2Ref.current.rotation.x = -Math.PI / 4 + scroll * 0.002;
      ring2Ref.current.rotation.z -= delta * 0.28;
    }

    // Subtle responsive camera tracking
    const targetZ = 4.3 + Math.min(scroll * 0.001, 1.2);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
  });

  return (
    <Float
      speed={prefersReducedMotion ? 0 : 1.4}
      rotationIntensity={prefersReducedMotion ? 0 : 0.6}
      floatIntensity={prefersReducedMotion ? 0 : 1.0}
    >
      <group ref={groupRef}>
        {/* Inner Reactor Energy Core */}
        <Sphere ref={coreRef} args={[0.95, 64, 64]}>
          <MeshDistortMaterial
            color={isDark ? '#D62828' : '#C62828'}
            emissive={isDark ? '#5C0F0F' : '#3D0707'}
            emissiveIntensity={isDark ? 0.8 : 0.4}
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distort={prefersReducedMotion ? 0 : 0.24}
            speed={prefersReducedMotion ? 0 : 1.4}
          />
        </Sphere>

        {/* Outer Orbital Titanium Ring */}
        <Torus
          ref={ring1Ref}
          args={[1.65, 0.05, 32, 100]}
          rotation={[Math.PI / 3, Math.PI / 4, 0]}
        >
          <meshStandardMaterial
            color={isDark ? '#B9C1CC' : '#7A838E'}
            roughness={0.25}
            metalness={0.9}
          />
        </Torus>

        {/* Secondary Cross-Dimensional Gold Ring */}
        <Torus
          ref={ring2Ref}
          args={[1.4, 0.035, 32, 100]}
          rotation={[-Math.PI / 4, Math.PI / 6, 0]}
        >
          <meshStandardMaterial
            color={isDark ? '#E8B66B' : '#C49347'}
            roughness={0.3}
            metalness={0.85}
          />
        </Torus>

        {/* Ambient Stardust Particle Cloud */}
        {!prefersReducedMotion && <ParticleCloud isDark={isDark} />}
      </group>
    </Float>
  );
};

// Fallback 2D visual for loading or WebGL failure
const SculptureFallback: React.FC = () => (
  <div className="w-full h-full min-h-[340px] flex items-center justify-center p-8">
    <div className="relative w-64 h-64 rounded-2xl border border-[#2A303B] bg-[#10141C] flex items-center justify-center shadow-2xl">
      <div className="w-44 h-44 rounded-full border border-[#D62828]/40 animate-pulse flex items-center justify-center">
        <div className="w-28 h-28 rounded-full bg-[#D62828]/15 border border-[#D62828] flex flex-col items-center justify-center text-center p-3">
          <Zap size={24} className="text-[#D62828] mb-1" />
          <span className="font-cinematic font-bold text-sm tracking-wider text-[#F5F3EF]">MULTIVERSE CORE</span>
          <span className="font-mono text-[9px] text-[#A5ACB8]">ACTIVE</span>
        </div>
      </div>
    </div>
  </div>
);

const roles = [
  'FULL STACK DEVELOPER',
  'SOFTWARE ENGINEER',
  'REACT & REACT NATIVE DEVELOPER',
  'BACKEND SYSTEMS ARCHITECT',
  'AI & MACHINE LEARNING PRACTITIONER',
];

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showHeroEasterEgg, setShowHeroEasterEgg] = useState(false);
  const heroEasterEgg = getDialogue('heroSubtle');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

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
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#F5F3EF] dark:bg-[#090B10] transition-colors duration-200"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle red core ambient lighting */}
        <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-[#D62828]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-[#171C25]/40 rounded-full blur-[100px]" />

        {/* Tactical grid lines */}
        <div
          className="w-full h-full opacity-[0.25] dark:opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '4.5rem 4.5rem',
            color: isDark ? '#2A303B' : '#D6D5D0',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative & Call-Signs (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Top Tactical Label */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-[#D62828]">
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              <span>FULL STACK DEVELOPER // CALL-SIGN: VT-975</span>
            </motion.div>

            {/* Cinematic Main Name Display */}
            <motion.h1 variants={itemVariants} className="font-cinematic font-black text-5xl sm:text-7xl lg:text-8xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF] mb-2 leading-none">
              {personalInfo.name}
            </motion.h1>

            {/* Rotating Role Indicator */}
            <motion.div variants={itemVariants} className="h-8 mb-5 flex items-center" aria-live="polite">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#D62828] mr-2">
                MISSION PROFILE:
              </span>
              <span className="font-cinematic font-bold text-lg sm:text-xl tracking-wider text-[#5E6672] dark:text-[#B9C1CC] uppercase transition-all duration-300">
                {roles[roleIndex]}
              </span>
            </motion.div>

            {/* Bold Headline */}
            <motion.p variants={itemVariants} className="font-cinematic font-bold text-2xl sm:text-3xl text-[#151922] dark:text-[#F5F3EF] tracking-wide uppercase leading-tight mb-4 max-w-2xl">
              BUILDING DIGITAL EXPERIENCES. ENGINEERING REAL SOLUTIONS.
            </motion.p>

            {/* Introduction Bio */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed mb-8 max-w-xl font-sans">
              {personalInfo.bio}
            </motion.p>

            {/* Cinematic Primary & Secondary Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D62828] hover:bg-[#A91F27] text-white font-cinematic font-bold text-base tracking-wider uppercase shadow-lg shadow-[#D62828]/25 hover:shadow-[#D62828]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
              >
                <span>EXPLORE MISSIONS</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#151922] dark:text-[#F5F3EF] hover:border-[#D62828] font-cinematic font-bold text-base tracking-wider uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
              >
                <Mail size={16} className="text-[#D62828]" />
                <span>OPEN COMMS</span>
              </button>

              <a
                href="/Vinay_FullStack_Resume.pdf"
                download="Vinay_Tellagorla_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF] hover:border-[#D62828] text-xs font-mono font-medium transition-all"
                title="Download verified resume"
              >
                <Download size={15} />
                <span className="hidden sm:inline">DOSSIER</span>
              </a>

              {/* Compact Networks */}
              <div className="flex items-center gap-1.5 ml-1">
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF] hover:border-[#D62828] transition-all"
                >
                  <Github size={16} />
                </a>

                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF] hover:border-[#D62828] transition-all"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </motion.div>

            {/* Arsenal Footprint Ticker */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-[#D6D5D0] dark:border-[#2A303B] flex flex-wrap items-center gap-2 max-w-xl">
              <span className="font-mono text-xs text-[#D62828] uppercase tracking-wider mr-1 font-semibold flex items-center gap-1">
                <Compass size={13} />
                TACTICAL ARSENAL:
              </span>
              {['React.js', 'React Native', 'Node.js', 'TypeScript', 'MongoDB', 'REST APIs', 'Express'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#EAE8E2] dark:bg-[#10141C] border border-[#D6D5D0] dark:border-[#2A303B] text-xs font-mono text-[#151922] dark:text-[#F5F3EF]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Multiverse Core Sculpture with Scroll Binding (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] lg:h-[500px] flex items-center justify-center">
            {/* Cinematic HUD Framing Bracket */}
            <div className="absolute inset-0 rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-[#EAE8E2]/40 dark:bg-[#10141C]/50 backdrop-blur-[2px]">
              {/* Corner Accent Brackets */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#D62828]" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#D62828]" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#D62828]" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#D62828]" />
            </div>

            {/* Top HUD Telemetry Indicator */}
            <div className="absolute top-3 left-4 z-20 font-mono text-[10px] text-[#5E6672] dark:text-[#A5ACB8] flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] animate-ping" />
              <span>CORE 3D // SCROLL KINETIC LINK ACTIVE</span>
            </div>

            {/* 3D Canvas */}
            <div className="relative w-full h-full z-10 cursor-grab active:cursor-grabbing">
              <WebGLErrorBoundary fallback={<SculptureFallback />}>
                <Suspense fallback={<SculptureFallback />}>
                  <Canvas
                    camera={{ position: [0, 0, 4.3], fov: 45 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                  >
                    <ambientLight intensity={isDark ? 0.6 : 0.8} />
                    <directionalLight position={[10, 10, 5]} intensity={isDark ? 1.6 : 1.3} />
                    <directionalLight position={[-10, -5, -5]} color={isDark ? '#D62828' : '#C62828'} intensity={0.9} />
                    <pointLight position={[0, 0, 2]} color="#E8B66B" intensity={0.8} />

                    <MultiverseCore3D isDark={isDark} prefersReducedMotion={prefersReducedMotion} />

                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      rotateSpeed={0.6}
                      autoRotate={!prefersReducedMotion}
                      autoRotateSpeed={0.6}
                      minPolarAngle={Math.PI / 3}
                      maxPolarAngle={Math.PI / 1.5}
                    />
                  </Canvas>
                </Suspense>
              </WebGLErrorBoundary>
            </div>

            {/* Tactical Tag with Optional Easter Egg */}
            <button
              onClick={() => setShowHeroEasterEgg(!showHeroEasterEgg)}
              className="absolute bottom-3 right-4 z-20 font-mono text-[10px] text-[#A5ACB8] hover:text-white bg-[#090B10]/90 px-2.5 py-1 rounded-md border border-[#2A303B] hover:border-[#D62828] flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D62828]"
              title="Multiverse Core Status // Click to inspect"
              aria-label={heroEasterEgg?.ariaLabel || 'Multiverse Core status'}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
              <span>
                {showHeroEasterEgg && heroEasterEgg
                  ? `${heroEasterEgg.quote} // OWNERSHIP`
                  : 'MULTIVERSE CORE 3D // KINETIC SYNC'}
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="mt-12 lg:mt-16 text-center flex justify-center">
          <button
            onClick={() => scrollToSection('#about')}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#D62828] transition-colors focus-visible:outline-none"
            aria-label="Scroll to Origin Story Section"
          >
            <span>INITIALIZE EXPLORATION // SCROLL DOWN</span>
            <ArrowDown size={14} className="group-hover:translate-y-1 text-[#D62828] transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;