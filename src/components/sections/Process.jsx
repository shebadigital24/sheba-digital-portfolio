import React from 'react';
import { motion } from 'framer-motion';

import { PROCESS_STEPS } from '../../constants';


export default function Process() {
  return (
    <section className="section" id="process" style={{ background: 'rgba(10,10,26,0.4)' }}>
      <div className="section-top section-header">
        <div>
          <h2>How We Operate</h2>
          <p>A battle-tested process that turns complexity into clarity.</p>
        </div>
        <div className="section-number">05</div>
      </div>

      <div className="process-grid">
        {PROCESS_STEPS.map((s, i) => (
          <motion.div
            key={i}
            className="process-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            <div className="process-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
