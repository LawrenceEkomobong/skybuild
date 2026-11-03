import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat, Search, SlidersHorizontal } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/Button';
import { PROJECTS_DATA } from '../data/constructionData';
import { ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'Residential',
    'Commercial',
    'Industrial',
    'Infrastructure',
    'Renovation',
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Completed architectural and commercial building"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
          <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-slate-900 border border-slate-700 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              TRACK RECORD & PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-[0.98]">
              SELECTED PROJECTS. <br />
              <span className="text-transparent text-stroke-light">BUILT</span> <span className="text-amber-500">EXCELLENCE.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Explore our delivered works across residential estates, commercial office towers, industrial warehouses, arterial road networks, and structural retrofits.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-[69px] sm:top-[73px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === 'All'
                    ? PROJECTS_DATA.length
                    : PROJECTS_DATA.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`ml-2 px-1.5 py-0.5 rounded-none text-[10px] font-mono ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-black'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-slate-900"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-[10px] font-mono uppercase font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Results count label */}
          <div className="flex items-center justify-between mb-8 text-[10px] font-bold font-mono uppercase tracking-widest text-slate-500">
            <span>
              Showing <strong className="text-slate-900">{filteredProjects.length}</strong> project{filteredProjects.length === 1 ? '' : 's'} {activeCategory !== 'All' ? `in ${activeCategory}` : ''}
            </span>
            {searchQuery && <span>Matching keyword "{searchQuery}"</span>}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-none p-12 text-center max-w-md mx-auto">
              <SlidersHorizontal className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">No Projects Found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                No construction projects matched your active category filter and search parameters.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Commission CTA */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 blueprint-hatch pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <span className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-3">
            TECHNICAL ESTIMATION DESK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            Have a Specific Scope or Architectural Plan Ready?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Our estimating department accepts architectural drawings, structural calculations, and CAD files for detailed takeoff and BOQ pricing.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate('/contact?intent=quote')}
            >
              Submit Plans for Takeoff & Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
