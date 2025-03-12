'use server'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Testimonial } from '@/types/testimonial'
import crypto from 'crypto'

// Default testimonials as a fallback
const defaultTestimonials: Testimonial[] = [
	{
		id: 'ts-1',
		quote:
			'Very Good Marketing transformed our online presence. Our website now generates more leads in a month than we used to get in a quarter.',
		author: 'Jane Smith',
		company: 'Local Plumbing Co.',
		image: '/placeholder.svg?height=100&width=100',
		industry: 'Plumbing',
		featured: true,
		rating: 5,
	},
	{
		id: 'ts-2',
		quote:
			"Unlike other agencies we've worked with, they actually care about our long-term success, not just collecting a monthly fee.",
		author: 'John Doe',
		company: 'City Dental Practice',
		image: '/placeholder.svg?height=100&width=100',
		industry: 'Healthcare',
		featured: true,
		rating: 5,
	},
	{
		id: 'ts-3',
		quote:
			"Their transparent approach to marketing is refreshing. We always know exactly what we're paying for and the results we're getting.",
		author: 'Sarah Johnson',
		company: 'Johnson Law Firm',
		image: '/placeholder.svg?height=100&width=100',
		industry: 'Legal',
		featured: true,
		rating: 5,
	},
]

// Get testimonials file path
function getTestimonialsFilePath(): string {
	return path.join(process.cwd(), 'content/testimonials/testimonials.md')
}

// Read testimonials from markdown file
export async function getTestimonials(): Promise<Testimonial[]> {
	try {
		const filePath = getTestimonialsFilePath()

		// Return default testimonials if file doesn't exist
		if (!fs.existsSync(filePath)) {
			return defaultTestimonials
		}

		const fileContents = fs.readFileSync(filePath, 'utf8')
		const { data } = matter(fileContents)

		return (data.testimonials || []) as Testimonial[]
	} catch (error) {
		console.error('Error loading testimonials:', error)
		return defaultTestimonials
	}
}

// Get featured testimonials
export async function getFeaturedTestimonials(limit: number = 3): Promise<Testimonial[]> {
	const allTestimonials = await getTestimonials()

	return allTestimonials.filter(testimonial => testimonial.featured).slice(0, limit)
}

// Get a testimonial by ID
export async function getTestimonialById(id: string): Promise<Testimonial | null> {
	const testimonials = await getTestimonials()
	return testimonials.find(testimonial => testimonial.id === id) || null
}

// Add a new testimonial
export async function addTestimonial(testimonial: Omit<Testimonial, 'id'>): Promise<Testimonial> {
	const testimonials = await getTestimonials()

	// Generate a unique ID for the new testimonial
	const newTestimonial: Testimonial = {
		...testimonial,
		id: `ts-${crypto.randomBytes(4).toString('hex')}`,
	}

	testimonials.push(newTestimonial)
	await saveTestimonials(testimonials)

	return newTestimonial
}

// Update an existing testimonial
export async function updateTestimonial(id: string, updatedData: Partial<Testimonial>): Promise<Testimonial | null> {
	const testimonials = await getTestimonials()
	const index = testimonials.findIndex(t => t.id === id)

	if (index === -1) {
		return null
	}

	testimonials[index] = {
		...testimonials[index],
		...updatedData,
	}

	await saveTestimonials(testimonials)
	return testimonials[index]
}

// Delete a testimonial
export async function deleteTestimonial(id: string): Promise<boolean> {
	const testimonials = await getTestimonials()
	const filtered = testimonials.filter(t => t.id !== id)

	if (filtered.length === testimonials.length) {
		return false // No testimonial was removed
	}

	await saveTestimonials(filtered)
	return true
}

// Save testimonials to markdown file
async function saveTestimonials(testimonials: Testimonial[]): Promise<void> {
	const filePath = getTestimonialsFilePath()
	const content = `---\ntestimonials: ${JSON.stringify(testimonials, null, 2)}\n---\n`

	// Ensure directory exists
	const dirPath = path.dirname(filePath)
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true })
	}

	fs.writeFileSync(filePath, content)
}
