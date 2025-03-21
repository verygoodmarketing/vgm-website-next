export default function Loading() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-12">
        {/* Article header placeholder */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="h-10 w-3/4 bg-gray-200 rounded-md animate-pulse mb-4"></div>
          <div className="flex items-center gap-4 mb-6">
            {/* Author avatar placeholder */}
            <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse"></div>
            <div>
              {/* Author name placeholder */}
              <div className="h-5 w-32 bg-gray-200 rounded-md animate-pulse mb-2"></div>
              {/* Date placeholder */}
              <div className="h-4 w-24 bg-gray-100 rounded-md animate-pulse"></div>
            </div>
          </div>
          
          {/* Tags placeholder */}
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="h-6 w-16 bg-blue-50 rounded-full animate-pulse"></div>
            <div className="h-6 w-20 bg-blue-50 rounded-full animate-pulse"></div>
            <div className="h-6 w-24 bg-blue-50 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Featured image placeholder */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video w-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        
        {/* Article content placeholder */}
        <div className="max-w-3xl mx-auto prose lg:prose-lg">
          <div className="space-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="space-y-3">
                {i % 3 === 1 && (
                  <div className="h-7 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
                )}
                <div className="h-4 w-full bg-gray-100 rounded-md animate-pulse"></div>
                <div className="h-4 w-full bg-gray-100 rounded-md animate-pulse"></div>
                <div className="h-4 w-4/5 bg-gray-100 rounded-md animate-pulse"></div>
                {i % 4 === 0 && (
                  <div className="h-48 w-full bg-gray-200 rounded-md animate-pulse my-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Related articles placeholder */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                {/* Image placeholder */}
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  {/* Title placeholder */}
                  <div className="h-6 w-full bg-gray-200 rounded-md animate-pulse mb-3"></div>
                  {/* Excerpt placeholder */}
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    <div className="h-4 w-2/3 bg-gray-100 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
