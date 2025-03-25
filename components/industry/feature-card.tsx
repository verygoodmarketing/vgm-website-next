import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  color = 'bg-blue-50 text-blue-600'
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {icon && (
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
