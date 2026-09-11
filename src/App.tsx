import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';

import type { Technology } from './types';

const App: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/technologies.json');
        const data = await response.json();
        setTechnologies(data);
        
        // Preloader
        setTimeout(() => setLoading(false), 800);
      } catch (error) {
        toast.error("Failed to load technologies data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToStack = (tech: Technology) => {
    if (stack.find(item => item.id === tech.id)) return;
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const removeFromStack = (id: string) => setStack(stack.filter(item => item.id !== id));
  const removeAll = () => setStack([]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center gap-6">
        <div className="flex gap-2 items-center animate-pulse">
          <div className="bg-gradient text-white font-bold p-2 rounded-xl text-3xl">DS</div>
          <span className="font-bold text-4xl">Dev<span className="text-pink-500">Stack</span></span>
        </div>
        <span className="loading loading-spinner loading-lg text-pink-500"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 lg:px-12 py-8 lg:py-16">
        <div className="text-center lg:text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Explore the <span className="text-pink-500">Technologies</span></h2>
          <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map(tech => (
                <TechCard key={tech.id} tech={tech} isAdded={stack.some(item => item.id === tech.id)} onAdd={addToStack} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/4">
            <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
          </div>
        </div>
      </main>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default App;