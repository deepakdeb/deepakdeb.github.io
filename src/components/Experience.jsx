import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Codeboxr',
      role: 'Senior Software Engineer',
      period: 'September 2023 – Present',
      highlights: [
        'Architecting multi-module SaaS platform with Social Media Management featuring RBAC system',
        'Integrated Stripe Payment Gateway API for seamless payment and refund processing',
        'Implemented diverse SMTP APIs (Mailtrap, Mailgun, SendGrid, Mailjet, Brevo) with webhook monitoring',
        'Led development team building e-commerce platform for virtual products with Paddle integration',
        'Developed event registration platform with streamlined UI for attendee management',
        'Built Resume Builder with optimized UX for document generation',
        'Created documentation sites using Vitepress with automated GitHub Actions deployment'
      ],
      projects: [
        { name: 'ComfortDots', url: 'https://www.comfortdots.com' },
        { name: 'ComfortHRM', url: 'https://comforthrm.com' },
        { name: 'ComfortERP', url: 'https://comforterp.com' },
        { name: 'Rhea BD', url: 'https://rheabd.org' }
      ],
      color: 'primary'
    },
    {
      company: 'Trenza Softwares',
      role: 'Software Engineer',
      period: 'July 2022 – August 2023',
      highlights: [
        'Designed key functionalities for building materials supplier platform using Laravel and Vue.js',
        'Implemented features for sports Learning Management System (LMS)',
        'Led database migration from Microsoft Access to MySQL with millions of records',
        'Developed e-commerce platform powered by Magento',
        'Created bKash payment gateway module for Magento 2'
      ],
      projects: [
        { name: 'Khelbei', url: 'https://www.khelbei.com' }
      ],
      color: 'accent'
    },
    {
      company: 'Zecodeek It Ltd',
      role: 'Software Engineer',
      period: 'November 2021 – June 2022',
      highlights: [
        'Developed e-portal using CodeIgniter backend and Angular frontend',
        'Integrated Phrase for multi-language functionality based on user location',
        'Implemented centralized repository architecture for multi-server data distribution'
      ],
      projects: [],
      color: 'primary'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Career Journey</p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`timeline-item timeline-${exp.color}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>

              <div className="timeline-content card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-period">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {exp.projects.length > 0 && (
                  <div className="experience-projects">
                    <p className="projects-label">Live Projects:</p>
                    <div className="projects-links">
                      {exp.projects.map((project, i) => (
                        <a
                          key={i}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {project.name}
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;