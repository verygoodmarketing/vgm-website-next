interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export default function TestimonialCard({ name, company, quote, rating, initials }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
          {initials}
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">
        "{quote}"
      </p>
      <div className="flex text-yellow-400 mt-4">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
    </div>
  );
}
