import type React from "react"
import type { Metadata } from "next"
import AdminNavigation from "@/components/admin/admin-navigation"

export const metadata: Metadata = {
  title: "Admin - Very Good Marketing Co. LLC",
  description: "Admin area for Very Good Marketing Co. LLC website",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout min-h-screen bg-gray-50">
      <AdminNavigation />
      <main className="md:pl-64 pt-4">
        <div className="px-4 md:px-8 pb-8">
          {children}
        </div>
      </main>
    </div>
  )
}

