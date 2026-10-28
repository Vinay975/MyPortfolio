import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Terminal,
  Rocket,
  Search,
} from 'lucide-react';

interface SkillCardData {
  id: string;
  title: string;
  callSign: string;
  mastery: number;
  icon: React.ReactElement;
  col1: string[];
  col2: string[];
}

const skillCards: SkillCardData[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    callSign: 'DOMAIN 01 // CLIENT SYSTEMS',
    mastery: 95,
    icon: <Code2 size={22} className="text-[#D62828]" />,
    col1: ['React.js', 'React Native', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    col2: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Framer Motion', 'Redux & Zustand', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    callSign: 'DOMAIN 02 // SERVER ARCHITECTURE',
    mastery: 92,
    icon: <Server size={22} className="text-[#D62828]" />,
    col1: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT & Auth Pipelines'],
    col2: ['API Middleware', 'Request Validation', 'Asynchronous I/O', 'Webhooks & Events'],
  },
  {
    id: 'database',
    title: 'Database & Cloud',
    callSign: 'DOMAIN 03 // DATA ARCHITECTURE',
    mastery: 90,
    icon: <Database size={22} className="text-[#D62828]" />,
    col1: ['MongoDB', 'Mongoose ODM', 'Firebase', 'Cloudinary'],
    col2: ['MySQL', 'PostgreSQL', 'Document Indexing', 'Aggregation Pipelines'],
  },
  {
    id: 'ai',
    title: 'AI & Modern Tools',
    callSign: 'DOMAIN 04 // INTELLIGENT SYSTEMS',
    mastery: 88,
    icon: <Sparkles size={22} className="text-[#D62828]" />,
    col1: ['OpenAI APIs', 'Gemini API', 'Cursor AI', 'Prompt Engineering'],
    col2: ['Vercel AI SDK', 'GitHub Copilot', 'Model Evaluation', 'Data Preprocessing'],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    callSign: 'DOMAIN 05 // SYSTEM PRINCIPLES',
    mastery: 95,
    icon: <Terminal size={22} className="text-[#D62828]" />,
    col1: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++'],
    col2: ['Java', 'C Language', 'SQL', 'Data Structures (DSA)'],
  },
  {
    id: 'devops',
    title: 'DevOps & Tooling',
    callSign: 'DOMAIN 06 // DEPLOYMENT & PIPELINES',
    mastery: 86,
    icon: <Rocket size={22} className="text-[#D62828]" />,
    col1: ['Git & GitHub', 'Postman APIs', 'npm & yarn', 'Vite & Webpack'],
    col2: ['Vercel Cloud', 'Netlify', 'VS Code Workspaces', 'CI/CD Workflows'],
  },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Total unique skills across all 6 cards
  const totalSkillsCount = useMemo(() => {
    return skillCards.reduce((acc, card) => acc + card.col1.length + card.col2.length, 0);
  }, []);

  // Filtered cards based on tab selection and search query
  const filteredCards = useMemo(() => {
    return skillCards
      .filter((card) => activeCategory === 'all' || card.id === activeCategory)
      .filter((card) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        const inTitle = card.title.toLowerCase().includes(q);
        const inCol1 = card.col1.some((s) => s.toLowerCase().includes(q));
        const inCol2 = card.col2.some((s) => s.toLowerCase().includes(q));
        return inTitle || inCol1 || inCol2;
      });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="skills"
      aria-label="Technical Skills Section"
      className="py-24 sm:py-32 bg-[#F5F3EF] dark:bg-[#090B10] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D6D5D0] dark:border-[#2A303B]"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#D62828] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              <span>CAPABILITIES DIRECTORY // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-cinematic font-black text-4xl sm:text-5xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF]">
              TECHNICAL ARSENAL
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] max-w-md uppercase tracking-wider">
            PRODUCTION-GRADE MATRIX OF {totalSkillsCount}+ TECHNOLOGIES ORGANIZED INTO 6 ARCHITECTURAL DOMAINS.
          </p>
        </motion.div>


          

        {/* 6-Card Grid: Inspired by the User's Template with Cinematic Tech Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card, idx) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="rounded-2xl sm:rounded-3xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D62828] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* HUD Corner Reticles */}
                <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-[#D62828]/40 group-hover:border-[#D62828] transition-colors" />
                <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-[#D62828]/40 group-hover:border-[#D62828] transition-colors" />

                <div>
                  {/* Card Header: Icon + Title + Mastery Percentage */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icon Squircle Badge */}
                      <div className="w-12 h-12 rounded-2xl bg-[#D62828]/10 dark:bg-[#D62828]/15 border border-[#D62828]/25 flex items-center justify-center text-[#D62828] shrink-0 group-hover:scale-105 group-hover:border-[#D62828] transition-all">
                        {card.icon}
                      </div>

                      {/* Title & Call Sign */}
                      <div>
                        <h3 className="font-cinematic font-black text-xl sm:text-2xl tracking-wide uppercase text-[#151922] dark:text-[#F5F3EF] leading-tight">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                  
                  </div>
                  {/* 2-Column Bulleted Skills List */}
                  <div className="grid grid-cols-2 gap-x-5 pt-1 pb-4">
                    {/* Left Column */}
                    <div className="space-y-2.5">
                      {card.col1.map((skill) => {
                        const isMatch = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                        return (
                          <div key={skill} className="flex items-center gap-2 group/item">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform ${
                                isMatch ? 'bg-[#FF4D4D] scale-150' : 'bg-[#D62828] group-hover/item:scale-125'
                              }`}
                            />
                            <span
                              className={`text-xs sm:text-sm font-sans font-medium transition-colors truncate ${
                                isMatch
                                  ? 'text-[#D62828] font-bold'
                                  : 'text-[#151922] dark:text-[#D5DBE5] group-hover/item:text-[#D62828] dark:group-hover/item:text-[#F5F3EF]'
                              }`}
                            >
                              {skill}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-2.5">
                      {card.col2.map((skill) => {
                        const isMatch = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                        return (
                          <div key={skill} className="flex items-center gap-2 group/item">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform ${
                                isMatch ? 'bg-[#FF4D4D] scale-150' : 'bg-[#D62828] group-hover/item:scale-125'
                              }`}
                            />
                            <span
                              className={`text-xs sm:text-sm font-sans font-medium transition-colors truncate ${
                                isMatch
                                  ? 'text-[#D62828] font-bold'
                                  : 'text-[#151922] dark:text-[#D5DBE5] group-hover/item:text-[#D62828] dark:group-hover/item:text-[#F5F3EF]'
                              }`}
                            >
                              {skill}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search State */}
        {filteredCards.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-dashed border-[#D6D5D0] dark:border-[#2A303B] mt-6">
            <Search size={28} className="mx-auto text-[#5E6672] mb-3" />
            <h4 className="font-cinematic font-bold text-xl uppercase tracking-wider text-[#151922] dark:text-[#F5F3EF]">
              NO CAPABILITIES MATCHING &ldquo;{searchQuery}&rdquo;
            </h4>
            <p className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] mt-1">
              Try searching for another keyword or reset the category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#D62828] text-white text-xs font-mono uppercase tracking-wider font-bold shadow-md shadow-[#D62828]/25"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;