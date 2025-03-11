import type { Metadata } from "next"
import Link from "next/link"
import { CustomButton } from "@/components/custom-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Settings, BarChart, Star } from "lucide-react"
import { getTestimonials } from "@/lib/testimonial-service"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Very Good Marketing Co. LLC admin dashboard",
}

export default async function AdminDashboardPage() {
  // Get testimonials count for the dashboard
  const testimonials = await getTestimonials()
  const featuredTestimonials = testimonials.filter(t => t.featured).length
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">+0% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
            <Star className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testimonials.length}</div>
            <p className="text-xs text-gray-500">{featuredTestimonials} featured</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <BarChart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500">+0% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Settings</CardTitle>
            <Settings className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-gray-500">Configure site settings</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CustomButton asChild variant="blue" className="w-full">
              <Link href="/admin/blog/new">Create New Blog Post</Link>
            </CustomButton>

            <CustomButton asChild variant="outline" className="w-full">
              <Link href="/admin/blog">Manage Blog Posts</Link>
            </CustomButton>
            
            <CustomButton asChild variant="outline" className="w-full">
              <Link href="/admin/testimonials">Manage Testimonials</Link>
            </CustomButton>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <h3 className="font-medium">New Feature: Testimonials Management</h3>
              <p className="text-sm text-gray-600">
                You can now add, edit, and manage client testimonials that appear on your website.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <h3 className="font-medium">New Page: Success Stories</h3>
              <p className="text-sm text-gray-600">
                A new success stories page has been added to showcase your client testimonials.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

