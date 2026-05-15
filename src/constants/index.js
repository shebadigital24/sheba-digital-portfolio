import { 
  Globe, 
  Layout, 
  Cpu, 
  Brain, 
  ShoppingCart, 
  Shield,
  Dumbbell,
  Car
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' }
];

export const SERVICES = [
  { 
    icon: Globe, 
    title: 'Business Websites', 
    desc: 'High-impact web presence for brands that want to stand out.',
    features: ['Corporate & Landing Pages', 'Portfolio Websites', 'Mobile-Responsive Design']
  },
  { 
    icon: Layout, 
    title: 'Web Applications', 
    desc: 'Complex digital systems engineered for business efficiency.',
    features: ['Management & Admin Panels', 'Booking Platforms', 'Custom Web Applications']
  },
  { 
    icon: Cpu, 
    title: 'Backend Engineering', 
    desc: 'Robust and secure server-side logic for data-intensive needs.',
    features: ['API & System Integration', 'Database Architecture', 'Secure Auth Systems']
  },
  { 
    icon: Brain, 
    title: 'UI/UX Design', 
    desc: 'Modern interfaces designed with a user-centric approach.',
    features: ['Modern User Interfaces', 'Mobile-First Layouts', 'Conversion-Focused Design']
  },
  { 
    icon: ShoppingCart, 
    title: 'E-Commerce Solutions', 
    desc: 'Scalable online stores built to maximize your sales growth.',
    features: ['Custom Storefronts', 'Payment Gateway Integration', 'Inventory Management']
  },
  { 
    icon: Shield, 
    title: 'Optimization & Security', 
    desc: 'Ensuring your systems are lightning fast and highly secure.',
    features: ['Performance Optimization', 'Security Audits', 'Core Web Vitals Improvement']
  },
];

export const PROJECTS = [
  {
    title: 'Impact Fitness Center',
    subtitle: 'Gym Management System',
    category: 'Web Application',
    image: '/projects/gym-management.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
    desc: 'A comprehensive gym management platform built with our signature futuristic hybrid design. Features immersive dark-mode UI with neon cyan and magenta accents, dynamic pricing tiers, biometric monitoring integration, and a sleek member portal — delivering a sci-fi-grade experience for a modern fitness brand.',
    icon: Dumbbell,
    accent: '#00f0ff',
    highlight: 'Futuristic Dark UI'
  },
  {
    title: 'Qintu Rent',
    subtitle: 'Premium Car Rental Website',
    category: 'Business Platform',
    image: '/projects/car-rental.png',
    tech: ['Django', 'React', 'PostgreSQL', 'Google OAuth'],
    desc: 'A premium car rental platform designed for Ethiopia\'s luxury vehicle market. Crafted with our hybrid design philosophy — blending cinematic hero visuals, elegant typography, and seamless booking flows. Complete with real-time fleet management, client authentication, and a refined reservation experience.',
    icon: Car,
    accent: '#a855f7',
    highlight: 'Premium Hybrid Design'
  }
];

export const FEATURES = [
  { 
    title: 'Modern Professional Design', 
    desc: 'We create high-end, bespoke interfaces that align with your brand identity and elevate user perception.' 
  },
  { 
    title: 'Scalable Architecture', 
    desc: 'Our systems are engineered to grow with your business, handling increasing traffic and data with ease.' 
  },
  { 
    title: 'Secure Development', 
    desc: 'Security is integrated at every level, from database encryption to advanced authentication protocols.' 
  },
  { 
    title: 'Performance Optimization', 
    desc: 'Deep-stack optimizations ensure lightning-fast load times and a seamless experience for all users.' 
  },
  { 
    title: 'Mobile-First Approach', 
    desc: 'Every product is designed and developed to perform perfectly across all modern mobile and desktop devices.' 
  },
  { 
    title: 'Transparent Communication', 
    desc: 'We maintain clear, consistent reporting throughout the lifecycle, ensuring you are always in the loop.' 
  },
];

export const TECH_STACK = [
  {
    name: 'Frontend',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React', 'Next.js']
  },
  {
    name: 'Backend',
    techs: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'MySQL']
  },
  {
    name: 'Tools',
    techs: ['GitHub', 'Figma', 'Docker', 'Postman']
  }
];

export const PROCESS_STEPS = [
  { num: '01', title: 'Discovery', desc: 'Detailed consultation to understand your business goals, target audience, and project requirements.' },
  { num: '02', title: 'Planning', desc: 'Developing a comprehensive project roadmap, defining technical architecture, and setting key milestones.' },
  { num: '03', title: 'Design', desc: 'Creating modern, user-focused UI/UX designs that align with your brand identity and user expectations.' },
  { num: '04', title: 'Development', desc: 'High-quality coding using modern technologies, ensuring scalability, performance, and clean architecture.' },
  { num: '05', title: 'Testing', desc: 'Rigorous quality assurance, security audits, and performance testing to ensure a flawless user experience.' },
  { num: '06', title: 'Launch & Support', desc: 'Professional deployment followed by continuous monitoring and ongoing technical support for your growth.' },
];

export const COMPANY_INFO = {
  name: 'SHEBA DIGITAL SOLUTIONS',
  shortName: 'SHEBA DIGITAL',
  email: 'shebadigital24@gmail.com',
  telegram: 'https://t.me/shebadigital',
  github: 'https://github.com/shebadigital',
  linkedin: 'https://linkedin.com/company/shebadigital',
  tagline: 'Engineering the future with AI automation, cloud scaling, and cyber resilience solutions.'
};
