import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  fullWidth?: boolean;
}

export default function SkillCard({ title, skills, icon, fullWidth = false }: SkillCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md ${fullWidth ? 'md:col-span-2' : ''}`}>
      <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
        {icon} {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            variant="skill" 
            className="skill-badge px-4 py-2 bg-primary-100 text-primary-800 rounded-lg font-medium"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
