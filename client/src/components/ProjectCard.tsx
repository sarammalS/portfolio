import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  animationDelay: string;
}

export default function ProjectCard({ project, animationDelay }: ProjectCardProps) {
  return (
    <div 
      className="project-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 animate-slide-up" 
      style={{ animationDelay }}
    >
      <div className="h-48 bg-primary-100 flex items-center justify-center overflow-hidden">
        <div className="text-9xl">{project.emoji}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">{project.emoji}</span>
          <h3 className="text-xl font-bold text-secondary-900">{project.title}</h3>
        </div>
        <p className="text-secondary-700 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="skill" className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
              {tech}
            </Badge>
          ))}
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors"
        >
          {project.linkText} <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
