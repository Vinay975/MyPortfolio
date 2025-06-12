import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, ExternalLink, Mail } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'UI/UX Designer',
        'Problem Solver'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent-cyan/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-pink/10 rounded-full blur-[100px]"
        />
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            variants={itemVariants}
            className="text-accent-cyan mb-4 font-medium flex items-center justify-center gap-2"
          >
            <Code size={20} />
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
              Vinay Tellagorla
            </span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8 h-[40px]"
          >
            <span ref={typedRef}></span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-muted max-w-2xl mx-auto mb-12"
          >
            I build exceptional digital experiences with modern technologies.
            Focused on creating intuitive, accessible, and performant web applications.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="btn btn-primary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn border border-gray-700 text-foreground hover:border-accent-pink hover:text-accent-pink hover:shadow-[0_0_10px_rgba(255,0,255,0.4)] inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="text-accent-cyan" size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;