import React from 'react';
import { motion } from 'framer-motion';

import { COMPANY_INFO } from '../../constants';

const stats = [
  { value: '24/7', label: 'Support Availability' },
  { value: 'Fast', label: 'Service Delivery' },
];


export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-radial" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{ maxWidth: 900 }}
      >
        <motion.span
          className="hero-badge glass"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Premier Digital Engineering Firm
        </motion.span>

        <h1>
          Building Modern <span className="grad-text">Digital Solutions</span>
          <br />
          For Growing Businesses
        </h1>

        <p className="hero-sub">
          {COMPANY_INFO.name} creates scalable websites, business platforms, 
          management systems, and modern digital experiences engineered for 
          performance, security, and growth.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
            Explore Services
          </button>
          <button className="btn-ghost" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
        </div>

        <motion.div 
          className="hero-trust-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Modern Web Solutions • Secure Systems • Scalable Architecture
        </motion.div>
      </motion.div>

      <motion.div
        className="stats-bar"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2, delayChildren: 1 } }
        }}
      >
        {stats.map((s, i) => (
          <motion.div 
            className="stat" 
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}


