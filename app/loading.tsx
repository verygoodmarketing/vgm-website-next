import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
        <h2 className="text-xl font-medium text-gray-700">Loading content...</h2>
        <p className="text-gray-500 text-center max-w-md">
          We're preparing the page for you. This will only take a moment.
        </p>
      </div>
    </div>
  )
}
