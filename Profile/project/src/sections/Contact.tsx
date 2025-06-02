import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    title: 'Email',
    content: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: <MapPin size={20} />,
    title: 'Location',
    content: 'City, Country',
    link: null
  },
  {
    icon: <Phone size={20} />,
    title: 'Phone',
    content: '+1 (123) 456-7890',
    link: 'tel:+11234567890'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-r from-accent-cyan/10 to-accent-pink/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title section-title-gradient">Get In Touch</h2>
          <p className="text-muted text-lg max-w-3xl mb-12">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            I'm always open to new ideas and collaborations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card flex flex-col items-center text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-gray-800 flex items-center justify-center mb-4 text-accent-cyan">
                  {info.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-muted hover:text-accent-cyan transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;