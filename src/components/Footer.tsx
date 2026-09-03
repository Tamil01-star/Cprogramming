import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-white border-t border-slate-200 py-8 px-4 text-center">
      <div className="w-full space-y-2">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">
          C Programming Interview Notes
        </h3>
        <p className="text-xs text-slate-500">
          Simple notes for learning and interview preparation.
        </p>
        <p className="text-[11px] text-slate-400 font-mono pt-2">
          Curated from Campus Placement Mock Interview Bank • 201 Comprehensive Questions
        </p>
      </div>
    </footer>
  );
};
