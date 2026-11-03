import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col bg-white border border-slate-200 rounded-none overflow-hidden shadow-xs hover:border-slate-400 transition-all duration-200">
      {/* Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
        <img
          src={project.heroImage}
          alt={`Exterior and construction view of ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-103 opacity-95 group-hover:opacity-100"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-1 bg-slate-900/95 text-amber-400 text-[10px] font-bold uppercase tracking-widest border border-slate-800">
            {project.category}
          </span>
        </div>
        {/* Completion duration */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-slate-900 text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs">
            <Clock className="w-3 h-3 text-amber-600" />
            {project.duration}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Short description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">Completed {project.year}</span>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-amber-600 transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
