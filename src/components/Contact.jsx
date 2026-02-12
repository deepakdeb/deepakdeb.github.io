import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepakdeb001@gmail.com',
      link: 'mailto:deepakdeb001@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1846-510390',
      link: 'tel:+8801846510390'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dakshinkhan, Uttara, Dhaka-1230',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/deepakdeb',
      handle: '@deepakdeb'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/deepak-deb-nath',
      handle: '/deepak-deb-nath'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-description">
            I'm available on almost every social media platform. Feel free to message me,
            and I'll reply within 24 hours. I can help you with programming, web development,
            ML, AI, and open-source development.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="info-title">Contact Information</h3>
            <div className="info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="info-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="info-icon">
                    <info.icon size={20} />
                  </div>
                  <div className="info-content">
                    <p className="info-label">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="info-value info-link">
                        {info.value}
                      </a>
                    ) : (
                      <p className="info-value">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <social.icon size={24} />
                    <div>
                      <p className="social-label">{social.label}</p>
                      <p className="social-handle">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="cta-card card">
              <div className="cta-icon">
                <Send size={48} />
              </div>
              <h3 className="cta-title">Let's Work Together</h3>
              <p className="cta-text">
                I'm currently available for freelance work and full-time opportunities.
                If you have a project in mind or just want to chat about technology,
                feel free to reach out!
              </p>
              <a 
                href="mailto:deepakdeb001@gmail.com"
                className="btn btn-accent"
              >
                <Mail size={18} />
                Send Email
              </a>
            </div>

            <div className="availability-card card">
              <div className="availability-status">
                <div className="status-indicator status-available" />
                <span>Available for Work</span>
              </div>
              <p className="availability-text">
                Response time: <strong>Within 24 hours</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;