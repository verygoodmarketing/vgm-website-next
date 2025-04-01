'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronLeft } from "lucide-react"

const industries = [
  { name: 'Lawn Care', slug: 'lawn-care' },
  { name: 'Landscaping', slug: 'landscaping' },
  { name: 'Tree Service', slug: 'tree-service' },
  { name: 'Pressure Washing', slug: 'pressure-washing' },
  { name: 'Window Cleaning', slug: 'window-cleaning' },
  { name: 'Cleaning & Janitorial', slug: 'cleaning' },
  { name: 'Snow Removal', slug: 'snow-removal' },
  { name: 'Painting', slug: 'painting' },
  { name: 'Roofing', slug: 'roofing' },
  { name: 'HVAC', slug: 'hvac' },
  { name: 'Plumbing', slug: 'plumbing' },
  { name: 'Electrical', slug: 'electrical' },
  { name: 'Handyman', slug: 'handyman' },
  { name: 'General Contracting', slug: 'general-contracting' },
  { name: 'Fencing', slug: 'fencing' },
]

// Desktop dropdown component that matches other navigation links
export function IndustryDesktopDropdown() {
  const pathname = usePathname()
  const isActive = pathname?.startsWith('/industry')
  const [isOpen, setIsOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 100) // Small delay to allow moving to dropdown
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative">
      {/* Button */}
      <button
        className={`text-base font-medium transition-colors duration-300 flex items-center ${
          isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Industries
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {/* Dropdown */}
      {isOpen && (
        <div 
          className="absolute left-0 top-full z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Invisible bridge to prevent gap between button and dropdown */}
          <div className="h-2 w-full absolute -top-2"></div>
          
          <div className="bg-white rounded-md shadow-lg w-[400px] md:w-[500px] lg:w-[600px] border border-gray-100">
            <div className="grid grid-cols-2 gap-3 p-4">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industry/${industry.slug}`}
                  className="block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-gray-100"
                >
                  <div className="text-sm font-medium leading-none">{industry.name}</div>
                </Link>
              ))}
              <Link
                href="/industry"
                className="col-span-2 block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-gray-100 bg-gray-50 mt-2"
              >
                <div className="text-sm font-medium leading-none">View All Industries</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Mobile slide-in menu component with animations
export function IndustryMobileMenu({ 
  isOpen, 
  onBack, 
  onSelectIndustry 
}: { 
  isOpen: boolean; 
  onBack: () => void;
  onSelectIndustry: () => void;
}) {
  const [animationState, setAnimationState] = React.useState<'entering' | 'entered' | 'exiting' | 'exited'>('exited');
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Handle animation states when isOpen changes
  React.useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isOpen) {
      setAnimationState('entering');
      // After a short delay, set to entered state
      timeoutRef.current = setTimeout(() => {
        setAnimationState('entered');
      }, 300); // Match this with the CSS animation duration
    } else if (animationState === 'entered' || animationState === 'entering') {
      setAnimationState('exiting');
      // After animation completes, set to exited state
      timeoutRef.current = setTimeout(() => {
        setAnimationState('exited');
      }, 300); // Match this with the CSS animation duration
    }

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen]);  // Remove animationState dependency to prevent loops

  // Don't render anything if not open and fully exited
  if (animationState === 'exited' && !isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-60 bg-white overflow-auto ${
        animationState === 'entering' ? 'slide-in-right' : 
        animationState === 'exiting' ? 'slide-out-right' : ''
      }`}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-white">
        <button
          onClick={onBack}
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back</span>
        </button>
        <h2 className="text-lg font-medium">Industries</h2>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 gap-2">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industry/${industry.slug}`}
              className="block p-3 rounded-md hover:bg-gray-100"
              onClick={onSelectIndustry}
            >
              <span className="text-lg">{industry.name}</span>
            </Link>
          ))}
          <Link
            href="/industry"
            className="block p-3 rounded-md bg-gray-50 mt-4 font-medium"
            onClick={onSelectIndustry}
          >
            View All Industries
          </Link>
        </div>
      </div>
    </div>
  );
}
