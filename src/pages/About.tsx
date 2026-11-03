import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  HardHat, 
  Clock, 
  FileCheck2, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { COMPANY_INFO, LEADERSHIP_TEAM } from '../data/constructionData';

export const About: React.FC = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      title: 'Structural Quality',
      desc: 'We never compromise on material grades, structural calculations, or artisan workmanship. What we build stands the test of time.',
    },
    {
      title: 'Safety Without Compromise',
      desc: 'Our sites enforce zero-harm HSE safety guidelines. Every engineer, technician, and laborer returns home safe every single day.',
    },
    {
      title: 'Transparent Reliability',
      desc: 'We communicate openly about budgets, timelines, and technical challenges. No hidden charges or unexplained delays.',
    },
    {
      title: 'Professional Integrity',
      desc: 'All projects are governed by contract fidelity, ethical procurement, and compliance with statutory engineering codes.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80"
            alt="Structural steel and concrete construction"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
          <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-slate-900 border border-slate-700 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              ABOUT THE COMPANY • ESTABLISHED 2014
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-[0.98]">
              BUILDING WITH PURPOSE. <br />
              <span className="text-transparent text-stroke-light">BUILT TO LAST.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Founded on principles of structural discipline and honest contracting, SkyBuild has grown into a premier general building and civil engineering firm trusted by developers, corporations, and public bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & Two-Column Profile */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-4/3 rounded-none overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80"
                  alt="SkyBuild construction site operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-none bg-slate-50 border border-slate-200">
                  <div className="text-3xl font-black text-slate-900 tracking-tight">{COMPANY_INFO.stats.projectsCompleted}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Projects Handed Over</div>
                </div>
                <div className="p-4 rounded-none bg-slate-50 border border-slate-200">
                  <div className="text-3xl font-black text-slate-900 tracking-tight">{COMPANY_INFO.stats.squareMetersBuilt}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Built Footprint</div>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-6">
              <SectionTitle
                label="OUR FOUNDING PRINCIPLE"
                title="A Decade of Unwavering Structural Rigor"
              />
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                SkyBuild was established to bring predictable excellence to the construction landscape. Too often, building projects in the region have suffered from budget creep, structural shortcuts, and unreliable contractors.
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We set out to offer an unwavering alternative: an integrated general building partner where registered structural engineers calculate every load, experienced project managers track every milestone, and clients receive transparent weekly telemetry on their investments.
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Today, our portfolio spans residential master communities, commercial office towers, arterial road pavements, and complex deep drainage canals. Our reputation is etched into every foundation we pour.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <FileCheck2 className="w-4 h-4 text-amber-600" />
                  <span>COREN Certified Engineers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>NEBOSH Safety Audited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            label="GUIDING STANDARDS"
            title="The Values That Govern Our Sites"
            description="From the procurement of reinforcing steel to final handover inspections, our four core pillars steer every SkyBuild employee and subcontractor."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-none p-6 shadow-xs hover:border-slate-400 transition-colors">
                <div className="w-8 h-8 rounded-none bg-slate-900 text-amber-400 flex items-center justify-center font-mono font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-slate-900 mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Safety Protocols */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionTitle
                label="SAFETY & QUALITY ASSURANCE"
                title="Rigorous Quality Control On Every Single Site"
                description="We believe that safety and quality are inseparable. Our site protocols ensure maximum hazard elimination and structural durability."
              />

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-none bg-slate-50 border border-slate-200">
                  <HardHat className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Zero-Harm HSE Culture</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Daily morning safety tool-box meetings, mandatory certified PPE enforcement, and dedicated on-site HSE officers on all active projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-none bg-slate-50 border border-slate-200">
                  <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Independent Laboratory Batch Testing</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      All concrete pours undergo slump testing and 7-day, 14-day, and 28-day crushing cube strength tests by certified third-party materials laboratories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-none bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">Critical Path Schedule Monitoring</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Milestone tracking with CPM software ensures logistics bottlenecks are identified and solved weeks before impacting physical site progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-4/3 rounded-none overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                  alt="Construction worker following safety protocols on site"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            align="center"
            label="EXPERIENCED LEADERSHIP"
            title="Management & Engineering Team"
            description="Our senior partners and field leaders bring deep technical expertise across civil engineering, quantity surveying, and commercial architecture."
            className="mb-14 text-center mx-auto"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-none overflow-hidden shadow-xs hover:border-slate-400 transition-colors">
                <div className="aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold uppercase tracking-tight text-slate-900">{member.name}</h3>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mt-0.5">{member.role}</div>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">Experience:</span> {member.experience}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    {member.education}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            label="OPERATIONAL WORKFLOW"
            title="How SkyBuild Delivers"
            description="Every project follows a disciplined sequence designed to eliminate surprises, align costs, and protect building durability."
            className="mb-12"
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            align="center"
            label="WHY PARTNER WITH US"
            title="A Straightforward Approach to Construction"
            className="mb-12 text-center mx-auto"
          />
          <WhyChooseUs />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <span className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-3">
            START YOUR CONSULTATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            Plan Your Next Build With Proven Professionals
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Contact our engineering and commercial estimating team today for technical consultation or a formal project quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate('/contact?intent=quote')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/projects"
              className="text-white border-slate-700 hover:bg-slate-800"
            >
              Explore Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
