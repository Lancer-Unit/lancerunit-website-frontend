import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="feature-card p-6 rounded-lg shadow-lg bg-glass transform transition-transform hover:scale-105 hover:shadow-blue-500/50">
      <div className="flex items-center justify-center mb-4 text-blue-500">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="w-full flex justify-center text-2xl font-bold mb-2">
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
