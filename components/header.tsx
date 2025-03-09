"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyCompany
        </Link>

        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`transition-colors ${
                    pathname === item.path ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

