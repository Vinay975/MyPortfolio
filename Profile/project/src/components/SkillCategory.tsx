import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="card"
    >
      <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-accent-cyan to-accent-pink bg-clip-text text-transparent">
        {title}
      </h3>
      
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-foreground/90">{skill.name}</span>
              <span className="text-muted">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-pink"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;