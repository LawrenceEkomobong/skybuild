import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { COMPANY_INFO } from '../data/constructionData';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll for sticky shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-shadow duration-200">
      {/* Top utility contact strip on desktop */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-[10px] font-bold uppercase tracking-widest py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500" />
              <span>Available for New Projects & Consultations</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">Office: {COMPANY_INFO.address}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>Direct Line: {COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">{COMPANY_INFO.officeHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled ? 'shadow-xs border-b border-slate-200 py-3.5' : 'border-b border-slate-200 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" showTagline={false} />

          {/* Desktop Navigation Links (Editorial Aesthetic) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors py-1 ${
                    isActive
                      ? 'text-slate-900 border-b-2 border-amber-500 pb-1'
                      : 'hover:text-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/contact?intent=quote')}
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/contact?intent=quote')}
              className="text-[10px] px-3 py-1.5"
            >
              Quote
            </Button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-5 pt-4 pb-6 shadow-md">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-900 border-l-2 border-amber-500'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </NavLink>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/contact?intent=quote');
                }}
              >
                Request a Quote
              </Button>
              <div className="text-center text-[10px] uppercase font-mono text-slate-500 pt-2">
                Hotline: <span className="font-bold text-slate-900">{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
