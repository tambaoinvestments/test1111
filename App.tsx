import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { Ecosystem } from './components/Ecosystem';
import { Values } from './components/Values';
import { Commitment } from './components/Commitment';
import { Footer } from './components/Footer';
import { ZaloButton } from './components/ZaloButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <VisionMission />
        <Ecosystem />
        <Values />
        <Commitment />
      </main>
      <Footer />
      <ZaloButton />
    </div>
  );
}

export default App;