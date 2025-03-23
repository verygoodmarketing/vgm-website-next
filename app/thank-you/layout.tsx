import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Toaster } from '@/components/ui/toaster'
import HubspotScript from '@/components/hubspot-script'
import FacebookPixel from '@/components/facebook-pixel'
import GoogleAnalytics from '@/components/google-analytics'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
	metadataBase: new URL('https://verygoodmarketing.com'),
	title: {
		template: '%s | Very Good Marketing Co. LLC',
		default: 'Thank You | Very Good Marketing Co. LLC',
	},
	description: 'Thank you for contacting Very Good Marketing Co. LLC. We have received your message.',
	robots: {
		index: false,
		follow: false,
	},
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className="scroll-smooth"
			suppressHydrationWarning
		>
			<head>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body
				className={inter.className}
				suppressHydrationWarning
			>
				<main className="min-h-screen">{children}</main>
				<Toaster />
				<HubspotScript />
				<FacebookPixel />
				<GoogleAnalytics />
			</body>
		</html>
	)
}
