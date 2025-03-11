'use client'

import { useState, useEffect } from 'react'
import { Testimonial } from '@/types/testimonial'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { Check, X, Trash } from 'lucide-react'

interface TestimonialFormProps {
  testimonial?: Testimonial
  onSubmit: (testimonial: Omit<Testimonial, 'id'>) => Promise<void>
  onDelete?: () => Promise<void>
  onCancel: () => void
}

const industries = [
  'Plumbing',
  'HVAC',
  'Electrical',
  'Landscaping',
  'Lawn Care',
  'Cleaning',
  'Painting',
  'Roofing',
  'Tree Service',
  'Pressure Washing',
  'Window Cleaning',
  'General Contracting',
  'Handyman',
  'Fencing',
  'Legal',
  'Healthcare',
  'Other'
]

export default function TestimonialForm({ testimonial, onSubmit, onDelete, onCancel }: TestimonialFormProps) {
  const [formData, setFormData] = useState<Omit<Testimonial, 'id'>>({
    quote: '',
    author: '',
    company: '',
    image: '/placeholder.svg?height=100&width=100',
    industry: 'Other',
    featured: false,
    rating: 5
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  // If editing an existing testimonial, populate the form
  useEffect(() => {
    if (testimonial) {
      setFormData({
        quote: testimonial.quote,
        author: testimonial.author,
        company: testimonial.company,
        image: testimonial.image,
        industry: testimonial.industry || 'Other',
        featured: testimonial.featured || false,
        rating: testimonial.rating || 5,
        services: testimonial.services
      })
    }
  }, [testimonial])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsSubmitting(true)
      await onSubmit(formData)
      toast({
        title: testimonial ? 'Testimonial updated' : 'Testimonial added',
        description: testimonial ? 'The testimonial has been updated successfully.' : 'A new testimonial has been added successfully.',
      })
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!onDelete) return
    
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        setIsDeleting(true)
        await onDelete()
        toast({
          title: 'Testimonial deleted',
          description: 'The testimonial has been deleted successfully.',
        })
      } catch (error) {
        console.error(error)
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again.',
          variant: 'destructive'
        })
      } finally {
        setIsDeleting(false)
      }
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="quote">Testimonial Quote</Label>
            <Textarea
              id="quote"
              name="quote"
              value={formData.quote}
              onChange={handleChange}
              placeholder="Enter the testimonial quote"
              required
              className="mt-1"
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="author">Author Name</Label>
            <Input
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter the author's name"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter the company name"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter the image URL"
              className="mt-1"
            />
            <p className="text-sm text-gray-500 mt-1">
              Leave as default for placeholder image
            </p>
          </div>

          <div>
            <Label htmlFor="industry">Industry</Label>
            <Select
              value={formData.industry}
              onValueChange={(value) => handleSelectChange('industry', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select an industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="rating">Rating</Label>
            <Select
              value={formData.rating?.toString()}
              onValueChange={(value) => handleSelectChange('rating', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a rating" />
              </SelectTrigger>
              <SelectContent>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <SelectItem key={rating} value={rating.toString()}>
                    {rating} Star{rating !== 1 ? 's' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => handleSwitchChange('featured', checked)}
            />
            <Label htmlFor="featured">Feature this testimonial</Label>
          </div>

          <div className="flex justify-between pt-4">
            <div className="space-x-2">
              <Button type="submit" disabled={isSubmitting} className="mr-2">
                {isSubmitting ? 'Saving...' : testimonial ? 'Update Testimonial' : 'Add Testimonial'}
              </Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            </div>
            
            {testimonial && onDelete && (
              <Button 
                type="button" 
                variant="destructive" 
                onClick={handleDelete} 
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'} 
              </Button>
            )}
          </div>
        </div>
      </form>
    </Card>
  )
}