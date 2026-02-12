import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import './About.css';

const About = () => {
  const services = [
    {
      icon: Globe,
      title: 'Full Stack Development',
      description: 'Building responsive websites with secure database access and modern frameworks like Laravel, Vue, and React.'
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Developing, designing, and testing software with scalable architecture and clean code practices.'
    },
    {
      icon: Smartphone,
      title: 'SaaS Platforms',
      description: 'Creating multi-module SaaS applications with RBAC, payment integration, and cloud infrastructure.'
    },
    {
      icon: Database,
      title: 'Data Science & AI',
      description: 'Implementing deep learning models and AI-powered solutions for complex business problems.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Introduction</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-description">
              I'm a <strong>Computer Science graduate</strong> with a passion for solving complex 
              problems through technology. With over <strong>four years of professional experience</strong>, 
              I specialize in designing and developing dynamic web applications and e-commerce platforms.
            </p>
            <p className="about-description">
              I thrive in collaborative environments and enjoy taking on new challenges that push me 
              to grow both personally and professionally. My expertise spans across{' '}
              <strong>PHP, JavaScript, TypeScript, and Python</strong>, with deep knowledge in 
              frameworks like <strong>Laravel, Vue.js, React, and Django</strong>.
            </p>
            <p className="about-description">
              Currently working as a <strong>Senior Software Engineer at Codeboxr</strong>, where I 
              architect multi-module SaaS platforms, lead development teams, and implement cutting-edge 
              solutions for payment processing, email services, and cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="services-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;