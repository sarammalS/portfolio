import { Code, Layers, Database, Drill, Cpu } from "lucide-react";
import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
  const skillIcons = {
    languages: <Code className="w-5 h-5 mr-2 text-primary-600" />,
    frameworks: <Layers className="w-5 h-5 mr-2 text-primary-600" />,
    databases: <Database className="w-5 h-5 mr-2 text-primary-600" />,
    tools: <Drill className="w-5 h-5 mr-2 text-primary-600" />,
    concepts: <Cpu className="w-5 h-5 mr-2 text-primary-600" />
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Technologies & Skills</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            My technical toolkit and areas of expertise in software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard 
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              skills={items}
              icon={skillIcons[category as keyof typeof skillIcons]}
              fullWidth={category === 'concepts'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
