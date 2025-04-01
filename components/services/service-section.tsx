import Image from 'next/image'
import Container from '@/components/shared/container'
import { ServicePricing } from '@/lib/pricing-service'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface ServiceSectionProps {
	pricing: ServicePricing
	imagePath: string
	imageAlt: string
	reversed?: boolean
}

export default function ServiceSection({ pricing, imagePath, imageAlt, reversed = false }: ServiceSectionProps) {
	const {
		title,
		description,
		features,
		setupPrice,
		recurringPrice,
		recurringPeriod,
		note,
		discountBundle,
		ctaText,
		ctaUrl,
	} = pricing

	return (
		<section className={`py-16 ${reversed ? 'bg-white' : 'bg-gray-50'}`}>
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className={reversed ? 'order-2 lg:order-1' : ''}>
						<h2 className="text-3xl font-bold mb-6">{title}</h2>
						<p className="text-lg text-gray-600 mb-6">{description}</p>

						<div className="space-y-4 mb-8">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex items-start"
								>
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">{feature.title}</h3>
										<p className="text-gray-600">{feature.description}</p>
									</div>
								</div>
							))}
						</div>

						<div className="bg-blue-50 p-6 rounded-lg mb-6">
							<h3 className="font-bold text-lg mb-2">Pricing</h3>
							{setupPrice > 0 && (
								<p className="text-2xl font-bold text-blue-600 mb-1">
									${setupPrice} <span className="text-base font-normal text-gray-600">one-time setup</span>
								</p>
							)}
							<p className={`text-2xl font-bold text-blue-600 ${setupPrice > 0 ? '' : 'mb-1'}`}>
								${recurringPrice} <span className="text-base font-normal text-gray-600">per {recurringPeriod}</span>
							</p>
							{note && <p className="text-base text-gray-600">{note}</p>}
							{discountBundle && (
								<div className="mt-4 bg-green-100 p-3 rounded-md">
									<p className="text-sm font-bold text-green-800">
										Website Bundle Discount: ${discountBundle.price}/month
									</p>
									<p className="text-xs text-green-700">{discountBundle.note}</p>
								</div>
							)}
						</div>

						<Button
							variant="blue"
							asChild
						>
							<Link href={ctaUrl}>{ctaText}</Link>
						</Button>
					</div>
					<div
						className={`relative h-[400px] rounded-lg overflow-hidden hidden lg:block ${reversed ? 'order-1 lg:order-2' : ''}`}
					>
						<Image
							src={imagePath}
							alt={imageAlt}
							fill
							sizes="100vw"
							className="object-cover"
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
