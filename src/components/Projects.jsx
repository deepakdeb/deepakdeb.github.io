import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Chatbox',
      description: 'A foundation for building real-time chat application using Laravel, Laravel Reverb (Pusher alternative), and Vue 3.',
      tech: ['Laravel', 'Vue 3', 'Laravel Reverb', 'WebSockets'],
      github: 'https://github.com/deepakdeb',
      featured: true
    },
    {
      title: 'Amad - E-commerce Platform',
      description: 'Full-featured e-commerce site for furniture with SSLCommerz payment gateway integration.',
      tech: ['PHP', 'MySQL', 'SSLCommerz', 'JavaScript'],
      github: 'https://github.com/deepakdeb',
      featured: true
    },
    {
      title: 'Face Recognizer',
      description: 'Trained Neural Network model for recognizing faces using custom dataset with deep learning algorithms.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      github: 'https://github.com/deepakdeb/Face_Recognizer',
      featured: true
    },
    {
      title: 'Facial Expression Recognizer',
      description: 'Implemented effective ways to recognize emotions using deep learning with model comparison analysis.',
      tech: ['Python', 'Keras', 'CNN', 'Computer Vision'],
      github: '#',
      featured: false
    },
    {
      title: 'Blogit',
      description: 'Full-featured blogging website built with Django framework.',
      tech: ['Python', 'Django', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/deepakdeb/Blog',
      featured: false
    },
    {
      title: 'Paathshala',
      description: 'Reddit-inspired web application tailored for educational purposes with community features.',
      tech: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
      github: 'https://github.com/deepakdeb/PAATHSHALA_PHP',
      featured: false
    },
    {
      title: 'Quiz Scheduler',
      description: 'Web application for scheduling exams with notification features and automated reminders.',
      tech: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
      github: 'https://github.com/deepakdeb/Quiz_Scheduler-PHP-mysql',
      featured: false
    },
    {
      title: 'Patient Care',
      description: 'Hospital management system with personal medical history tracking.',
      tech: ['Java', 'NetBeans', 'MySQL', 'Swing'],
      github: 'https://github.com/deepakdeb/Patient_Care_JAVA-Netbeans-',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Personal</p>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="featured-project card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <Code size={24} />
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="other-projects-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Other Notable Projects
        </motion.h3>

        <div className="other-projects grid grid-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-card-header">
                <Code size={20} />
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>

              <h4 className="project-card-title">{project.title}</h4>
              <p className="project-card-description">{project.description}</p>

              <div className="project-card-tech">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-tag-small">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;