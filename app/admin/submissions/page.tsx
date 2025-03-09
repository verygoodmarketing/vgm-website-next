"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const response = await fetch("/api/hubspot/submit")

        if (!response.ok) {
          throw new Error("Failed to fetch submissions")
        }

        const data = await response.json()
        setSubmissions(data.submissions || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Form Submissions</h1>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Form Submissions</h1>
        <Card>
          <CardContent className="p-6">
            <div className="text-red-600">Error: {error}</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Form Submissions</h1>

      {submissions.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p>No submissions yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {submissions.map((submission) => (
            <Card key={submission.id}>
              <CardHeader>
                <CardTitle>
                  {submission.firstName} {submission.lastName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>{submission.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>{submission.phone || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <p>{submission.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Submitted</p>
                    <p>{submission.timestamp ? format(new Date(submission.timestamp), "PPP 'at' pp") : "Unknown"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

