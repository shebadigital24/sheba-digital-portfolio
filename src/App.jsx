import React, { Suspense, lazy } from 'react';

import Layout from './layouts/Layout';
import Scene from './components/canvas/Scene';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const Services = lazy(() => import('./components/sections/Services'));
const TechStack = lazy(() => import('./components/sections/TechStack'));
const Portfolio = lazy(() => import('./components/sections/Portfolio'));
const About = lazy(() => import('./components/sections/About'));
const Process = lazy(() => import('./components/sections/Process'));
const CTA = lazy(() => import('./components/common/CTA'));
export default function App() {
  return (
    <Layout>
      <Scene />
      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <About />
        <Process />
        <CTA />
      </Suspense>
    </Layout>
  );
}
