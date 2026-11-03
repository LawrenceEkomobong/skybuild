import React from 'react';
import { Star, Quote, Building } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col justify-between bg-white border border-slate-200 rounded-none p-6 sm:p-7 shadow-xs hover:border-slate-400 transition-all duration-200">
      <div>
        {/* Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < testimonial.rating
                    ? 'text-amber-500 fill-amber-500'
                    : 'text-slate-200 fill-slate-200'
                }`}
              />
            ))}
          </div>
          <Quote className="w-5 h-5 text-slate-300 rotate-180" />
        </div>

        {/* Feedback Content */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author & Project context */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {testimonial.name}
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {testimonial.role}, <span className="text-slate-800 font-semibold">{testimonial.company}</span>
            </p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
          <Building className="w-3 h-3 text-amber-600" />
          <span>Project: {testimonial.project}</span>
        </div>
      </div>
    </div>
  );
};
