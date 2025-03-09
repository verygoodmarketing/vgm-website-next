"use client"

import type React from "react"

import { useState } from "react"
import { format, startOfDay, addHours, isBefore } from "date-fns"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CustomButton } from "@/components/custom-button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Generate available time slots for a given date
const generateTimeSlots = (date: Date) => {
  const today = startOfDay(new Date())
  const selectedDate = startOfDay(date)
  const isToday = selectedDate.getTime() === today.getTime()

  // Business hours: 9 AM to 5 PM
  const slots = []
  const startHour = isToday ? Math.max(9, new Date().getHours() + 1) : 9
  const endHour = 17 // 5 PM

  for (let hour = startHour; hour < endHour; hour++) {
    const time = addHours(selectedDate, hour)
    if (!isToday || isBefore(new Date(), time)) {
      slots.push({
        time,
        label: format(time, "h:mm a"),
      })
    }
  }

  return slots
}

export default function ScheduleConsultation() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = date ? generateTimeSlots(date) : []
  const disabledDates = { before: new Date() }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the data to a backend service
    // or integrate with a calendar API
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const handleNextStep = () => {
    if (step === 1 && date && timeSlot) {
      setStep(2)
    }
  }

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1)
    }
  }

  const resetForm = () => {
    setDate(undefined)
    setTimeSlot(undefined)
    setStep(1)
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    })
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Consultation Scheduled!</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Your consultation is confirmed</h3>
          <p className="text-gray-600 mb-4">
            {date && timeSlot ? `${format(date, "EEEE, MMMM d, yyyy")} at ${timeSlot}` : ""}
          </p>
          <p className="text-gray-600 mb-6">
            We've sent a confirmation email to {formData.email} with all the details.
          </p>
          <Button variant="outline" onClick={resetForm}>
            Schedule Another Consultation
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Schedule a Free Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Select a Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} disabled={disabledDates} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            {date && timeSlots.length > 0 && (
              <div className="space-y-2">
                <Label>Select a Time</Label>
                <RadioGroup
                  value={timeSlot}
                  onValueChange={setTimeSlot}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                >
                  {timeSlots.map((slot) => (
                    <div key={slot.label} className="flex items-center">
                      <RadioGroupItem value={slot.label} id={slot.label} className="peer sr-only" />
                      <Label
                        htmlFor={slot.label}
                        className="flex items-center justify-center px-3 py-2 border rounded-md text-sm cursor-pointer peer-data-[state=checked]:bg-blue-600 peer-data-[state=checked]:text-white peer-data-[state=checked]:border-blue-600 hover:bg-gray-100 peer-data-[state=checked]:hover:bg-blue-700 transition-colors"
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {slot.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {date && timeSlots.length === 0 && (
              <div className="text-center py-4">
                <p className="text-gray-600">No available time slots for this date. Please select another date.</p>
              </div>
            )}

            <div className="pt-4">
              <CustomButton variant="blue" className="w-full" disabled={!date || !timeSlot} onClick={handleNextStep}>
                Continue
              </CustomButton>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-md mb-4">
              <p className="text-blue-800 font-medium">
                Your consultation: {date ? format(date, "EEEE, MMMM d, yyyy") : ""} at {timeSlot}
              </p>
            </div>

            <div>
              <Label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div>
              <Label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
              </Label>
              <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>

            <div>
              <Label htmlFor="topic" className="block text-gray-700 font-medium mb-2">
                Consultation Topic
              </Label>
              <Input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                placeholder="e.g., Website Creation, Google Ads, etc."
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Additional Information
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Tell us a bit about your business and what you'd like to discuss"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <CustomButton type="submit" variant="blue" className="flex-1">
                Schedule Consultation
              </CustomButton>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

