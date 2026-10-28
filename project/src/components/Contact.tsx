import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, ArrowUpRight, AlertCircle, Radio } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playCinematicEnter } from '../utils/soundEffects';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Operative full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Secure email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid transmission address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject directive is required';
    if (!formData.message.trim()) {
      errs.message = 'Transmission payload cannot be empty';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide detailed requirements (minimum 15 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      playCinematicEnter();
      const subject = encodeURIComponent(`[Directive Inquiry] ${formData.subject.trim()}`);
      const body = encodeURIComponent(
        `OPERATIVE: ${formData.name.trim()}\n` +
        `COMMUNICATION FREQUENCY: ${formData.email.trim()}\n\n` +
        `MISSION DIRECTIVE:\n${formData.message.trim()}\n\n` +
        `Dispatched via Vinay Tellagorla Cinematic Portfolio Terminal`
      );
      const mailtoUri = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      await new Promise((resolve) => setTimeout(resolve, 600));
      window.location.href = mailtoUri;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-24 sm:py-32 bg-[#EAE8E2] dark:bg-[#10141C] border-t border-[#D6D5D0] dark:border-[#2A303B] transition-colors duration-200"
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
              <span>DIRECT CHANNELS // SECURE COMMS</span>
            </div>
            <h2 className="font-cinematic font-black text-4xl sm:text-5xl tracking-wider uppercase text-[#151922] dark:text-[#F5F3EF]">
              LET&apos;S BUILD SOMETHING EXTRAORDINARY
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] max-w-sm uppercase tracking-wider">
            DIRECT FREQUENCIES ACTIVE FOR FULL-TIME ROLES, ARCHITECTURAL COLLABORATIONS & INQUIRIES.
          </p>
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Coordinates & Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-cinematic font-bold text-2xl uppercase tracking-wide text-[#151922] dark:text-[#F5F3EF] mb-2">
                  MISSION READINESS: AVAILABLE
                </h3>
                <p className="text-sm text-[#5E6672] dark:text-[#A5ACB8] leading-relaxed font-sans">
                  Whether you are seeking a Full Stack Software Engineer to architect mission-critical React/Node.js systems,
                  lead cross-platform mobile apps in React Native, or scale modern cloud applications, my channel is open.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-4 border-t border-[#D6D5D0] dark:border-[#2A303B]">
                {/* Email Item */}
                <div className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-4 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#D62828] block font-bold">
                        DIRECT FREQUENCY // EMAIL
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-mono font-medium text-[#151922] dark:text-[#F5F3EF] hover:text-[#D62828] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-[#D6D5D0] dark:border-[#2A303B] text-[#5E6672] dark:text-[#A5ACB8] hover:text-[#151922] dark:hover:text-[#F5F3EF] transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-[#D62828]" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-4 flex items-center gap-3 shadow-sm">
                  <div className="p-2 rounded-lg bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D62828] block font-bold">
                      TELECOM / WHATSAPP
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-mono font-medium text-[#151922] dark:text-[#F5F3EF] hover:text-[#D62828] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-4 flex items-center gap-3 shadow-sm">
                  <div className="p-2 rounded-lg bg-[#EAE8E2] dark:bg-[#10141C] text-[#D62828] border border-[#D6D5D0] dark:border-[#2A303B]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D62828] block font-bold">
                      HEADQUARTERS
                    </span>
                    <span className="text-sm font-mono font-medium text-[#151922] dark:text-[#F5F3EF]">
                      {personalInfo.location} (OPEN TO RELOCATION & REMOTE MISSIONS)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Social Links */}
            <div className="pt-6 border-t border-[#D6D5D0] dark:border-[#2A303B]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D62828] block mb-3 font-bold">
                ENCRYPTED NETWORKS:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#151922] dark:text-[#F5F3EF] hover:border-[#D62828] text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Github size={16} />
                  <span>GITHUB</span>
                  <ArrowUpRight size={13} className="opacity-70 text-[#D62828]" />
                </a>

                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] text-[#151922] dark:text-[#F5F3EF] hover:border-[#D62828] text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Linkedin size={16} />
                  <span>LINKEDIN</span>
                  <ArrowUpRight size={13} className="opacity-70 text-[#D62828]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Terminal Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-[#D6D5D0] dark:border-[#2A303B] bg-white dark:bg-[#171C25] p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
              {/* Corner HUD Bracket */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D62828]" />

              <div className="flex items-center gap-2 font-mono text-xs text-[#D62828] mb-1 font-bold">
                <Radio size={14} className="animate-pulse" />
                <span>COMMS TERMINAL // DIRECT TRANSMISSION</span>
              </div>
              <h3 className="font-cinematic font-black text-2xl sm:text-3xl uppercase tracking-wide text-[#151922] dark:text-[#F5F3EF] mb-2">
                TRANSMIT MISSION BRIEFING
              </h3>
              <p className="font-mono text-xs text-[#5E6672] dark:text-[#A5ACB8] mb-6">
                All transmissions formatted directly to verified mail handler. Zero spam scripts.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[#151922] dark:text-[#F5F3EF] mb-1.5"
                    >
                      Operative Name <span className="text-[#D62828]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Commander Stark"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#F5F3EF] dark:bg-[#090B10] text-[#151922] dark:text-[#F5F3EF] placeholder-[#5E6672]/50 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-[#D6D5D0] dark:border-[#2A303B] focus:border-[#D62828] focus:ring-[#D62828]/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-mono text-[11px] text-[#D62828] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[#151922] dark:text-[#F5F3EF] mb-1.5"
                    >
                      Transmission Address <span className="text-[#D62828]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="operative@domain.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#F5F3EF] dark:bg-[#090B10] text-[#151922] dark:text-[#F5F3EF] placeholder-[#5E6672]/50 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-[#D6D5D0] dark:border-[#2A303B] focus:border-[#D62828] focus:ring-[#D62828]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 font-mono text-[11px] text-[#D62828] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-[#151922] dark:text-[#F5F3EF] mb-1.5"
                  >
                    Mission Directive / Subject <span className="text-[#D62828]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Senior Full Stack Engineering Mission / Strategic Inquiry"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#F5F3EF] dark:bg-[#090B10] text-[#151922] dark:text-[#F5F3EF] placeholder-[#5E6672]/50 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-red-500 focus:ring-red-500/30'
                        : 'border-[#D6D5D0] dark:border-[#2A303B] focus:border-[#D62828] focus:ring-[#D62828]/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 font-mono text-[11px] text-[#D62828] flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-[#151922] dark:text-[#F5F3EF] mb-1.5"
                  >
                    Payload Specifications <span className="text-[#D62828]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide overview of team, mission scope, stack, or timeline..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#F5F3EF] dark:bg-[#090B10] text-[#151922] dark:text-[#F5F3EF] placeholder-[#5E6672]/50 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500/30'
                        : 'border-[#D6D5D0] dark:border-[#2A303B] focus:border-[#D62828] focus:ring-[#D62828]/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono text-[11px] text-[#D62828] flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#D62828] hover:bg-[#A91F27] text-white font-cinematic font-bold text-base tracking-wider uppercase shadow-lg shadow-[#D62828]/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? 'DISPATCHING PAYLOAD...' : 'TRANSMIT DIRECTIVE'}</span>
                  </button>

                  <span className="font-mono text-[11px] text-[#5E6672] dark:text-[#A5ACB8] uppercase">
                    DIRECT DISPATCH · ENCRYPTION READY
                  </span>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-[#D62828]/15 border border-[#D62828]/30 text-[#D62828] font-mono text-xs flex items-center gap-2">
                    <Check size={16} className="shrink-0" />
                    <span>Directive queued! Default mail handler triggered with your encrypted briefing.</span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;