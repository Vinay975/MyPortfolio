import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, AlertCircle } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce stores with real-time analytics, inventory management, and order processing capabilities.',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines with drag-and-drop functionality and team collaboration features.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A weather application that provides accurate forecasts, real-time updates, and location-based weather information with interactive maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Weather API', 'Geolocation', 'PWA'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  {
    id: 4,
    title: 'Fitness Tracking Platform',
    description: 'A comprehensive fitness application for tracking workouts, nutrition, and progress with personalized recommendations and analytics.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Firebase', 'Redux', 'Health APIs'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A modern social media management platform with analytics, scheduling, and content management features.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate platform with property listings, virtual tours, and agent management system.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  {
    id: 7,
    title: 'Learning Management System',
    description: 'An educational platform with course management, student progress tracking, and interactive learning materials.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Redux', 'Express', 'MongoDB'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  {
    id: 8,
    title: 'AI Image Generator',
    description: 'A creative platform using AI to generate and manipulate images with various artistic styles and effects.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TensorFlow.js', 'WebGL', 'Node.js'],
    liveUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  }
];

const miniProjects = [
  {
    id: 9,
    title: 'Calculator App',
    description: 'Coming Soon - A modern calculator with advanced mathematical functions.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: 10,
    title: 'Todo List',
    description: 'Coming Soon - A minimalist todo list with local storage.',
    tags: ['React', 'LocalStorage', 'CSS'],
  },
  {
    id: 11,
    title: 'Notes App',
    description: 'Coming Soon - A simple note-taking application with markdown support.',
    tags: ['React', 'Markdown', 'CSS'],
  },
  {
    id: 12,
    title: 'Password Generator',
    description: 'Coming Soon - A secure password generator with customizable options.',
    tags: ['React', 'Crypto API', 'CSS'],
  }
];

const Projects = () => {
  const [selectedMiniProject, setSelectedMiniProject] = React.useState(null);
  const [visibleProjects, setVisibleProjects] = React.useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 4, projects.length));
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-accent-pink/5 rounded-full blur-[120px]"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title section-title-gradient">My Projects</h2>
          <p className="text-muted text-lg max-w-3xl mb-12">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems
            and showcase different skills and technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>

          {visibleProjects < projects.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-16"
            >
              <motion.button
                onClick={loadMoreProjects}
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Projects
              </motion.button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Mini Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {miniProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card card-hover cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                  }}
                  onClick={() => setSelectedMiniProject(project)}
                >
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-background border border-gray-700 px-2 py-1 rounded-full text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {selectedMiniProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedMiniProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background border border-gray-800 rounded-xl p-6 max-w-md w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 mb-4 text-accent-cyan">
                  <AlertCircle size={24} />
                  <h3 className="text-xl font-semibold">Coming Soon</h3>
                </div>
                <p className="text-muted mb-6">
                  This project is currently under development. Check back soon to see it in action!
                </p>
                <button
                  onClick={() => setSelectedMiniProject(null)}
                  className="btn btn-primary w-full"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn btn-primary"
            >
              <Github size={18} />
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;