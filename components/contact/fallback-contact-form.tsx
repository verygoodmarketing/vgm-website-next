"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CustomButton } from "@/components/custom-button"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function FallbackContactForm({ title = "Get in Touch" }: { title?: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real implementation, you would send this data to your backend
      console.log("Form submitted:", formData)

      setSubmitSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {submitSuccess ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded flex flex-col items-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-medium mb-2">Message Sent Successfully!</h3>
            <p className="text-center">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
                <p>{submitError}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-blue-800">
                We'll contact you within 24 hours to discuss your project and how we can help your business grow.
              </p>
            </div>

            <CustomButton type="submit" variant="blue" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </CustomButton>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

