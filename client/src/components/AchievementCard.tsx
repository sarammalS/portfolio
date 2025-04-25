import { ReactNode } from "react";

interface AchievementCardProps {
  title: string;
  organization: string;
  year?: string;
  icon: ReactNode;
}

export default function AchievementCard({ title, organization, year, icon }: AchievementCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-secondary-800 mb-2">{title}</h3>
      <p className="text-secondary-600 mb-2">{organization}</p>
      {year && <p className="text-sm text-secondary-500">{year}</p>}
    </div>
  );
}
