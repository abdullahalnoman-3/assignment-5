import React from 'react';
import type { Technology } from '../types';
import { FaStar } from 'react-icons/fa';

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechCard: React.FC<TechCardProps> = ({ tech, isAdded, onAdd }) => {
  return (
    <div className={`card bg-base-100 border shadow-sm hover:shadow-md transition-all duration-300 ${isAdded ? 'border-pink-500' : 'border-gray-100'}`}>
      <div className="card-body p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-[#f0f9ff] rounded-xl shrink-0">
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
            </div>
            <h2 className="text-xl font-bold sm:hidden">{tech.name}</h2>
          </div>
          <span className="badge bg-[#e0f2fe] border-transparent text-[#0284c7] font-bold px-4 py-3 rounded-full text-xs shrink-0">{tech.badge}</span>
        </div>
        
        <h2 className="card-title text-xl font-bold mb-2 hidden sm:flex">{tech.name}</h2>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[40px]">{tech.description}</p>
        
        <div className="flex justify-between items-center text-sm font-medium text-gray-500 mb-6 border-t border-gray-100 pt-4 sm:border-t-0 sm:pt-0 mt-4 sm:mt-0">
          <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md">{tech.category}</div>
          <div>{tech.difficulty}</div>
          <div className="flex items-center gap-1 text-orange-500 font-semibold">
            <FaStar />
            <span>{tech.rating}</span>
          </div>
        </div>
        
        <button 
          onClick={() => onAdd(tech)} 
          disabled={isAdded}
          className={`btn w-full ${isAdded ? '!bg-transparent !text-pink-600 !border-none !shadow-none font-bold !opacity-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
