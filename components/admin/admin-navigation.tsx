'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  FileText, 
  Star, 
  FileQuestion, 
  Menu, 
  X, 
  Settings
} from 'lucide-react'

export default function AdminNavigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: <Home className="mr-2 h-4 w-4" /> },
    { href: '/admin/blog', label: 'Blog Posts', icon: <FileText className="mr-2 h-4 w-4" /> },
    { href: '/admin/testimonials', label: 'Testimonials', icon: <Star className="mr-2 h-4 w-4" /> },
    { href: '/admin/submissions', label: 'Form Submissions', icon: <FileQuestion className="mr-2 h-4 w-4" /> },
    { href: '/admin/settings', label: 'Settings', icon: <Settings className="mr-2 h-4 w-4" /> },
  ]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden p-4 border-b border-gray-200">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleMenu}
          className="ml-auto block"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation Sidebar - Mobile (Overlay) */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}>
          <div 
            className="bg-white h-full w-64 p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold">Admin Panel</h2>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center py-2 px-3 rounded text-sm ${
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 pt-4 border-t">
              <Link 
                href="/"
                className="flex items-center py-2 px-3 rounded text-sm text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Return to Website
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Sidebar - Desktop (Permanent) */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white pt-5 pb-4 overflow-y-auto">
          <div className="px-4 mb-6">
            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>
          <nav className="flex-1 px-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center py-2 px-3 rounded text-sm ${
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-3 mt-8 pt-4 border-t">
            <Link 
              href="/"
              className="flex items-center py-2 px-3 rounded text-sm text-gray-700 hover:bg-gray-100"
            >
              Return to Website
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}