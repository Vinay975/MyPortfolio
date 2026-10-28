import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, Award, FileText, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { internships, certificates } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Field Records & Credentials Section"
      className="py-24 sm:py-32 bg-[#F5F3EF] dark:bg-[#090B10] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D6D5D0] dark:border-[#2A303B]"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#D62828] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D62828]" />
              <span>DOSSIER // FIELD RECORDS & VERIFICATION</span>
            </div>
            <h2 className="font-cinematic font-black text-4xl sm:text-5xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF]">
              FIELD RECORDS
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] max-w-sm uppercase tracking-wider">
            VERIFIED INDUSTRY APPRENTICESHIPS & INSTITUTIONAL CREDENTIALS.
          </p>
        </motion.div>

        {/* 1. Industry Experience Timeline with Energy Conduit */}
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

          {/* Energy Conduit Vertical Bar */}
          <div className="space-y-10 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-[#D62828] before:via-[#D62828]/40 before:to-transparent">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-9 sm:pl-12 group"
              >
                {/* Glowing Conduit Connector Node */}
                <div className="absolute left-1.5 sm:left-2.5 top-3 w-4 h-4 rounded-full border-2 border-white dark:border-[#090B10] bg-[#D62828] shadow-[0_0_12px_#D62828] -translate-x-1/2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <div className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 sm:p-8 hover:border-[#D62828] transition-all shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs text-[#D62828]">
                        <span className="px-2.5 py-0.5 rounded bg-[#D62828]/15 font-bold border border-[#D62828]/30 uppercase">
                          {internship.type}
                        </span>
                        {internship.employeeId && (
                          <span className="text-[#5E6672] dark:text-[#A5ACB8] font-bold">
                            RECORD ID: {internship.employeeId}
                          </span>
                        )}
                      </div>

                      <h4 className="font-cinematic font-bold text-2xl sm:text-3xl uppercase tracking-wide text-[#151922] dark:text-[#F5F3EF]">
                        {internship.role}
                      </h4>

                      <p className="font-mono text-sm font-semibold text-[#D62828] mt-0.5">
                        {internship.company}
                      </p>
                    </div>

                    <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1.5 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8]">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EAE8E2] dark:bg-[#10141C] border border-[#D6D5D0] dark:border-[#2A303B]">
                        <Calendar size={13} className="text-[#D62828]" />
                        {internship.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {internship.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed mb-5 font-sans">
                    {internship.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-6 pt-4 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#D62828] block mb-2.5 font-bold">
                      SCOPE OF MISSION & DIRECTIVES:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {internship.keyResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#151922] dark:text-[#F5F3EF]">
                          <CheckCircle2 size={13} className="text-[#D62828] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Document Link */}
                  {internship.certificate && (
                    <div className="pt-4 border-t border-[#D6D5D0] dark:border-[#2A303B] flex items-center justify-between">
                      <span className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-[#D62828]" />
                        VERIFIED SERVICE RECORD
                      </span>
                      <a
                        href={internship.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm"
                      >
                        <FileText size={13} />
                        <span>VIEW DOCUMENT</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Accredited Credentials Gallery Bento-Grid */}
        <div id="certifications" className="pt-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8 pb-4 border-b border-[#D6D5D0] dark:border-[#2A303B]"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B]">
                <Award size={18} />
              </div>
              <h3 className="font-cinematic font-bold text-2xl tracking-wide uppercase text-[#151922] dark:text-[#F5F3EF]">
                ACCREDITED CREDENTIALS & CERTIFICATIONS
              </h3>
            </div>
            <span className="font-mono text-xs text-[#D62828] font-bold flex items-center gap-1">
              <Cpu size={13} />
              {certificates.length} VERIFIED CREDENTIALS
            </span>
          </motion.div>

          {/* Certifications Tactical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id + cert.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 flex flex-col justify-between hover:border-[#D62828] transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B] uppercase">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8]">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-cinematic font-bold text-xl uppercase tracking-wide text-[#151922] dark:text-[#F5F3EF] mb-1 leading-snug">
                    {cert.name}
                  </h4>

                  <p className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] mb-4">
                    ISSUED BY: {cert.issuer.toUpperCase()}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#D6D5D0]/60 dark:border-[#2A303B]/60 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#B9C1CC] flex items-center gap-1">
                    <ShieldCheck size={13} className="text-[#D62828]" />
                    ACCREDITED PDF
                  </span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open certificate for ${cert.name}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#D62828] hover:underline"
                  >
                    <span>VIEW PDF</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;