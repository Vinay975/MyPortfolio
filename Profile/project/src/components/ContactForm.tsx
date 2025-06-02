import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted with data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background/50 border border-green-500/30 rounded-lg p-6 text-center"
      >
        <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
        <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
        <p className="text-muted">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className={`input w-full ${errors.name ? 'border-red-500' : ''}`}
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            className={`input w-full ${errors.email ? 'border-red-500' : ''}`}
            placeholder="john@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-muted mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className={`input w-full ${errors.subject ? 'border-red-500' : ''}`}
          placeholder="Project Inquiry"
          {...register('subject', { required: 'Subject is required' })}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={`input w-full ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Hello, I'd like to talk about..."
          {...register('message', { 
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters'
            }
          })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      
      <motion.button
        type="submit"
        className="btn btn-primary w-full flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;