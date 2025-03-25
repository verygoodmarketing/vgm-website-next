import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Container from '@/components/shared/container';

interface HeroSectionProps {
  title: string;
  highlightedText?: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  highlightedText,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = '/placeholder-pattern.svg'
}: HeroSectionProps) {
  // Split the title to insert highlighted text if provided
  const titleParts = highlightedText ? title.split(highlightedText) : [title];

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] bg-repeat"></div>
        {backgroundImage && (
          <Image 
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover mix-blend-overlay opacity-30"
            priority
          />
        )}
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-500 bg-opacity-20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Specialized Marketing Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            {highlightedText ? (
              <>
                {titleParts[0]}
                <span className="text-blue-300">{highlightedText}</span>
                {titleParts[1] || ''}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link 
              href={primaryButtonLink} 
              className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium flex items-center justify-center"
            >
              {primaryButtonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                href={secondaryButtonLink} 
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition flex items-center justify-center"
              >
                {secondaryButtonText} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
