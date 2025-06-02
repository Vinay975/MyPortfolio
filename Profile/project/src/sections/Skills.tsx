import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from '../components/SkillCategory';

const frontendSkills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3/SASS', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
];

const toolsSkills = [
  { name: 'Git & GitHub', level: 85 },
  { name: 'Webpack/Vite', level: 80 },
  { name: 'Jest/Testing Library', level: 75 },
  { name: 'Figma', level: 70 },
  { name: 'VS Code', level: 90 },
  { name: 'Chrome DevTools', level: 85 },
];

const otherSkills = [
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 70 },
  { name: 'MongoDB', level: 65 },
  { name: 'REST APIs', level: 80 },
  { name: 'GraphQL', level: 60 },
  { name: 'Responsive Design', level: 90 },
  { name: 'Performance Optimization', level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/3 left-1/4 w-1/3 h-1/3 bg-accent-cyan/5 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title section-title-gradient">Skills & Expertise</h2>
          <p className="text-muted text-lg max-w-3xl mb-12">
            I've worked with a variety of technologies and tools throughout my journey as a developer.
            Here's an overview of my technical skills and proficiency levels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0} />
            <SkillCategory title="Tools & Workflow" skills={toolsSkills} delay={0.2} />
            <SkillCategory title="Backend & Other" skills={otherSkills} delay={0.4} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;