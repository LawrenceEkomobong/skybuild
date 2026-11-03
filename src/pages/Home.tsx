import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Award, 
  Clock, 
  HardHat,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { 
  COMPANY_INFO, 
  SERVICES_DATA, 
  PROJECTS_DATA, 
  TESTIMONIALS_DATA 
} from '../data/constructionData';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // Selected projects for the home page preview
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  const aboutHighlights = [
    { label: 'Experienced Professionals', desc: 'Licensed structural & civil engineers' },
    { label: 'Quality Materials', desc: 'Rigorous batch testing & certified sourcing' },
    { label: 'Safety-Focused Work', desc: 'Zero-harm HSE site enforcement' },
    { label: 'Reliable Project Delivery', desc: 'Critical-path scheduling & transparent milestones' },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* ================= HERO SECTION (EDITORIAL AESTHETIC) ================= */}
      <section className="relative w-full bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center gap-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest border border-amber-200/60">
                Established 2014 • General Contractors
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tighter text-slate-900">
                BUILDING BETTER <br />
                <span className="text-transparent text-stroke-dark">SPACES.</span> <br />
                <span className="text-amber-600">LASTING</span> STRUCTURES.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed pt-2">
                SkyBuild provides reliable construction and infrastructure solutions for residential, commercial and civil projects from early feasibility to turnkey handover.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
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
              >
                View Our Projects
              </Button>
            </div>

            {/* Editorial Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 mt-2">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
                  {COMPANY_INFO.stats.experienceYears}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
                  {COMPANY_INFO.stats.projectsCompleted}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
                  Projects Done
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
                  {COMPANY_INFO.stats.skilledProfessionals}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
                  Engineers & Crew
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Blueprint Showcase Canvas */}
          <div className="w-full lg:w-1/2 relative bg-slate-900 min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] flex items-center justify-center p-6 sm:p-12 overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800">
            {/* Architectural Blueprint Diagonal Hatching */}
            <div className="absolute inset-0 opacity-30 blueprint-hatch pointer-events-none" />

            {/* Editorial Framed Showcase Photo */}
            <div className="relative z-10 w-full max-w-md bg-white p-2.5 sm:p-3 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300 rounded-none">
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full bg-slate-800 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80"
                  alt="Active construction site with crane and structural framework"
                  className="w-full h-full object-cover"
                />
                {/* Showcase Caption Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Active Flagship Project
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight mt-0.5">
                    Central Business & Logistics Hub
                  </h3>
                  <p className="text-xs text-slate-300 font-mono mt-1">
                    Lagos, Nigeria • Multi-Storey Commercial & Civil
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Architectural Accent Bars in corner */}
            <div className="absolute bottom-8 right-8 hidden sm:flex flex-col gap-2 pointer-events-none">
              <div className="w-12 h-1 bg-amber-500" />
              <div className="w-8 h-1 bg-white/30" />
              <div className="w-8 h-1 bg-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Professional construction image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 sm:aspect-1/1 rounded-none overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Civil engineers inspecting architectural plans and structural foundation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating detail tag */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-slate-900 text-white p-5 rounded-none border border-slate-800 shadow-xl max-w-xs items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-amber-500 flex items-center justify-center text-slate-950 shrink-0 font-black text-sm">
                  100%
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Zero-compromise compliance with international building, safety, and COREN standards.
                </p>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <SectionTitle
                label="ABOUT SKYBUILD"
                title="Construction Built Around Quality, Safety and Reliability."
                description="SkyBuild works with individuals, businesses, developers and organizations to deliver construction projects according to agreed specifications, timelines and standards."
              />

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Whether constructing commercial office towers, master-planned residential estates, or complex municipal drainage networks, our interdisciplinary teams of certified civil engineers, quantity surveyors, and project managers oversee every detail with technical precision.
              </p>

              {/* Highlights 2x2 Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {aboutHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-none bg-slate-50 border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-slate-900">{item.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="mt-8">
                <Button variant="primary" size="md" to="/about" icon={<ArrowRight className="w-4 h-4" />}>
                  Learn More About SkyBuild
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle
              label="OUR CAPABILITIES"
              title="What We Do"
              description="From new construction to renovation and infrastructure work, SkyBuild provides practical solutions for projects of different sizes and requirements."
            />
            <Link
              to="/services"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-colors shrink-0"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} showFeatures={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SKYBUILD ================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionTitle
              align="center"
              label="THE SKYBUILD ADVANTAGE"
              title="A Straightforward Approach to Construction."
              description="We cut through construction complexity with transparent communication, certified engineering methodologies, and strict adherence to agreed project briefs."
            />
          </div>

          <WhyChooseUs />
        </div>
      </section>

      {/* ================= SELECTED PROJECTS ================= */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <SectionTitle
              label="PORTFOLIO HIGHLIGHTS"
              title="Selected Projects"
              description="A preview of our recent completed works across residential, commercial, industrial and civil infrastructure domains."
            />
            <div className="shrink-0">
              <Button
                variant="outline"
                size="md"
                to="/projects"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                View All Projects
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <SectionTitle
              label="METHODOLOGY & STANDARDS"
              title="How We Work"
              description="Our structured five-stage delivery process guarantees transparent milestone tracking, rigorous safety verification, and uncompromising workmanship."
            />
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionTitle
              align="center"
              label="CLIENT EXPERIENCES"
              title="What Our Clients Say"
              description="Direct feedback from private developers, institutional asset owners, and municipal project sponsors who rely on SkyBuild."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS_DATA.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Blueprint hatch texture */}
        <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <span className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-3">
            START YOUR PROJECT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
            Have a Construction Project in Mind?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what you are planning and our team will help you understand the next steps, structural feasibility, and budget projections.
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
              to="/contact"
              className="text-white border-slate-700 hover:bg-slate-800 hover:border-slate-600"
            >
              Contact SkyBuild
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
