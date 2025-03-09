import Container from "./container"

interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && <p className="text-xl opacity-90">{description}</p>}
        </div>
      </Container>
    </section>
  )
}

