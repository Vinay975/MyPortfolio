import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <Github size={20} />, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: <Mail size={20} />, href: 'mailto:your.email@example.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-background/30 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted hover:text-accent-cyan transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <p className="text-center text-muted text-sm">
            Built with <Heart size={14} className="inline text-accent-pink mx-1" /> using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-center text-muted text-sm mt-2">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;