import { Award, Briefcase, Database, Github } from "lucide-react";
import AchievementCard from "./AchievementCard";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  const achievementIcons = [
    <Award className="w-8 h-8 text-primary-600" />,
    <Briefcase className="w-8 h-8 text-primary-600" />,
    <Database className="w-8 h-8 text-primary-600" />,
    <Github className="w-8 h-8 text-primary-600" />
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Recognition and accreditations that highlight my journey in software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              organization={achievement.organization}
              year={achievement.year}
              icon={achievementIcons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
