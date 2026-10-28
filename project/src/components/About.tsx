import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, Database, Globe, GraduationCap, MapPin, CheckCircle2, Compass, ShieldCheck } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';
import { getDialogue } from '../data/marvelDialogue';

const capabilities = [
  {
    title: 'Full Stack Architecture',
    callSign: 'CAP-01',
    icon: <Layers size={18} className="text-[#D62828]" />,
    description:
      'Designing end-to-end web architectures with React 18 and Node.js. Emphasizing clean separation of concerns, modular state stores, and robust error boundaries.',
    highlights: ['Component Modularity', 'State Synchronization', 'RESTful API Contracts'],
  },
  {
    title: 'Mobile App Engineering',
    callSign: 'CAP-02',
    icon: <Smartphone size={18} className="text-[#D62828]" />,
    description:
      'Engineering high-performance mobile apps with React Native. Delivering smooth native-like touch gestures, offline data caching, and unified cross-platform UX.',
    highlights: ['React Native & TS', 'Native Navigation', 'Device API Integrations'],
  },
  {
    title: 'Database & Cloud APIs',
    callSign: 'CAP-03',
    icon: <Database size={18} className="text-[#D62828]" />,
    description:
      'Structuring scalable document and relational data models with MongoDB and SQL. Constructing secure Express services with JWT authorization and validation pipelines.',
    highlights: ['Mongoose & Mongo Indexing', 'JWT Auth & RBAC', 'Middleware Pipelines'],
  },
  {
    title: 'Deployment & DevOps',
    callSign: 'CAP-04',
    icon: <Globe size={18} className="text-[#D62828]" />,
    description:
      'Deploying modern frontend and backend services to cloud environments (Vercel, Netlify). Integrating automated build processes and API test suites with Postman.',
    highlights: ['Vite Build Pipelines', 'CI/CD & Git Workflows', 'API Testing with Postman'],
  },
];

const cardMotion = {
  initial: { opacity: 0, y: 28, filter: 'blur(3px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
};

const About: React.FC = () => {
  const learningQuote = getDialogue('learningMindset');

  return (
    <section
      id="about"
      aria-label="About Section"
      className="py-24 sm:py-32 bg-[#EAE8E2] dark:bg-[#10141C] border-y border-[#D6D5D0] dark:border-[#2A303B] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Cinematic Styling */}
        <motion.div
          {...cardMotion}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D6D5D0] dark:border-[#2A303B]"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#D62828] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D62828]" />
              <span>DOSSIER // THE ORIGIN STORY</span>
            </div>
            <h2 className="font-cinematic font-black text-4xl sm:text-5xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF]">
              BEHIND THE CODE
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] max-w-sm uppercase tracking-wider">
            MERGING ARTIFICIAL INTELLIGENCE FOUNDATIONS WITH PRODUCTION FULL-STACK ENGINEERING.
          </p>
        </motion.div>

        {/* Bento-Grid Row 1: Operative Portrait Dossier (5 cols) + Narrative & Academic Foundation (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Bento Tile 1: Tactical Portrait Dossier (5 cols) */}
          <motion.div
            {...cardMotion}
            className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-5 sm:p-6 shadow-md relative overflow-hidden group hover:border-[#D62828] transition-all"
          >
            {/* Corner HUD reticles */}
            <div className="absolute top-2 left-2 z-20 w-3 h-3 border-t-2 border-l-2 border-[#D62828]" />
            <div className="absolute top-2 right-2 z-20 w-3 h-3 border-t-2 border-r-2 border-[#D62828]" />
            <div className="absolute bottom-2 left-2 z-20 w-3 h-3 border-b-2 border-l-2 border-[#D62828]" />
            <div className="absolute bottom-2 right-2 z-20 w-3 h-3 border-b-2 border-r-2 border-[#D62828]" />

            {/* Dossier Top Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D6D5D0] dark:border-[#2A303B] font-mono text-xs">
              <span className="text-[#D62828] font-bold tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] animate-pulse" />
                OPERATIVE STATUS: ACTIVE
              </span>
              <span className="text-[#5E6672] dark:text-[#A5ACB8]">ID: VT-975</span>
            </div>

            {/* Portrait Image with Tactical HUD Framing */}
            <div className="relative overflow-hidden rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-[#090B10] mb-4">
              <img
                src="/images/image.png"
                alt="Vinay Tellagorla - Developer Dossier"
                className="w-full h-[320px] sm:h-[360px] object-cover object-center filter contrast-105 brightness-100 group-hover:scale-105 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#090B10]/85 backdrop-blur-sm border border-[#2A303B] font-mono text-[10px] text-[#A5ACB8] flex items-center gap-1.5">
                <ShieldCheck size={11} className="text-[#D62828]" />
                <span>BIOMETRIC IDENTIFIER VERIFIED</span>
              </div>
            </div>

            {/* Operative Bio Summary Footer */}
            <div className="pt-2 flex items-center justify-between font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8]">
              <span className="font-bold text-[#151922] dark:text-[#F5F3EF]">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-[#D62828]" />
                {personalInfo.location}
              </span>
            </div>
          </motion.div>

          {/* Bento Tile 2 & 3 Combined Stack (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Tile 2: Engineering Philosophy & Growth Epigraph */}
            <motion.div
              {...cardMotion}
              className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 sm:p-7 shadow-md flex-1 flex flex-col justify-between hover:border-[#D62828] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#D62828]">
                    <Compass size={15} />
                    <span className="uppercase tracking-widest font-bold">ENGINEERING METHODOLOGY</span>
                  </div>
                  <span className="text-[#5E6672] dark:text-[#A5ACB8]">SYSTEM ARCHITECTURE</span>
                </div>

                <h3 className="font-cinematic font-bold text-2xl sm:text-3xl tracking-wide uppercase text-[#151922] dark:text-[#F5F3EF] mb-3 leading-snug">
                  Architecting reliable systems where precision precedes complexity.
                </h3>

                <p className="text-xs sm:text-sm text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed mb-3.5 font-sans">
                  My approach to software engineering mirrors disciplined systems design: breaking intricate business problems
                  into decoupled, resilient modules that scale under pressure. Rather than adopting ephemeral hype cycles, I
                  focus on clean architecture, strong typing with TypeScript, and low-latency client-server interactions.
                </p>

                <p className="text-xs sm:text-sm text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed font-sans mb-4">
                  From engineering multi-role business dashboards and real-time collaborative workspaces to developing cross-platform
                  mobile applications in React Native, I prioritize maintainability, security, and developer ergonomics across
                  every mission.
                </p>
              </div>

              {/* Tony Stark Growth Mindset Dialogue Quote */}
              {learningQuote && (
                <div
                  className="pt-3.5 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs"
                  aria-label={learningQuote.ariaLabel}
                >
                  <span className="italic text-[#151922] dark:text-[#F5F3EF] font-medium">
                    &ldquo;{learningQuote.quote}&rdquo;
                  </span>
                  <span className="text-[10px] text-[#D62828] uppercase tracking-wider font-bold shrink-0">
                    GROWTH MINDSET // CONTINUOUS LEARNING
                  </span>
                </div>
              )}
            </motion.div>

            {/* Tile 3: Academic Foundation Dossier */}
            <motion.div
              {...cardMotion}
              className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-5 sm:p-6 shadow-md hover:border-[#D62828] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#D62828]">
                  <GraduationCap size={16} />
                  <span className="uppercase tracking-widest font-bold">ACADEMIC FOUNDATION // AI & ML</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#D62828]/15 text-[#D62828] border border-[#D62828]/30">
                    CGPA: {education.gpa}
                  </span>
                  <span className="text-[#5E6672] dark:text-[#A5ACB8]">{education.year}</span>
                </div>
              </div>

              <h4 className="font-cinematic font-bold text-xl sm:text-2xl tracking-wide uppercase text-[#151922] dark:text-[#F5F3EF] mb-1">
                {education.degree}
              </h4>

              <p className="text-xs sm:text-sm font-medium text-[#5E6672] dark:text-[#A5ACB8] mb-2">
                {education.college} · {education.location}
              </p>

              <p className="text-xs text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed font-sans">
                {education.focus}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bento-Grid Row 2: 4 Core Arsenal Capabilities (Asymmetric Bento Cluster) */}
        <div>
          <motion.div {...cardMotion} className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D62828] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
              SPECIALIZED CAPABILITY MATRIX
            </span>
            <span className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8]">
              4 CORE DISCIPLINES
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-2xl bg-white dark:bg-[#171C25] border border-[#D6D5D0] dark:border-[#2A303B] hover:border-[#D62828] transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-xl bg-[#EAE8E2] dark:bg-[#10141C] border border-[#D6D5D0] dark:border-[#2A303B] group-hover:border-[#D62828]/50 transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[10px] text-[#D62828] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#D62828]/10 border border-[#D62828]/25">
                      {item.callSign}
                    </span>
                  </div>

                  <h4 className="font-cinematic font-bold text-lg sm:text-xl tracking-wide uppercase text-[#151922] dark:text-[#F5F3EF] mb-2 leading-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed mb-4 font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 text-[11px] font-mono text-[#151922] dark:text-[#F5F3EF]">
                      <CheckCircle2 size={12} className="text-[#D62828] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;