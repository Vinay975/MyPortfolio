import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden rounded-lg mb-5 aspect-video">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 rounded-full text-accent-cyan hover:bg-accent-cyan hover:text-background transition-colors"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={18} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 rounded-full text-accent-cyan hover:bg-accent-cyan hover:text-background transition-colors"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.h3 
        className="text-xl font-semibold mb-2 text-foreground"
        whileHover={{ color: '#00FFFF' }}
      >
        {project.title}
      </motion.h3>
      
      <p className="text-muted mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, i) => (
          <motion.span 
            key={i} 
            className="text-xs bg-background border border-gray-700 px-2.5 py-1 rounded-full text-muted"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;