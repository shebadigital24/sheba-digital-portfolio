import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { NAV_LINKS } from '../../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="navbar-logo">
        <div className="icon" />
        SHEBA <span style={{ color: 'var(--plasma)', marginLeft: '6px' }}>DIGITAL</span>
      </div>


      {/* Desktop Links */}
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.name}>
            <a href={l.href}>{l.name}</a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <a href="#contact" className="nav-cta">Launch Project</a>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.name}>
                  <a 
                    href={l.href} 
                    onClick={() => setIsOpen(false)}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  className="btn-primary" 
                  style={{ display: 'block', textAlign: 'center', width: '100%', marginTop: '20px' }}
                  onClick={() => setIsOpen(false)}
                >
                  Launch Project
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

