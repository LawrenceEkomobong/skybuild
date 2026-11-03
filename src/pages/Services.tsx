import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  CheckCircle2,
  HelpCircle,
  HardHat
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES_DATA, FAQ_DATA } from '../data/constructionData';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getServiceIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-slate-900' };
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

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.id === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=2000&q=80"
            alt="Construction machinery and engineering site"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
          <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-slate-900 border border-slate-700 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              COMPREHENSIVE CONSTRUCTION CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-[0.98]">
              WHAT WE DO. <br />
              <span className="text-transparent text-stroke-light">ENGINEERED</span> <span className="text-amber-500">SERVICES.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From new residential & commercial structures to civil infrastructure and industrial turnkey projects, SkyBuild delivers proven engineering methods and transparent execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services List in Detailed Alternating Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-20 lg:space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 border-b border-slate-200 pb-16 lg:pb-20 last:border-b-0 last:pb-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative aspect-16/11 sm:aspect-4/3 rounded-none overflow-hidden border border-slate-200 shadow-sm group bg-slate-100">
                      <img
                        src={service.image}
                        alt={`${service.title} by SkyBuild`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                      />
                      {/* Number overlay */}
                      <div className="absolute top-4 left-4 bg-slate-900 text-amber-400 px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase">
                        SERVICE {service.number}
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-none bg-slate-100 border border-slate-200">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                        CAPABILITY {service.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
                      {service.title}
                    </h2>

                    <p className="mt-2 text-base font-semibold text-slate-700">
                      {service.shortDesc}
                    </p>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features and Deliverables */}
                    <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[10px] font-bold font-mono tracking-widest uppercase text-slate-900 mb-3">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-bold font-mono tracking-widest uppercase text-slate-900 mb-3">
                          Typical Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <span className="w-1.5 h-1.5 bg-amber-500 shrink-0 mt-1.5" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Request Quote Button */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button
                        variant="accent"
                        size="md"
                        onClick={() => navigate(`/contact?service=${encodeURIComponent(service.title)}`)}
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Request Quote for {service.title}
                      </Button>
                      <Button
                        variant="outline"
                        size="md"
                        to="/projects"
                      >
                        View Related Projects
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            align="center"
            label="CLIENT GUIDANCE"
            title="Frequently Asked Questions"
            description="Answers to common questions regarding construction costs, permits, project timelines, and quality assurances."
            className="mb-12 text-center mx-auto"
          />

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-none overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <span className={`w-6 h-6 rounded-none flex items-center justify-center text-slate-400 shrink-0 text-xs font-mono font-bold transition-transform ${isOpen ? 'rotate-180 text-amber-600' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-xs sm:text-sm text-slate-500">
            Have a specialized engineering or commercial query?{' '}
            <button
              onClick={() => navigate('/contact')}
              className="text-slate-900 font-bold hover:text-amber-600 underline cursor-pointer uppercase tracking-wider"
            >
              Contact our estimating desk directly
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <span className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-3">
            INTEGRATED CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            Need Multiple Construction Capabilities Integrated?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            SkyBuild specializes in single-source turnkey delivery where civil, structural, architectural, and MEP trades are managed under one unified contract.
          </p>
          <div className="mt-8">
            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate('/contact?intent=quote')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Project Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
