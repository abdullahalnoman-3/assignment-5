import React from 'react';
import type { Technology } from '../types';
import { IoClose } from 'react-icons/io5';

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack: React.FC<YourStackProps> = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sticky top-24">
      <h3 className="text-xl font-bold mb-1">Your Stack</h3>
      <p className="text-gray-500 text-sm mb-6">
        {stack.length > 0 ? `${stack.length} Technology Selected` : 'No technologies selected yet.'}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl p-8 flex justify-center items-center text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div key={tech.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl shadow-sm bg-gray-50">
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="font-bold text-sm leading-none">{tech.name}</h4>
                  <span className="text-xs text-gray-500">{tech.category}</span>
                </div>
              </div>
              <button 
                onClick={() => onRemove(tech.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
              >
                <IoClose size={20} />
              </button>
            </div>
          ))}
          
          <button 
            onClick={onRemoveAll}
            className="btn btn-outline border-gray-200 text-red-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600 mt-4 w-full"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
