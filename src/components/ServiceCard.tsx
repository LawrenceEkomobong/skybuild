import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Compass, 
  Hammer, 
  Layers, 
  ShieldCheck, 
  Truck, 
  ClipboardCheck, 
  Wrench, 
  ArrowRight,
  Check
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  showFeatures?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  showFeatures = false,
}) => {
  const getIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-slate-900 group-hover:text-amber-600 transition-colors' };
    switch (name) {
      case 'Building2':
        return <Building2 {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Hammer':
        return <Hammer {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      case 'ClipboardCheck':
        return <ClipboardCheck {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      default:
        return <Building2 {...props} />;
    }
  };

  return (
    <div className="group relative flex flex-col justify-between bg-white border border-slate-200 rounded-none p-6 sm:p-7 shadow-xs hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
      <div>
        {/* Header: Number and Icon */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-2xl font-black font-mono tracking-tighter text-amber-600">
            {service.number}
          </span>
          <div className="flex items-center justify-center w-10 h-10 bg-slate-100 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
            {getIcon(service.iconName)}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Optional features list */}
        {showFeatures && service.features && (
          <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start text-xs text-slate-600 gap-2">
                <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Link */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-amber-600 transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
