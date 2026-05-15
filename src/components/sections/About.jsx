import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

import { FEATURES, COMPANY_INFO } from '../../constants';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-top section-header">
        <div>
          <h2>About {COMPANY_INFO.shortName}</h2>
          <p>
            {COMPANY_INFO.name} is focused on building reliable, scalable, and modern digital systems 
            that help businesses strengthen their online presence and improve operational efficiency.
          </p>
        </div>
        <div className="section-number">04</div>
      </div>

      <div className="about-grid-new">
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            className="about-feature-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="check"><CheckCircle size={20} /></div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="about-mission-grid">
        <div className="mission-card glass">
          <h4>Our Mission</h4>
          <p>To empower businesses by engineering robust digital ecosystems that drive innovation and sustainable growth.</p>
        </div>
        <div className="mission-card glass">
          <h4>Our Vision</h4>
          <p>To be the premier partner for enterprises seeking to dominate their industries through superior technical execution.</p>
        </div>
        <div className="mission-card glass">
          <h4>Core Values</h4>
          <ul className="values-list">
            <li>Excellence in Engineering</li>
            <li>Radical Transparency</li>
            <li>Client-First Approach</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

