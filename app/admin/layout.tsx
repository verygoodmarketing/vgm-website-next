import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin - Very Good Marketing Co. LLC",
  description: "Admin area for Very Good Marketing Co. LLC website",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="admin-layout">{children}</div>
}

