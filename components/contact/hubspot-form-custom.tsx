"use client"

import type React from "react"

import { useState } from "react"
import { CustomButton } from "@/components/custom-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface HubspotFormCustomProps {
  portalId: string
  formId: string
  title?: string
}

export default function HubspotFormCustom({ portalId, formId, title = "Get in Touch" }: HubspotFormCustomProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      setSubmitError("Please fill in all required fields.")
      setIsSubmitting(false)
      return
    }

    try {
      // Prepare the data for HubSpot
      const hubspotData = {
        fields: [
          { name: "firstname", value: formData.firstName },
          { name: "lastname", value: formData.lastName },
          { name: "email", value: formData.email },
          { name: "phone", value: formData.phone },
          { name: "company", value: formData.company },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }

      // Submit to HubSpot Forms API
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form to HubSpot")
      }

      setSubmitSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
      })
    } catch (error) {
      console.error("Error submitting to HubSpot:", error)
      setSubmitError("There was an error submitting the form. Please try again.")
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
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <p className="font-medium mb-2">Thank you for reaching out!</p>
            <p>We'll contact you within 24 hours to discuss your project and how we can help your business grow.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Business Name <span className="text-red-500">*</span>
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
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone (optional)
              </label>
              <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="bg-blue-50 p-4 rounded-md mt-2">
              <p className="text-sm text-blue-800">
                We'll contact you within 24 hours to discuss your project and how we can help your business grow.
              </p>
            </div>

            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p>{submitError}</p>
              </div>
            )}

            <CustomButton type="submit" variant="blue" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </CustomButton>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

