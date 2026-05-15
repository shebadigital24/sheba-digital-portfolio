import React from 'react';
import { motion } from 'framer-motion';

import { TECH_STACK } from '../../constants';

export default function TechStack() {
  return (
    <section className="section" id="tech-stack">
      <div className="section-top section-header">
        <div>
          <h2>Our Technology Stack</h2>
          <p>We use modern technologies to build fast, scalable, and secure digital products.</p>
        </div>
        <div className="section-number">02</div>
      </div>

      <div className="tech-grid">
        {TECH_STACK.map((cat, i) => (
          <motion.div
            key={i}
            className="tech-category glass"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{cat.name}</h3>
            <div className="tech-list">
              {cat.techs.map((t, idx) => (
                <motion.span
                  key={idx}
                  className="tech-item"
                  whileHover={{ scale: 1.05, color: '#fff', borderColor: 'var(--plasma)' }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
