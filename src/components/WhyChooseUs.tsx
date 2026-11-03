import React from 'react';
import { Users, Award, ShieldAlert, Clock, Check } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/constructionData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    const iconClasses = 'w-5 h-5 text-slate-900 group-hover:text-amber-600 transition-colors';
    switch (name) {
      case 'Users':
        return <Users className={iconClasses} />;
      case 'Award':
        return <Award className={iconClasses} />;
      case 'ShieldAlert':
        return <ShieldAlert className={iconClasses} />;
      case 'Clock':
        return <Clock className={iconClasses} />;
      default:
        return <Award className={iconClasses} />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {WHY_CHOOSE_US.map((item, idx) => (
        <div
          key={item.id}
          className="group flex flex-col justify-between bg-white border border-slate-200 rounded-none p-6 sm:p-7 shadow-xs hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center justify-center w-10 h-10 bg-slate-100 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                {getIcon(item.iconName)}
              </div>
              <span className="text-xl font-black font-mono text-slate-300 group-hover:text-amber-600 transition-colors">
                0{idx + 1}
              </span>
            </div>

            <h3 className="text-base font-bold uppercase tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-3">
              {item.description}
            </p>

            <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100">
              {item.longText}
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[10px] font-bold uppercase tracking-widest text-amber-700">
            <Check className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
            <span>SkyBuild Standard</span>
          </div>
        </div>
      ))}
    </div>
  );
};
