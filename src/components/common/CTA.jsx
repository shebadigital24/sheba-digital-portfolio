import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

const Github = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Youtube = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Tiktok = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <motion.div
        className="cta-box glass"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Let’s Build Something Exceptional Together</h2>
        <p>
          Have a project idea or business requirement? Let’s discuss how we can turn it into a modern digital solution.
        </p>
        
        <div className="hero-btns" style={{ marginBottom: 40 }}>
          <button className="btn-primary" onClick={() => window.location.href = `mailto:${COMPANY_INFO.email}`}>Contact Us</button>
          <button className="btn-ghost" onClick={() => window.location.href = COMPANY_INFO.telegram}>Start a Project</button>
        </div>

        <div className="cta-info-grid">
          <div className="cta-info-item">
            <Mail size={18} />
            <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </div>
          <div className="cta-info-item">
            <Phone size={18} />
            <a href="tel:+251991188727">+251 991 188 727</a>
          </div>
          <div className="cta-info-item">
            <Phone size={18} />
            <a href="tel:+251903714952">+251 903 714 952</a>
          </div>
          <div className="cta-info-item">
            <Send size={18} />
            <a href={COMPANY_INFO.telegram} target="_blank" rel="noopener noreferrer">@shebadigital</a>
          </div>
        </div>

        <div className="cta-socials-row">
          <a href={COMPANY_INFO.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub"><Github size={20} /></a>
          <a href={COMPANY_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><Linkedin size={20} /></a>
          <a href={COMPANY_INFO.youtube} target="_blank" rel="noopener noreferrer" className="social-link" title="YouTube"><Youtube size={20} /></a>
          <a href={COMPANY_INFO.tiktok} target="_blank" rel="noopener noreferrer" className="social-link" title="TikTok"><Tiktok size={20} /></a>
        </div>
      </motion.div>
    </section>
  );
}
