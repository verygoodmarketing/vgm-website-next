import { CheckCircle } from 'lucide-react';

interface TimelineStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Icon/number circle */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center z-10">
                {step.icon || (index + 1)}
              </div>
              
              {/* Content */}
              <div className="bg-white rounded-lg shadow-md p-6 md:ml-4 flex-grow transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-blue-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
