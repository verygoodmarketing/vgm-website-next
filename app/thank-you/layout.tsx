import type React from 'react'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={`${inter.className} min-h-screen bg-white`}>
			{children}
			<Toaster />
		</div>
	)
}
