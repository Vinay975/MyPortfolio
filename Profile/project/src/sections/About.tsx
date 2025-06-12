import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import photo from "./myphoto.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title section-title-gradient">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="h-70 rounded-2xl overflow-hidden border-2 border-gray-800 relative z-10">
                  <img
                    src={photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-accent-cyan/20 rounded-2xl blur-xl -z-10 translate-x-4 translate-y-4"></div>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed text-muted mb-6">
                Hello! I'm a passionate Fullstack developer and Coding. With a strong
                foundation in modern web technologies and a keen eye for design, I create engaging
                digital experiences that prioritize both functionality and aesthetics.
              </p>

              <p className="text-lg leading-relaxed text-muted mb-6">
                My journey in web development started in 2024, and since then, I've worked on a
                variety of projects ranging from interactive web applications to responsive e-commerce
                platforms. I specialize in React.js, TypeScript, and modern CSS frameworks, constantly
                learning and adapting to new technologies.
              </p>

              {/* <p className="text-lg leading-relaxed text-muted mb-8">
                When I'm not coding, you can find me [Your Hobbies/Interests]. I believe that these 
                diverse interests contribute to my creative problem-solving approach in development.
              </p> */}

              <motion.a
                href="/resume.pdf"
                download
                className="btn btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Download Resu
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;