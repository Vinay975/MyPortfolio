import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, Award, Download, ExternalLink } from 'lucide-react';
import { internships, certificates } from '../data/portfolioData';

const Experience: React.FC = () => {
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

  const InternshipCard: React.FC<{ internship: typeof internships[0], index: number }> = ({ internship, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
              <Building size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {internship.role}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {internship.company}
              </p>
            </div>
          </div>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            {internship.type}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="text-sm">{internship.duration}</span>
          </div>
          {internship.employeeId && (
            <div className="flex items-center gap-2">
              <span className="text-sm">ID: {internship.employeeId}</span>
            </div>
          )}
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {internship.description}
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={internship.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
        >
          <ExternalLink size={16} />
          
          View Offer Letter
        </motion.a>
      </div>
    </motion.div>
  );

  const CertificateCard: React.FC<{ certificate: typeof certificates[0], index: number }> = ({ certificate, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg mb-1">
            {certificate.name}
          </h3>
          <p className="text-white/80 text-sm">
            {certificate.issuer} • {certificate.date}
          </p>
        </div>
        <div className="absolute top-4 right-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:bg-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Download size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
              My professional journey through internships, training programs, and certifications that have shaped my development skills.
            </p>
          </motion.div>

          {/* Internships Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                <Building size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Internships & Training
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {internships.map((internship, index) => (
                <InternshipCard key={internship.id} internship={internship} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white">
                <Award size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {certificates.map((certificate, index) => (
                <CertificateCard key={certificate.id} certificate={certificate} index={index} />
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Continuously learning and staying updated with the latest technologies
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <Award size={18} />
                View All Certificates
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;