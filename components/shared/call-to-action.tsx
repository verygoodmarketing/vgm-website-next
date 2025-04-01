import Container from './container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface CallToActionProps {
	title: string
	description: string
	buttonText: string
	buttonLink: string
}

export default function CallToAction({ title, description, buttonText, buttonLink }: CallToActionProps) {
	return (
		<section className="py-16 md:py-24 bg-blue-600 text-white">
			<Container>
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
					<p className="text-xl mb-8">{description}</p>
					<Button
						asChild
						variant="white"
					>
						<Link href={buttonLink}>{buttonText}</Link>
					</Button>
				</div>
			</Container>
		</section>
	)
}
