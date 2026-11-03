import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Calendar, 
  Building, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  HardHat
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/constructionData';
import { Button } from '../components/Button';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find project by id or slug
  const project = PROJECTS_DATA.find(
    (p) => p.id === id || p.slug === id
  );

  if (!project) {
    return (
      <div className="py-24 max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Project Not Found</h2>
        <p className="mt-2 text-slate-600">The requested construction project could not be located in our portfolio records.</p>
        <div className="mt-6">
          <Button variant="primary" to="/projects" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  // Related projects in the same or other category
  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      {/* Top Breadcrumb / Back Action Bar */}
      <div className="bg-white border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-slate-400">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold truncate max-w-[180px]">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-none bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Completed {project.year}
            </span>
            <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Duration: {project.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white max-w-4xl uppercase">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Client: {project.client}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Large Featured Project Image */}
      <section className="bg-slate-950 py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-6 sm:-mt-8">
          <div className="relative aspect-16/9 sm:aspect-21/9 rounded-none overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-900">
            <img
              src={project.heroImage}
              alt={`Primary view of completed ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Specs & Narrative */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Project Scope & Description */}
              <div>
                <span className="inline-block px-2.5 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest border border-amber-200/60 mb-3">
                  PROJECT OVERVIEW & BRIEF
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase mb-4">
                  Engineering Scope & Execution
                </h2>
                <div className="p-4 rounded-none bg-slate-50 border-l-4 border-amber-500 mb-6 text-sm sm:text-base font-medium text-slate-800">
                  <span className="font-bold uppercase tracking-wider text-slate-900 text-xs block mb-1">Contract Scope</span>
                  {project.scope}
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Engineering Solution */}
              {project.challengeSolution && (
                <div className="border border-slate-200 rounded-none p-6 sm:p-8 bg-slate-50">
                  <div className="flex items-center gap-2 mb-4">
                    <HardHat className="w-5 h-5 text-amber-600" />
                    <h3 className="text-sm font-bold uppercase tracking-tight text-slate-900">Engineering Challenge & Implemented Solution</h3>
                  </div>
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block mb-1">Site Challenge:</span>
                      <p className="text-slate-600 leading-relaxed">{project.challengeSolution.challenge}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block mb-1">SkyBuild Engineering Solution:</span>
                      <p className="text-slate-600 leading-relaxed">{project.challengeSolution.solution}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Completed Work Breakdown */}
              <div>
                <h3 className="text-base font-bold uppercase tracking-tight text-slate-900 mb-4">
                  Completed Work & Key Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.completedWork.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-none bg-white border border-slate-200 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Construction Images Gallery */}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">
                      Construction & Site Gallery
                    </h3>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                      Structural & Finishing Stages
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.galleryImages.map((imgUrl, gIdx) => (
                      <div
                        key={gIdx}
                        className="relative aspect-4/3 rounded-none overflow-hidden border border-slate-200 bg-slate-100 group"
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.title} construction photo ${gIdx + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Quick Specs & Consultation Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Technical Specifications Table */}
              <div className="bg-slate-50 border border-slate-200 rounded-none p-6">
                <h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-slate-900 mb-4 pb-3 border-b border-slate-200">
                  Project Specifications
                </h3>

                <dl className="space-y-3.5 text-xs">
                  <div>
                    <dt className="text-slate-500 uppercase tracking-widest text-[10px] font-bold font-mono">Category</dt>
                    <dd className="font-bold text-slate-900 text-sm mt-0.5">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 uppercase tracking-widest text-[10px] font-bold font-mono">Client Organization</dt>
                    <dd className="font-semibold text-slate-900 text-sm mt-0.5">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 uppercase tracking-widest text-[10px] font-bold font-mono">Location</dt>
                    <dd className="font-semibold text-slate-900 text-sm mt-0.5">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 uppercase tracking-widest text-[10px] font-bold font-mono">Construction Timeline</dt>
                    <dd className="font-semibold text-slate-900 text-sm mt-0.5">{project.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 uppercase tracking-widest text-[10px] font-bold font-mono">Delivery Year</dt>
                    <dd className="font-semibold text-slate-900 text-sm mt-0.5">{project.year}</dd>
                  </div>

                  {project.keySpecs && project.keySpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="pt-2 border-t border-slate-200">
                      <dt className="text-slate-500 uppercase tracking-widest text-[10px] font-bold font-mono">{spec.label}</dt>
                      <dd className="font-semibold text-slate-900 text-sm mt-0.5">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Consultation / Quote Card */}
              <div className="bg-slate-900 text-white rounded-none p-6 border border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 blueprint-hatch pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Build With SkyBuild</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">
                    Planning a Project of Similar Scale?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    Discuss structural design, bill of quantities, and schedule milestones with our senior quantity surveyors.
                  </p>
                  <Button
                    variant="accent"
                    size="md"
                    className="w-full justify-center"
                    onClick={() => navigate(`/contact?projectRef=${encodeURIComponent(project.title)}`)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request a Project Quote
                  </Button>
                </div>
              </div>

              {/* Back to Projects Button */}
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  to="/projects"
                  className="w-full justify-center"
                  icon={<ArrowLeft className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Back to All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Carousel/Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">
              Other Selected Projects
            </h3>
            <Link to="/projects" className="text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProjects.map((rel) => (
              <div key={rel.id} className="bg-white border border-slate-200 rounded-none p-5 flex flex-col sm:flex-row gap-5 items-center hover:border-slate-400 transition-colors">
                <div className="w-full sm:w-44 aspect-16/10 rounded-none overflow-hidden shrink-0 bg-slate-100">
                  <img src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700">{rel.category}</span>
                  <h4 className="text-sm font-bold uppercase text-slate-900 mt-0.5">{rel.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{rel.description}</p>
                  <div className="mt-3">
                    <Link to={`/projects/${rel.slug}`} className="text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 inline-flex items-center gap-1">
                      <span>View Project Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
