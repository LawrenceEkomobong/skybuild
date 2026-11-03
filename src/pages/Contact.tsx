import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FileText, 
  HardHat,
  CheckCircle2
} from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SectionTitle } from '../components/SectionTitle';
import { COMPANY_INFO } from '../data/constructionData';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [initialService, setInitialService] = useState<string>('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const projectRef = searchParams.get('projectRef');

    if (serviceParam) {
      setInitialService(serviceParam);
    } else if (projectRef) {
      setInitialService('Building Construction');
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
            alt="SkyBuild construction engineers review site documents"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
          <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-slate-900 border border-slate-700 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              PROJECT CONSULTATION & INQUIRIES
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-[0.98]">
              CONTACT SKYBUILD. <br />
              <span className="text-transparent text-stroke-light">DIRECT</span> <span className="text-amber-500">ENGAGEMENT.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Reach out to our engineering office to discuss your residential, commercial, or civil works project. We provide initial consultations, feasibility reviews, and transparent price estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Cards & Form */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <SectionTitle
                label="DIRECT CONTACT"
                title="Speak With Our Team"
                description="We are available during standard business hours for tender inquiries, architect collaborations, and site consultations."
              />

              {/* Contact Information Cards */}
              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-none bg-white border border-slate-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-none bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-slate-500">
                      Telephone / WhatsApp
                    </h4>
                    <p className="text-base font-bold text-slate-900 mt-0.5">
                      <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-amber-600 transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">
                      Site Line: {COMPANY_INFO.phoneAlt}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-none bg-white border border-slate-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-none bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-slate-500">
                      Email Inquiries
                    </h4>
                    <p className="text-base font-bold text-slate-900 mt-0.5">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-600 transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tenders & BOQs: <a href={`mailto:${COMPANY_INFO.quoteEmail}`} className="text-slate-700 hover:underline">{COMPANY_INFO.quoteEmail}</a>
                    </p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-5 rounded-none bg-white border border-slate-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-none bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-slate-500">
                      Headquarters & Engineering Office
                    </h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Visitors by appointment. Secured visitor parking available on-site.
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-5 rounded-none bg-white border border-slate-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-none bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-slate-500">
                      Hours of Operation
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                      {COMPANY_INFO.officeHours}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Active construction sites operate in accordance with designated municipal noise ordinances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety & Tender Commitment Callout */}
              <div className="p-6 rounded-none bg-slate-900 text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 blueprint-hatch pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Institutional Tenders</span>
                  </div>
                  <h4 className="text-base font-bold uppercase tracking-tight text-white mb-1">
                    Public & Corporate Procurement
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We participate in competitive sealed bids, RFP/RFQ submissions, and joint venture infrastructure frameworks. Request our corporate profile and pre-qualification catalog.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Quote Form */}
            <div className="lg:col-span-7">
              <ContactForm initialService={initialService} />
            </div>
          </div>
        </div>
      </section>

      {/* Structured Blueprint Consultation Steps */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 block mb-1">
              ESTIMATING PROTOCOL
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight">What Happens After You Submit?</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Our standardized engineering protocol for reviewing incoming project briefs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-none bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest mb-2">Step 01 — Within 24 Hours</div>
              <h4 className="text-sm font-bold uppercase text-slate-900 mb-1.5">Desk Review & Feasibility</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A senior quantity surveyor reviews your scope, site geography, and project timeline parameters.
              </p>
            </div>

            <div className="p-6 rounded-none bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest mb-2">Step 02 — Within 48 Hours</div>
              <h4 className="text-sm font-bold uppercase text-slate-900 mb-1.5">Technical Consultation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We schedule a phone briefing or in-person session with our civil engineers to discuss architectural drawings or site conditions.
              </p>
            </div>

            <div className="p-6 rounded-none bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest mb-2">Step 03 — 3 to 5 Days</div>
              <h4 className="text-sm font-bold uppercase text-slate-900 mb-1.5">Detailed Commercial Proposal</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive a transparent preliminary estimate or itemized Bill of Quantities (BOQ) with realistic milestone schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
