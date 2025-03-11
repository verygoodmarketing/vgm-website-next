'use client'

import { useState, useEffect } from 'react'
import { Testimonial } from '@/types/testimonial'
import { getTestimonials, addTestimonial, updateTestimonial, deleteTestimonial } from '@/lib/testimonial-service'
import TestimonialForm from '@/components/admin/testimonial-form'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Star, StarOff } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'
import Container from '@/components/shared/container'
import PageHeader from '@/components/shared/page-header'

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)

  // Load testimonials on page load
  useEffect(() => {
    loadTestimonials()
  }, [])

  // Function to load/reload testimonials
  const loadTestimonials = async () => {
    try {
      setLoading(true)
      const data = await getTestimonials()
      setTestimonials(data)
    } catch (error) {
      console.error('Error loading testimonials:', error)
      toast({
        title: 'Error',
        description: 'Failed to load testimonials. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  // Handle submit for new or edited testimonial
  const handleSubmit = async (testimonialData: Omit<Testimonial, 'id'>) => {
    try {
      if (editingTestimonial) {
        // Update existing testimonial
        await updateTestimonial(editingTestimonial.id!, testimonialData)
      } else {
        // Add new testimonial
        await addTestimonial(testimonialData)
      }
      
      // Reset state and reload testimonials
      setIsAddingNew(false)
      setEditingTestimonial(null)
      await loadTestimonials()
    } catch (error) {
      console.error('Error saving testimonial:', error)
      throw error // Re-throw for the form to handle
    }
  }

  // Handle delete testimonial
  const handleDelete = async () => {
    if (!editingTestimonial?.id) return

    try {
      await deleteTestimonial(editingTestimonial.id)
      setEditingTestimonial(null)
      await loadTestimonials()
    } catch (error) {
      console.error('Error deleting testimonial:', error)
      throw error // Re-throw for the form to handle
    }
  }

  // Start editing a testimonial
  const startEditing = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial)
    setIsAddingNew(false)
  }

  // Cancel editing or adding
  const cancelEdit = () => {
    setEditingTestimonial(null)
    setIsAddingNew(false)
  }

  return (
    <Container>
      <PageHeader
        title="Manage Testimonials"
        description="Add, edit, or remove client testimonials that appear on your website."
      />

      <div className="mb-6 flex justify-between items-center">
        <div>
          <p className="text-gray-600">
            {testimonials.length} testimonial{testimonials.length !== 1 ? 's' : ''} total • {testimonials.filter(t => t.featured).length} featured
          </p>
        </div>
        <Button 
          onClick={() => {
            setIsAddingNew(true)
            setEditingTestimonial(null)
          }}
          disabled={isAddingNew || !!editingTestimonial}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Testimonial
        </Button>
      </div>

      {/* Form for adding/editing */}
      {(isAddingNew || editingTestimonial) && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
          </h2>
          <TestimonialForm
            testimonial={editingTestimonial || undefined}
            onSubmit={handleSubmit}
            onDelete={editingTestimonial ? handleDelete : undefined}
            onCancel={cancelEdit}
          />
        </div>
      )}

      {/* List of testimonials */}
      {loading ? (
        <p>Loading testimonials...</p>
      ) : testimonials.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-500">No testimonials yet. Add your first one!</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className={`p-6 cursor-pointer transition hover:shadow-md ${testimonial.featured ? 'border-blue-200' : ''}`}
              onClick={() => startEditing(testimonial)}
            >
              <div className="flex justify-between mb-3">
                <p className="font-bold">{testimonial.author}</p>
                {testimonial.featured ? (
                  <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                ) : (
                  <StarOff className="h-5 w-5 text-gray-300" />
                )}
              </div>
              <p className="text-gray-600 text-sm mb-3">{testimonial.company}</p>
              <p className="italic text-gray-700 mb-4">"{testimonial.quote.length > 150 
                ? testimonial.quote.substring(0, 150) + '...' 
                : testimonial.quote}"</p>
              <p className="text-sm text-gray-500">
                Industry: {testimonial.industry || 'Not specified'} • 
                Rating: {testimonial.rating || 5} stars
              </p>
            </Card>
          ))}
        </div>
      )}
    </Container>
  )
}