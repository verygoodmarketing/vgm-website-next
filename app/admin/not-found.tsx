"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { CustomButton } from "@/components/custom-button"
import { Card, CardContent } from "@/components/ui/card"

export default function AdminNotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Page Not Found</h2>

        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 mb-6">
              The admin page you're looking for doesn't exist or has been removed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CustomButton asChild variant="blue" className="flex items-center justify-center">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </CustomButton>
            </div>

            <div className="flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-2 text-blue-600" />
              <button
                onClick={() => window.history.back()}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Go back to previous page
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

