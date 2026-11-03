import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/constructionData';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Company', path: '/about' },
    { name: 'Services & Works', path: '/services' },
    { name: 'Project Portfolio', path: '/projects' },
    { name: 'Contact & Quotes', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Building Construction', path: '/services#building-construction' },
    { name: 'Civil Engineering', path: '/services#civil-engineering' },
    { name: 'Renovation & Remodeling', path: '/services#renovation-remodeling' },
    { name: 'Structural Works', path: '/services#structural-works' },
    { name: 'Roofing & Exterior Works', path: '/services#roofing-exterior' },
    { name: 'Road & Drainage Infrastructure', path: '/services#road-drainage' },
    { name: 'Project Management', path: '/services#project-management' },
    { name: 'Property Maintenance', path: '/services#property-maintenance' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top CTA Banner inside footer */}
      <div className="border-b border-slate-800 bg-slate-950/80 py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
              Ready to construct?
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tighter mt-1">
              Let's Discuss Your Next Residential, Commercial, or Civil Project
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              From feasibility and structural modeling to site construction and turnkey handover, SkyBuild delivers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact?intent=quote"
              className="inline-flex items-center justify-center font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-none bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-xs"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-none border border-slate-700 hover:bg-slate-800 text-white transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" showTagline={true} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              SkyBuild is a general construction and building company handling residential, commercial, industrial, and infrastructure engineering projects with uncompromising quality, safety, and reliability.
            </p>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Certified General Contractors & Registered Civil Engineers</span>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
              <div className="font-semibold text-slate-200 mb-1">Corporate Registration:</div>
              <div>RC: 1149208 | COREN Certified | HSE Compliant</div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-200 uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {mainLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-200 uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-block truncate max-w-[200px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-200 uppercase mb-4">
              Contact SkyBuild
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{COMPANY_INFO.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© {currentYear} SkyBuild Construction Group. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>Safety First</span>
            <span className="hidden sm:inline">•</span>
            <span>Quality Guaranteed</span>
            <span className="hidden sm:inline">•</span>
            <span>Built to Last</span>
          </div>
          <div className="text-slate-400">Building With Purpose</div>
        </div>
      </div>
    </footer>
  );
};
