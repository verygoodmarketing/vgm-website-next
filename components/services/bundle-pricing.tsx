import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BundlePricing, BundleFeature } from '@/lib/pricing-service'
import { Check, X } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
interface BundlePricingCardProps {
	bundle: BundlePricing
}

export function BundlePricingCard({ bundle }: BundlePricingCardProps) {
	const { title, features, setupPrice, recurringPrice, savings, ctaText, ctaUrl, popular } = bundle

	// Calculate the total initial price (setup + first month)
	const totalInitialPrice = setupPrice + recurringPrice

	// Calculate if there are any savings
	const hasSavings = savings > 0

	return (
		<Card className={`border-2 ${popular ? 'border-blue-600 shadow-lg relative' : 'border-blue-100'}`}>
			{popular && (
				<div className="absolute -top-2 -right-2 bg-amber-400 text-white px-4 py-1 text-sm font-bold rounded-lg">
					MOST POPULAR
				</div>
			)}
			<CardHeader className={popular ? 'bg-blue-600 text-white' : 'bg-blue-50'}>
				<CardTitle className="text-center">{title}</CardTitle>
			</CardHeader>
			<CardContent className="p-6">
				<div className="space-y-4 mb-6">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex items-start justify-between"
						>
							<div className="flex items-start">
								{feature.included ? (
									<Check className="w-5 h-5 text-green-500 mr-2" />
								) : (
									<X className="w-5 h-5 text-gray-300 mr-2" />
								)}
								<span className={feature.included ? '' : 'text-gray-400'}>{feature.name}</span>
							</div>
							{feature.included && feature.price !== undefined && (
								<span className="text-sm text-gray-500">${feature.price}/mo</span>
							)}
						</div>
					))}
				</div>

				<div className="text-center">
					<p className="text-3xl font-bold text-blue-600 mb-1">${totalInitialPrice}</p>
					<p className="text-sm text-gray-500 mb-2">Initial setup + ${recurringPrice}/month</p>

					{hasSavings && (
						<div className="bg-green-50 p-3 rounded-md mb-6">
							<p className="text-sm font-medium text-green-600">Save ${savings}/month</p>
							<p className="text-xs text-green-500">Bundle discounts automatically applied</p>
						</div>
					)}

					<Button
						asChild
						variant="blue"
						className="w-full"
					>
						<Link href={ctaUrl}>{ctaText}</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}

interface BundlePricingSectionProps {
	bundles: BundlePricing[]
}

export default function BundlePricingSection({ bundles }: BundlePricingSectionProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			{bundles.map((bundle, index) => (
				<BundlePricingCard
					key={index}
					bundle={bundle}
				/>
			))}
		</div>
	)
}
