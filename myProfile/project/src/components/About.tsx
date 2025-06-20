import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Database, Globe } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies, creating seamless user experiences."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Building responsive mobile applications using React Native for iOS and Android platforms."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Proficient in designing and managing databases with MongoDB, MySQL, and Firebase."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "Modern web development using React, Node.js, and cloud deployment solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Quick Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-blue-600 dark:text-blue-400">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Info */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {education.degree}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{education.college}</p>
                  <p className="text-gray-600 dark:text-gray-400">{education.year}</p>
                  <p className="text-gray-600 dark:text-gray-400">GPA: {education.gpa}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Description and Highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Passionate Developer & Problem Solver
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  I'm a dedicated Full Stack Developer with a passion for creating innovative solutions 
                  that make a real impact. With hands-on experience in both web and mobile development, 
                  I enjoy tackling complex challenges and turning ideas into reality.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  My journey in software development has been driven by curiosity and a desire to 
                  continuously learn and grow. I specialize in the MERN stack and React Native, 
                  allowing me to build comprehensive solutions from concept to deployment.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mb-4">
                      {highlight.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;