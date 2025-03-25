interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

export default function StatCard({ number, label, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}
