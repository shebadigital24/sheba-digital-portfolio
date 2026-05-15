import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Brain, Server, Code, Layout, ShoppingCart, Cpu } from 'lucide-react';

import { SERVICES } from '../../constants';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: 'rgba(10,10,26,0.4)' }}>
      <div className="section-top section-header">
        <div>
          <h2>Strategic Services</h2>
          <p>We provide end-to-end technical solutions designed for modern business growth.</p>
        </div>
        <div className="section-number">01</div>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <motion.div
            key={i}
            className="service-card glass"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="service-icon">
              <s.icon size={24} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            
            <ul className="service-features-list">
              {s.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            <div className="service-link">Consult on this <span style={{ fontSize: '1.1rem' }}>→</span></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

