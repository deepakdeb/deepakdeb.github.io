import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'SQL', level: 75 },
        { name: 'HTML/CSS', level: 85 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Laravel', level: 80 },
        { name: 'Vue.js', level: 80 },
        { name: 'React', level: 70 },
        { name: 'Next.js', level: 70 },
        { name: 'Angular', level: 60 },
        { name: 'Django', level: 60 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'RabbitMQ', level: 65 },
        { name: 'Vite', level: 70 },
        { name: 'GitHub Actions', level: 60 }
      ]
    }
  ];

  const technologies = [
    'Laravel', 'Vue', 'React', 'NextJs', 'Angular', 'TypeScript', 
    'PHP', 'Python', 'JavaScript', 'MySQL', 'Docker', 'Git',
    'Vuetify', 'Material UI', 'Bootstrap', 'SASS', 'Django',
    'RabbitMQ', 'Stripe', 'Paddle', 'Agile'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Technical Expertise</p>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.05 
                    }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      {/* <span className="skill-level">{skill.level}%</span> */}
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tech-cloud"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="tech-cloud-title">Technologies & Tools</h3>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-bubble"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.6 + index * 0.03,
                  type: "spring"
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;