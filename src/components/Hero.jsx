import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/deepakdeb', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/deepak-deb-nath', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:deepakdeb001@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="greeting-bracket">{'<'}</span>
            Hello World
            <span className="greeting-bracket">{' />'}</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm <span className="highlight">Deepak Deb Nath</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Senior Software Engineer
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Building scalable web applications and SaaS platforms with modern technologies.
            Specialized in full-stack development with 4+ years of experience in crafting
            exceptional digital experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a 
              href={process.env.REACT_APP_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FileText size={18} />
              View Resume
            </a>
            <button 
              className="btn btn-accent"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="visual-container">
            <div className="code-block">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span> = {'{'}
              </div>
              <div className="code-line code-indent">
                <span className="code-property">name</span>:{' '}
                <span className="code-string">'Deepak Deb Nath'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">role</span>:{' '}
                <span className="code-string">'Senior Software Engineer'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">skills</span>: [
              </div>
              <div className="code-line code-indent-2">
                <span className="code-string">'PHP'</span>,{' '}
                <span className="code-string">'Laravel'</span>,{' '}
                <span className="code-string">'Vue'</span>,
              </div>
              <div className="code-line code-indent-2">
                <span className="code-string">'React'</span>,{' '}
                <span className="code-string">'TypeScript'</span>,{' '}
                <span className="code-string">'Python'</span>
              </div>
              <div className="code-line code-indent">],</div>
              <div className="code-line code-indent">
                <span className="code-property">experience</span>:{' '}
                <span className="code-number">4</span>{' '}
                <span className="code-comment">// years</span>
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="scroll-line" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;