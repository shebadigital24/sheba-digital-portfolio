import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Dumbbell, Car, Sparkles, ArrowUpRight } from 'lucide-react';

import { PROJECTS } from '../../constants';

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="section-top section-header">
        <div>
          <h2>Recent Projects</h2>
          <p>Real-world solutions delivered with our futuristic hybrid design philosophy.</p>
        </div>
        <div className="section-number">03</div>
      </div>

      <div className="recent-projects-grid">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={i}
            className="recent-project-card glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.25, duration: 0.6, ease: 'easeOut' }}
          >
            {/* Project Screenshot */}
            <div className="rp-image-container">
              <img src={p.image} alt={p.title} className="rp-screenshot" />
              <div className="rp-image-overlay">
                <motion.div
                  className="rp-badge"
                  style={{ '--accent': p.accent }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={14} />
                  {p.highlight}
                </motion.div>
                <motion.button
                  className="rp-launch-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUpRight size={22} />
                </motion.button>
              </div>
            </div>

            {/* Project Info */}
            <div className="rp-content">
              <div className="rp-meta">
                <span className="rp-category" style={{ color: p.accent }}>{p.category}</span>
                <p.icon size={18} style={{ color: p.accent }} />
              </div>

              <h3 className="rp-title">{p.title}</h3>
              <span className="rp-subtitle">{p.subtitle}</span>

              <p className="rp-desc">{p.desc}</p>

              <div className="rp-tech-stack">
                {p.tech.map(t => (
                  <span key={t} className="rp-tech-tag" style={{ borderColor: `${p.accent}40` }}>
                    {t}
                  </span>
                ))}
              </div>

              <motion.button
                className="rp-view-btn"
                style={{ '--accent': p.accent }}
                whileHover={{ x: 4 }}
              >
                View Case Study <ExternalLink size={14} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
