import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, ArrowUpRight, FolderGit2, Terminal, Sparkles, X, Shield, Globe } from 'lucide-react';
import { projects, miniProjects } from '../data/portfolioData';
import { getDialogue } from '../data/marvelDialogue';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'mini'>('featured');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [showEasterEgg, setShowEasterEgg] = useState<boolean>(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const categories = ['All', 'Full Stack', 'Frontend', 'Developer Tool'];
  const easterEgg = getDialogue('developerInitiative');

  const filteredFeatured = filterCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === filterCategory);

  return (
    <section
      id="projects"
      aria-label="Projects and Engineering Work"
      className="py-24 sm:py-32 bg-[#EAE8E2] dark:bg-[#10141C] border-y border-[#D6D5D0] dark:border-[#2A303B] transition-colors duration-200"
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
              <span>MISSION ARCHIVES // PRODUCTION PORTFOLIO</span>
            </div>
            <h2 className="font-cinematic font-black text-4xl sm:text-5xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF]">
              SELECTED PROJECTS
            </h2>
          </div>

          {/* View Switcher: Featured vs Mini */}
          <div
            role="tablist"
            aria-label="Projects mission view switcher"
            className="mt-6 md:mt-0 inline-flex p-1 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25]"
          >
            <button
              role="tab"
              id="tab-featured"
              aria-selected={activeTab === 'featured'}
              aria-controls="panel-featured"
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] ${
                activeTab === 'featured'
                  ? 'bg-[#D62828] text-white shadow-md shadow-[#D62828]/25'
                  : 'text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF]'
              }`}
            >
              PRIORITY MISSIONS ({featuredProjects.length})
            </button>
            <button
              role="tab"
              id="tab-mini"
              aria-selected={activeTab === 'mini'}
              aria-controls="panel-mini"
              onClick={() => setActiveTab('mini')}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] ${
                activeTab === 'mini'
                  ? 'bg-[#D62828] text-white shadow-md shadow-[#D62828]/25'
                  : 'text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF]'
              }`}
            >
              UTILITY DIRECTIVE ({miniProjects.length})
            </button>
          </div>
        </motion.div>

        {/* Tab Panel 1: Featured Missions */}
        {activeTab === 'featured' && (
          <div id="panel-featured" role="tabpanel" aria-labelledby="tab-featured">
            {/* Sector Sub-Filters & Discreet Easter Egg Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="font-mono text-xs text-[#D62828] uppercase tracking-wider mr-1 font-bold">
                  SECTOR:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] ${
                      filterCategory === cat
                        ? 'bg-[#151922] dark:bg-white text-white dark:text-[#090B10] font-bold'
                        : 'bg-white dark:bg-[#171C25] border border-[#D6D5D0] dark:border-[#2A303B] text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Unobtrusive Easter Egg Activation Trigger */}
              {easterEgg && (
                <button
                  onClick={() => setShowEasterEgg(!showEasterEgg)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[11px] font-mono text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#D62828] hover:border-[#D62828] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D62828]"
                  title="Discover developer philosophy"
                  aria-label={easterEgg.ariaLabel}
                  aria-expanded={showEasterEgg}
                >
                  <Terminal size={12} className="text-[#D62828]" />
                  <span>[ETHOS // DISCOVER]</span>
                </button>
              )}
            </div>

            {/* Revealed Easter Egg Banner */}
            <AnimatePresence>
              {showEasterEgg && easterEgg && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  role="region"
                  aria-label="Developer Ethos Easter Egg"
                  className="mb-8 p-4 sm:p-5 rounded-2xl border border-[#D62828]/50 bg-white dark:bg-[#171C25] shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#D62828]/15 text-[#D62828] border border-[#D62828]/30 shrink-0">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="font-cinematic font-bold text-xl sm:text-2xl tracking-wide uppercase text-[#151922] dark:text-white">
                        {easterEgg.quote}
                      </div>
                      <p className="font-sans text-xs text-[#5E6672] dark:text-[#A5ACB8] mt-0.5 max-w-2xl leading-relaxed">
                        {easterEgg.subtext}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowEasterEgg(false)}
                    className="self-end sm:self-center inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#D6D5D0] dark:border-[#2A303B] text-[11px] font-mono text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-white hover:border-[#D62828] transition-colors"
                    aria-label="Dismiss Easter egg"
                  >
                    <X size={12} />
                    <span>DISMISS</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Asymmetric Split-Deck Project Dossiers */}
            <div className="space-y-12 lg:space-y-16">
              {filteredFeatured.map((project, index) => {
                const isEven = index % 2 === 0;
                const missionCode = `MISSION 0${project.id}`;

                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 sm:p-8 lg:p-9 shadow-lg relative overflow-hidden group hover:border-[#D62828] transition-all"
                  >
                    {/* Mission Header Banner Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#D6D5D0] dark:border-[#2A303B]">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 bg-[#D62828] text-white font-mono text-[11px] uppercase tracking-widest font-bold rounded-lg shadow-sm">
                          {missionCode}
                        </span>
                        <span className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] uppercase tracking-wider">
                          SECTOR: {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-[11px] text-[#5E6672] dark:text-[#A5ACB8]">
                        <span className="w-2 h-2 rounded-full bg-[#287A55] dark:bg-[#77C99C] animate-pulse" />
                        <span className="text-[#151922] dark:text-[#F5F3EF] font-bold">
                          {project.metricsOrStatus || 'DEPLOYED // VERIFIED'}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                      {/* Left Frame: Simulated Terminal & Visual Interface (6 cols) */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative overflow-hidden rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-[#090B10] shadow-md">
                          {/* Terminal Window Header Bar */}
                          <div className="px-3.5 py-2.5 bg-[#10141C] border-b border-[#2A303B] flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#D62828]/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#E8B66B]/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#77C99C]/80" />
                            </div>
                            <span className="font-mono text-[10px] text-[#A5ACB8] truncate max-w-[220px]">
                              {project.live ? project.live.replace('https://', '') : `github.com/Vinay975/${project.title.toLowerCase()}`}
                            </span>
                            <Globe size={12} className="text-[#5E6672]" />
                          </div>

                          {/* Screenshot Container with Scanlines & Hover Zoom */}
                          <div className="relative overflow-hidden aspect-video bg-[#090B10]">
                            <img
                              src={project.image}
                              alt={`${project.title} Mission Screenshot`}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />

                            {/* Top-Right Quick Action Icons */}
                            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`View ${project.title} source code`}
                                  className="p-2 rounded-lg bg-[#090B10]/90 text-white border border-[#2A303B] hover:border-[#D62828] hover:text-[#D62828] transition-colors"
                                >
                                  <Github size={14} />
                                </a>
                              )}
                              {project.live && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`Open ${project.title} live demo`}
                                  className="p-2 rounded-lg bg-[#090B10]/90 text-white border border-[#2A303B] hover:border-[#D62828] hover:text-[#D62828] transition-colors"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Bottom Tactical Metadata Strip */}
                          <div className="px-3.5 py-2 bg-[#10141C] border-t border-[#2A303B] flex items-center justify-between text-[10px] font-mono text-[#A5ACB8]">
                            <span className="flex items-center gap-1.5 text-[#D62828]">
                              <Shield size={11} />
                              PRODUCTION DEPLOYMENT
                            </span>
                            <span className="text-[#B9C1CC]">LIVE METRICS READY</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Frame: Architectural Mission Dossier (6 cols) */}
                      <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div>
                          <div className="flex items-center gap-2 mb-1.5 font-mono text-xs">
                            <span className="text-[#D62828] font-bold uppercase">{project.category}</span>
                            <span className="text-[#5E6672] dark:text-[#A5ACB8]">·</span>
                            <span className="text-[#5E6672] dark:text-[#A5ACB8] uppercase">{project.subtitle}</span>
                          </div>

                          <h3 className="font-cinematic font-black text-3xl sm:text-4xl uppercase tracking-wide text-[#151922] dark:text-[#F5F3EF] mb-3 leading-tight">
                            {project.title}
                          </h3>

                          {/* Problem & Solution Asymmetric Cards */}
                          <div className="space-y-3 mb-5 font-sans">
                            <div className="p-3.5 rounded-xl bg-[#F5F3EF] dark:bg-[#10141C] border-l-2 border-[#D62828] text-xs">
                              <strong className="font-mono text-[#D62828] uppercase tracking-wider block mb-1">
                                [PROBLEM CONTEXT]:
                              </strong>
                              <p className="text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed">
                                {project.problem}
                              </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-[#F5F3EF] dark:bg-[#10141C] border-l-2 border-[#B9C1CC] text-xs">
                              <strong className="font-mono text-[#B9C1CC] uppercase tracking-wider block mb-1">
                                [MISSION ARCHITECTURE]:
                              </strong>
                              <p className="text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed">
                                {project.solution}
                              </p>
                            </div>
                          </div>

                          {/* Key Contributions Checklist */}
                          {project.contributions && (
                            <div className="mb-5 pt-3 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#D62828] block mb-2 font-bold">
                                KEY CONTRIBUTIONS & IMPLEMENTED ARTIFACTS:
                              </span>
                              <ul className="space-y-1.5">
                                {project.contributions.map((c, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs text-[#151922] dark:text-[#F5F3EF]">
                                    <CheckCircle2 size={13} className="text-[#D62828] shrink-0 mt-0.5" />
                                    <span>{c}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technology Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-md bg-[#EAE8E2] dark:bg-[#10141C] border border-[#D6D5D0] dark:border-[#2A303B] text-xs font-mono text-[#151922] dark:text-[#F5F3EF]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-4 border-t border-[#D6D5D0] dark:border-[#2A303B]">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D62828] hover:bg-[#A91F27] text-white font-cinematic font-bold text-sm tracking-wider uppercase shadow-md shadow-[#D62828]/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
                            >
                              <span>LAUNCH PREVIEW</span>
                              <ArrowUpRight size={15} />
                            </a>
                          )}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#151922] dark:text-[#F5F3EF] hover:border-[#D62828] font-cinematic font-bold text-sm tracking-wider uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828]"
                            >
                              <Github size={15} />
                              <span>VIEW CODEBASE</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab Panel 2: Mini Projects Utility Directive Bento-Grid */}
        {activeTab === 'mini' && (
          <div id="panel-mini" role="tabpanel" aria-labelledby="tab-mini">
            <div className="mb-6 font-mono text-xs uppercase tracking-wider text-[#D62828] font-bold">
              ACTIVE UTILITY DIRECTIVE ({miniProjects.length} TOOLS & EXPERIMENTS):
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {miniProjects.map((mini, index) => (
                <motion.div
                  key={mini.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-5 sm:p-6 flex flex-col justify-between hover:border-[#D62828] transition-all shadow-sm group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#D62828]/15 text-[#D62828] font-bold border border-[#D62828]/30">
                        {mini.category}
                      </span>
                      <FolderGit2 size={16} className="text-[#5E6672] dark:text-[#A5ACB8] group-hover:text-[#D62828] transition-colors" />
                    </div>

                    <h4 className="font-cinematic font-bold text-xl uppercase tracking-wider text-[#151922] dark:text-[#F5F3EF] mb-2">
                      {mini.name}
                    </h4>

                    <p className="text-xs text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed mb-3.5 font-sans">
                      {mini.description}
                    </p>

                    <div className="font-mono text-[11px] text-[#151922] dark:text-[#F5F3EF] mb-4 p-2 rounded-lg bg-[#EAE8E2] dark:bg-[#10141C] border border-[#D6D5D0] dark:border-[#2A303B]">
                      {mini.tech}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60 flex items-center justify-between">
                    <a
                      href={mini.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D62828] hover:underline"
                    >
                      <Github size={13} />
                      <span>REPOSITORY / DEMO</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Global Repository Footnote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-8 border-t border-[#D6D5D0] dark:border-[#2A303B] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs"
        >
          <p className="text-[#5E6672] dark:text-[#A5ACB8] uppercase tracking-wider">
            ALL CODE AND EXPERIMENTAL REPOSITORIES HOSTED PUBLICLY ON GITHUB.
          </p>
          <a
            href="https://github.com/Vinay975"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#151922] dark:text-[#F5F3EF] hover:border-[#D62828] hover:text-[#D62828] font-bold uppercase tracking-wider transition-colors"
          >
            <Github size={14} />
            <span>GITHUB.COM/VINAY975</span>
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;