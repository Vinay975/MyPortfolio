import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Calendar,
  MapPin,
  Award,
  FileText,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Sparkles,
  Briefcase,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { internships, certificates } from '../data/portfolioData';
import { playCinematicWhoosh } from '../utils/soundEffects';

// Enhanced tech stacks mapped per internship
const internshipTech: Record<number, string[]> = {
  1: ['React Native', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'Git', 'Agile Sprints'],
  2: ['React.js', 'React Native', 'MongoDB', 'Node.js', 'Express', 'MERN Stack', 'UI Architecture'],
};

const Experience: React.FC = () => {
  const [activeCertIssuer, setActiveCertIssuer] = useState<string>('all');
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  // Unique list of certification issuers
  const certIssuers = ['all', 'HackerRank', 'Cisco Networking Academy', 'GeeksforGeeks'];

  const filteredCerts = certificates.filter(
    (cert) => activeCertIssuer === 'all' || cert.issuer === activeCertIssuer
  );

  return (
    <section
      id="experience"
      aria-label="Field Records & Credentials Section"
      className="py-24 sm:py-32 bg-[#F5F3EF] dark:bg-[#090B10] transition-colors duration-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Tactical Label */}
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
              <span>DOSSIER // FIELD RECORDS & VERIFICATION</span>
            </div>
            <h2 className="font-cinematic font-black text-4xl sm:text-5xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF]">
              EXPERIENCE & FIELD RECORDS
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] max-w-sm uppercase tracking-wider">
            VERIFIED INDUSTRY APPRENTICESHIPS, MOBILE ARCHITECTURES & ACCREDITED CREDENTIALS.
          </p>
        </motion.div>

        {/* Executive Impact Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 font-mono text-xs"
        >
          <div className="p-4 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[#5E6672] dark:text-[#A5ACB8] block text-[10px] uppercase">SERVICE TIMELINE</span>
              <strong className="text-lg font-cinematic text-[#151922] dark:text-[#F5F3EF]">2+ ENGAGEMENTS</strong>
            </div>
            <Briefcase size={20} className="text-[#D62828]" />
          </div>

          <div className="p-4 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[#5E6672] dark:text-[#A5ACB8] block text-[10px] uppercase">CORE FOCUS</span>
              <strong className="text-lg font-cinematic text-[#151922] dark:text-[#F5F3EF]">REACT NATIVE & MERN</strong>
            </div>
            <Cpu size={20} className="text-[#D62828]" />
          </div>

          <div className="p-4 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[#5E6672] dark:text-[#A5ACB8] block text-[10px] uppercase">RECORD ID STATUS</span>
              <strong className="text-lg font-cinematic text-[#151922] dark:text-[#F5F3EF]">OFFICIALLY AUDITED</strong>
            </div>
            <ShieldCheck size={20} className="text-[#D62828]" />
          </div>

          <div className="p-4 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[#5E6672] dark:text-[#A5ACB8] block text-[10px] uppercase">ACCREDITATIONS</span>
              <strong className="text-lg font-cinematic text-[#151922] dark:text-[#F5F3EF]">{certificates.length} VERIFIED CERTS</strong>
            </div>
            <Award size={20} className="text-[#D62828]" />
          </div>
        </motion.div>

        {/* 1. Industry Experience Timeline with Animated Glowing Energy Conduit */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-10"
          >
            <div className="p-2.5 rounded-xl bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B]">
              <Building2 size={18} />
            </div>
            <h3 className="font-cinematic font-bold text-2xl tracking-wide uppercase text-[#151922] dark:text-[#F5F3EF]">
              SERVICE & APPRENTICESHIP TIMELINE
            </h3>
          </motion.div>

          {/* Energy Conduit Vertical Bar with Circuit Glow */}
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-1 before:bg-gradient-to-b before:from-[#D62828] before:via-[#D62828]/50 before:to-transparent before:rounded-full">
            {internships.map((internship, index) => {
              const isHovered = hoveredCardId === internship.id;
              const techList = internshipTech[internship.id] || [];

              return (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredCardId(internship.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="relative pl-10 sm:pl-14 group"
                >
                  {/* Glowing Conduit Connector Beacon Node */}
                  <div className="absolute left-2 sm:left-2.5 top-6 w-5 h-5 rounded-full border-2 border-white dark:border-[#090B10] bg-[#D62828] shadow-[0_0_15px_#D62828] -translate-x-1/2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 z-10">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    {isHovered && (
                      <span className="absolute -inset-1.5 rounded-full bg-[#D62828] animate-ping opacity-60" />
                    )}
                  </div>

                  {/* Main Experience Card with HUD Styling */}
                  <div className="rounded-2xl sm:rounded-3xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 sm:p-8 hover:border-[#D62828] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#D62828]/5 relative overflow-hidden">
                    {/* HUD Tactical Corner Reticles */}
                    <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#D62828]/40 group-hover:border-[#D62828] transition-colors" />
                    <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#D62828]/40 group-hover:border-[#D62828] transition-colors" />
                    <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#D62828]/40 group-hover:border-[#D62828] transition-colors" />
                    <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#D62828]/40 group-hover:border-[#D62828] transition-colors" />

                    {/* Card Top Metadata Bar */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5 pb-5 border-b border-[#D6D5D0]/70 dark:border-[#2A303B]/70">
                      <div>
                        {/* Status Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-2.5 font-mono text-xs">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#D62828]/15 text-[#D62828] font-bold border border-[#D62828]/35 uppercase tracking-wide flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] animate-pulse" />
                            {internship.type}
                          </span>
                          {internship.employeeId && (
                            <span className="px-2 py-0.5 rounded-md bg-[#EAE8E2] dark:bg-[#10141C] text-[#5E6672] dark:text-[#A5ACB8] border border-[#D6D5D0] dark:border-[#2A303B] font-mono font-semibold">
                              RECORD ID: <span className="text-[#151922] dark:text-[#F5F3EF]">{internship.employeeId}</span>
                            </span>
                          )}
                        </div>

                        {/* Role Title */}
                        <h4 className="font-cinematic font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide text-[#151922] dark:text-[#F5F3EF] leading-tight">
                          {internship.role}
                        </h4>

                        {/* Company Badge */}
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="font-mono text-sm font-bold text-[#D62828]">
                            {internship.company}
                          </span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#EAE8E2] dark:bg-[#10141C] text-[#5E6672] dark:text-[#A5ACB8] border border-[#D6D5D0] dark:border-[#2A303B]">
                            VERIFIED CO.
                          </span>
                        </div>
                      </div>

                      {/* Date & Location Pill Badges */}
                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1.5 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EAE8E2] dark:bg-[#10141C] border border-[#D6D5D0] dark:border-[#2A303B] text-[#151922] dark:text-[#F5F3EF] font-semibold">
                          <Calendar size={13} className="text-[#D62828]" />
                          {internship.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs">
                          <MapPin size={13} className="text-[#D62828]" />
                          {internship.location}
                        </span>
                      </div>
                    </div>

                    {/* Executive Summary */}
                    <p className="text-sm sm:text-base text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed mb-6 font-sans">
                      {internship.description}
                    </p>

                    {/* Technologies Deployed Pill Matrix */}
                    {techList.length > 0 && (
                      <div className="mb-6 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-[#D62828] uppercase tracking-wider font-semibold mr-1 flex items-center gap-1">
                          <Sparkles size={13} />
                          DEPLOYED STACK:
                        </span>
                        {techList.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#EAE8E2] dark:bg-[#10141C] border border-[#D6D5D0] dark:border-[#2A303B] text-xs font-mono text-[#151922] dark:text-[#F5F3EF] hover:border-[#D62828] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Key Responsibilities & Directives (2-Column Grid) */}
                    <div className="mb-6 pt-5 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#D62828] block mb-3 font-bold flex items-center gap-1.5">
                        <Layers size={13} />
                        SCOPE OF MISSION & OPERATIONAL DIRECTIVES:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {internship.keyResponsibilities.map((resp, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-[#F5F3EF]/60 dark:bg-[#10141C]/60 border border-[#D6D5D0]/60 dark:border-[#2A303B]/60 hover:border-[#D62828]/60 transition-all flex items-start gap-2.5 group/item"
                          >
                            <div className="w-5 h-5 rounded-full bg-[#D62828]/15 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#D62828] transition-colors">
                              <CheckCircle2 size={13} className="text-[#D62828] group-hover/item:text-white transition-colors" />
                            </div>
                            <span className="text-xs sm:text-sm text-[#151922] dark:text-[#E2E8F0] leading-snug">
                              {resp}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verified Certificate Proof Bar */}
                    {internship.certificate && (
                      <div className="pt-4 border-t border-[#D6D5D0] dark:border-[#2A303B] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8]">
                          <ShieldCheck size={16} className="text-[#287A55] dark:text-[#77C99C]" />
                          <span>INSTITUTIONALLY VERIFIED SERVICE RECORD // AUDITED</span>
                        </div>
                        <a
                          href={internship.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playCinematicWhoosh()}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D62828] hover:bg-[#A91F27] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shadow-[#D62828]/25 hover:shadow-[#D62828]/40 group/btn"
                        >
                          <FileText size={14} />
                          <span>VIEW ACCREDITED PDF</span>
                          <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. Accredited Credentials & Certifications Bento-Gallery */}
        <div id="certifications" className="pt-10 border-t border-[#D6D5D0] dark:border-[#2A303B]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B]">
                <Award size={18} />
              </div>
              <div>
                <h3 className="font-cinematic font-bold text-2xl tracking-wide uppercase text-[#151922] dark:text-[#F5F3EF]">
                  ACCREDITED CREDENTIALS & CERTIFICATIONS
                </h3>
                <span className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8]">
                  OFFICIAL INDUSTRY CERTIFICATIONS & COURSE COMPLETIONS
                </span>
              </div>
            </div>

            {/* Filter Tabs by Issuer */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar font-mono text-xs">
              {certIssuers.map((issuer) => {
                const label = issuer === 'all' ? `ALL (${certificates.length})` : issuer.split(' ')[0];
                const isActive = activeCertIssuer === issuer;
                return (
                  <button
                    key={issuer}
                    onClick={() => setActiveCertIssuer(issuer)}
                    className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all shrink-0 focus-visible:outline-none ${
                      isActive
                        ? 'bg-[#D62828] text-white font-bold shadow-sm shadow-[#D62828]/25'
                        : 'bg-[#EAE8E2] dark:bg-[#10141C] border border-[#D6D5D0] dark:border-[#2A303B] text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications Tactical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, index) => (
                <motion.div
                  key={cert.id + cert.name}
                  layout
                  initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 flex flex-col justify-between hover:border-[#D62828] transition-all duration-300 shadow-sm hover:shadow-lg group relative overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D62828]/30 to-transparent group-hover:via-[#D62828] transition-all" />

                  <div>
                    {/* Top Issuer Badge & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B] uppercase">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] flex items-center gap-1">
                        <Calendar size={11} className="text-[#D62828]" />
                        {cert.date}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h4 className="font-cinematic font-bold text-xl uppercase tracking-wide text-[#151922] dark:text-[#F5F3EF] mb-1.5 leading-snug group-hover:text-[#D62828] transition-colors">
                      {cert.name}
                    </h4>

                    {/* Issuer Monospace Callout */}
                    <p className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] mb-4">
                      VERIFIED PROVIDER: {cert.issuer.toUpperCase()}
                    </p>
                  </div>

                  {/* Verification Seal & PDF Action */}
                  <div className="pt-3.5 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#5E6672] dark:text-[#A5ACB8] flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-[#287A55] dark:text-[#77C99C]" />
                      ACCREDITED
                    </span>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playCinematicWhoosh()}
                      aria-label={`Open certificate for ${cert.name}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#D6D5D0] dark:border-[#2A303B] bg-[#F5F3EF] dark:bg-[#10141C] hover:border-[#D62828] text-xs font-mono font-bold uppercase tracking-wider text-[#151922] dark:text-[#F5F3EF] hover:text-[#D62828] transition-all group/link"
                    >
                      <span>VIEW PDF</span>
                      <ChevronRight size={12} className="text-[#D62828] group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;