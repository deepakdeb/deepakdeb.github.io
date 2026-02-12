import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Sc. in Computer Science and Engineering',
      institution: 'Ahsanullah University of Science and Technology',
      period: '2016 - 2021',
      grade: 'CGPA: 3.27/4.00',
      icon: GraduationCap
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Ideal College, Dhanmondi',
      period: '2013 - 2015',
      grade: 'GPA: 5.00/5.00',
      icon: Award
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Rokanpur High School, Lakshmipur',
      period: '2007 - 2012',
      grade: 'GPA: 5.00/5.00',
      icon: Award
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Academic Background</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="education-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-icon">
                <edu.icon size={32} />
              </div>

              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                
                <div className="education-details">
                  <div className="education-period">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="education-grade">{edu.grade}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;