'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { SiteSettings } from '@/lib/settings-service'

interface FooterClientProps {
	settings: SiteSettings
}

export default function FooterClient({ settings }: FooterClientProps) {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-xl font-bold mb-4">Very Good Marketing Co. LLC</h3>
						<p className="mb-4 text-gray-100">
							Helping new and small service-based businesses advertise cost-effectively with maximum transparency.
						</p>
						<div className="flex space-x-4">
							{settings.social?.facebook && (
								<a
									href={settings.social.facebook}
									className="text-gray-100 hover:text-white transition-colors"
								>
									<Facebook size={20} />
									<span className="sr-only">Facebook</span>
								</a>
							)}
							{settings.social?.instagram && (
								<a
									href={settings.social.instagram}
									className="text-gray-100 hover:text-white transition-colors"
								>
									<Instagram size={20} />
									<span className="sr-only">Instagram</span>
								</a>
							)}
							{settings.social?.linkedin && (
								<a
									href={settings.social.linkedin}
									className="text-gray-100 hover:text-white transition-colors"
								>
									<Linkedin size={20} />
									<span className="sr-only">LinkedIn</span>
								</a>
							)}
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-gray-100 hover:text-white transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="text-gray-100 hover:text-white transition-colors"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-gray-100 hover:text-white transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/articles"
									className="text-gray-100 hover:text-white transition-colors"
								>
									Resources
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-100 hover:text-white transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<ul className="space-y-2">
							<li className="flex items-center">
								<Mail
									size={16}
									className="mr-2"
								/>
								<a
									href={`mailto:${settings.email}`}
									className="text-gray-100 hover:text-white transition-colors"
								>
									{settings.email}
								</a>
							</li>
							<li className="flex items-center">
								<Phone
									size={16}
									className="mr-2"
								/>
								<a
									href={settings.phone.href}
									className="text-gray-100 hover:text-white transition-colors"
								>
									{settings.phone.display}
								</a>
							</li>
						</ul>
						<div className="mt-4">
							<h4 className="text-sm font-semibold mb-2">Office Hours</h4>
							<p className="text-gray-100 text-sm">
								{settings.hours?.weekday && (
									<span>
										Weekday: {settings.hours.weekday}
										<br />
									</span>
								)}
								{settings.hours?.weekend && <span>Weekend: {settings.hours.weekend}</span>}
							</p>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-100 text-sm">
						&copy; {currentYear} Very Good Marketing Co. LLC. All rights reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link
							href="/privacy"
							className="text-gray-100 hover:text-white text-sm transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="text-gray-100 hover:text-white text-sm transition-colors"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
