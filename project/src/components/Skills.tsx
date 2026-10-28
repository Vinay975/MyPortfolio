import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Wrench, Code2, Check, Cpu } from 'lucide-react';
import { skills, SkillItem } from '../data/portfolioData';

type SkillTab = 'all' | 'frontend' | 'backend' | 'database' | 'tools' | 'languages';

const categories = [
  { id: 'frontend', name: 'Frontend & Mobile', callSign: 'ARSENAL-01', icon: <Layout size={16} />, items: skills.frontend },
  { id: 'backend', name: 'Backend & APIs', callSign: 'ARSENAL-02', icon: <Server size={16} />, items: skills.backend },
  { id: 'database', name: 'Data Architecture', callSign: 'ARSENAL-03', icon: <Database size={16} />, items: skills.database },
  { id: 'tools', name: 'Tools & DevOps', callSign: 'ARSENAL-04', icon: <Wrench size={16} />, items: skills.tools },
  { id: 'languages', name: 'Core Languages', callSign: 'ARSENAL-05', icon: <Code2 size={16} />, items: skills.languages },
];

const tierStyles: Record<SkillItem['tier'], { badge: string; dot: string; bar: string }> = {
  Core: {
    badge: 'bg-[#D62828]/15 text-[#D62828] border-[#D62828]/35 font-bold',
    dot: 'bg-[#D62828]',
    bar: 'w-full bg-[#D62828]',
  },
  Advanced: {
    badge: 'bg-[#B9C1CC]/15 text-[#B9C1CC] border-[#2A303B] font-semibold',
    dot: 'bg-[#B9C1CC]',
    bar: 'w-4/5 bg-[#B9C1CC]',
  },
  Proficient: {
    badge: 'bg-black/10 dark:bg-white/5 text-[#5E6672] dark:text-[#A5ACB8] border-[#D6D5D0] dark:border-[#2A303B]',
    dot: 'bg-[#5E6672] dark:bg-[#A5ACB8]',
    bar: 'w-3/5 bg-[#5E6672] dark:bg-[#A5ACB8]',
  },
  Familiar: {
    badge: 'bg-black/5 dark:bg-white/5 text-[#5E6672] dark:text-[#A5ACB8] border-transparent',
    dot: 'bg-[#5E6672]',
    bar: 'w-2/5 bg-[#5E6672]/50',
  },
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillTab>('all');

  const filteredCategories = activeTab === 'all'
    ? categories
    : categories.filter((c) => c.id === activeTab);

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
              <span className="w-2 h-2 rounded-full bg-[#D62828]" />
              <span>CAPABILITIES DIRECTORY // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-cinematic font-black text-4xl sm:text-5xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF]">
              TECHNICAL ARSENAL
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] max-w-md uppercase tracking-wider">
            VERIFIED COMPETENCY LEVELS & CORE SYSTEM SPECIFICATIONS. ZERO FAKE POWER LEVELS.
          </p>
        </motion.div>

        {/* Tactical Discipline Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist" aria-label="Arsenal Categories">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] ${
              activeTab === 'all'
                ? 'bg-[#D62828] text-white font-bold shadow-md shadow-[#D62828]/25'
                : 'bg-white dark:bg-[#171C25] border border-[#D6D5D0] dark:border-[#2A303B] text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF]'
            }`}
          >
            ALL CAPABILITIES
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as SkillTab)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] ${
                activeTab === cat.id
                  ? 'bg-[#D62828] text-white font-bold shadow-md shadow-[#D62828]/25'
                  : 'bg-white dark:bg-[#171C25] border border-[#D6D5D0] dark:border-[#2A303B] text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF]'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Arsenal Directory Grid with Bento Card Architecture */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 sm:p-7 flex flex-col justify-between hover:border-[#D62828] transition-all shadow-sm group"
              >
                <div>
                  {/* Category Header with LED Indicator */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#D6D5D0] dark:border-[#2A303B]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B] group-hover:border-[#D62828]/50 transition-colors">
                        {category.icon}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#D62828] font-bold block uppercase tracking-wider">
                          {category.callSign}
                        </span>
                        <h3 className="font-cinematic font-bold text-xl tracking-wide uppercase text-[#151922] dark:text-[#F5F3EF]">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#5E6672] dark:text-[#A5ACB8] bg-[#EAE8E2] dark:bg-[#10141C] px-2 py-0.5 rounded border border-[#D6D5D0] dark:border-[#2A303B]">
                      <Cpu size={12} className="text-[#D62828]" />
                      <span>{category.items.length}</span>
                    </div>
                  </div>

                  {/* Skill Arsenal Item Cards */}
                  <ul className="space-y-4">
                    {category.items.map((skill) => {
                      const style = tierStyles[skill.tier];
                      return (
                        <li
                          key={skill.name}
                          className="p-3 rounded-xl bg-[#F5F3EF]/60 dark:bg-[#10141C]/60 border border-[#D6D5D0]/60 dark:border-[#2A303B]/60 hover:border-[#D62828]/40 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-sans font-bold text-sm text-[#151922] dark:text-[#F5F3EF]">
                              {skill.name}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border ${style.badge}`}
                            >
                              <span className={`w-1 h-1 rounded-full ${style.dot}`} />
                              {skill.tier}
                            </span>
                          </div>

                          <p className="font-mono text-[11px] text-[#5E6672] dark:text-[#A5ACB8] leading-snug mb-2">
                            {skill.focus}
                          </p>

                          {/* Tactical Capacity Micro-Bar */}
                          <div className="w-full h-1 bg-[#D6D5D0] dark:bg-[#2A303B] rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${style.bar}`} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60 flex items-center justify-between font-mono text-[11px] text-[#5E6672] dark:text-[#A5ACB8]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#287A55] dark:bg-[#77C99C] animate-pulse" />
                    STATUS: OPERATIONAL
                  </span>
                  <span className="text-[#D62828] flex items-center gap-1 font-bold">
                    <Check size={12} /> VERIFIED
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tiers Legend Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-4 sm:p-5 rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-[#EAE8E2]/60 dark:bg-[#10141C]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8]"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-[#151922] dark:text-[#F5F3EF]">ARSENAL RATINGS:</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
              <strong>CORE</strong> (Primary production mastery)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9C1CC]" />
              <strong>ADVANCED</strong> (Deep architectural experience)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E6672] dark:bg-[#A5ACB8]" />
              <strong>PROFICIENT</strong> (Battle-tested working knowledge)
            </span>
          </div>
          <span className="text-[11px] text-[#D62828] font-bold">
            100% RECRUITER VERIFIED // HONEST CAPABILITIES
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;