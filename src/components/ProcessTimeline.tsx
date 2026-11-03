import React from 'react';
import { PROCESS_STEPS } from '../data/constructionData';
import { CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Desktop Horizontal View (>= lg) */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative">
        {/* Subtle horizontal connecting line behind the step indicators */}
        <div className="absolute top-6 left-8 right-8 h-0.5 bg-slate-200 -z-0" />

        {PROCESS_STEPS.map((item) => (
          <div key={item.step} className="relative z-10 flex flex-col items-start group">
            {/* Step square indicator (Editorial sharp architecture) */}
            <div className="flex items-center justify-center w-12 h-12 rounded-none bg-white border-2 border-slate-300 group-hover:border-slate-900 group-hover:bg-slate-900 transition-all duration-200 shadow-xs mb-4">
              <span className="font-mono text-sm font-black text-slate-900 group-hover:text-amber-400 transition-colors">
                0{item.step}
              </span>
            </div>

            {/* Step Title */}
            <h3 className="text-sm font-bold uppercase tracking-tight text-slate-900 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              {item.description}
            </p>

            {/* Sub-deliverables list */}
            <div className="mt-auto pt-3 border-t border-slate-100 w-full space-y-1.5">
              {item.details.slice(0, 2).map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-tight">
                  <span className="w-1.5 h-1.5 bg-amber-500 shrink-0 mt-1" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tablet & Mobile Vertical Timeline (< lg) */}
      <div className="lg:hidden relative pl-6 border-l-2 border-slate-200 ml-3 space-y-8">
        {PROCESS_STEPS.map((item) => (
          <div key={item.step} className="relative group">
            {/* Step badge on timeline */}
            <div className="absolute -left-[35px] top-0 flex items-center justify-center w-8 h-8 rounded-none bg-white border-2 border-slate-300 group-hover:border-slate-900 group-hover:bg-slate-900 shadow-xs transition-colors">
              <span className="font-mono text-xs font-black text-slate-900 group-hover:text-amber-400">
                0{item.step}
              </span>
            </div>

            {/* Content card */}
            <div className="bg-white border border-slate-200 rounded-none p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest">Phase 0{item.step}</span>
                <span className="text-slate-300">•</span>
                <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {item.description}
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
