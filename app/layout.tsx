import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { TransitionProvider } from '@/components/transition-provider'
import AnimatedContent from '@/components/animated-content'
import ScrollToTop from '@/components/scroll-to-top'
import { Toaster } from '@/components/ui/toaster'
import HubspotScript from '@/components/hubspot-script'
import FacebookPixel from '@/components/facebook-pixel'
import GoogleAnalytics from '@/components/google-analytics'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
	metadataBase: new URL('https://verygoodmarketing.com'),
	title: {
		template: '%s | Very Good Marketing Co. LLC',
		default: 'Very Good Marketing Co. LLC - Transparent Marketing for Small Businesses',
	},
	description:
		'Helping new and small service-based businesses advertise cost-effectively with maximum transparency since 2024.',
	keywords: ['marketing', 'small business', 'transparent marketing', 'cost-effective advertising'],
	authors: [{ name: 'Very Good Marketing Co. LLC' }],
	creator: 'Very Good Marketing Co. LLC',
	icons: '/vgm-favicon.png',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://verygoodmarketing.com',
		siteName: 'Very Good Marketing Co. LLC',
		title: 'Very Good Marketing Co. LLC - Transparent Marketing for Small Businesses',
		description:
			'Helping new and small service-based businesses advertise cost-effectively with maximum transparency since 2024.',
		images: [
			{
				url: '/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Very Good Marketing Co. LLC',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Very Good Marketing Co. LLC - Transparent Marketing for Small Businesses',
		description:
			'Helping new and small service-based businesses advertise cost-effectively with maximum transparency since 2024.',
		images: ['/images/og-image.jpg'],
	},
	generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
				<TransitionProvider>
					<div className="flex min-h-screen flex-col">
						<Header />
						<main className="grow">
							<AnimatedContent>{children}</AnimatedContent>
						</main>
						<Footer />
					</div>
					<ScrollToTop />
				</TransitionProvider>
				<Toaster />
				<HubspotScript />
				<FacebookPixel />
				<GoogleAnalytics />
			</body>
		</html>
	)
}
