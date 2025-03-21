export default function Loading() {
  return (
    <div className="w-full">
      {/* Loading header placeholder */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-10 w-64 bg-gray-200 rounded-md animate-pulse mx-auto mb-4"></div>
            <div className="h-4 w-full max-w-2xl bg-gray-100 rounded-md animate-pulse mx-auto"></div>
          </div>
        </div>
      </div>
      
      {/* Loading articles list placeholder */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Tags filter placeholder */}
          <div className="mb-8">
            <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse mb-4"></div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-8 w-20 bg-gray-100 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
          
          {/* Articles grid placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                {/* Image placeholder */}
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  {/* Title placeholder */}
                  <div className="h-6 w-full bg-gray-200 rounded-md animate-pulse mb-3"></div>
                  {/* Date placeholder */}
                  <div className="h-4 w-24 bg-gray-100 rounded-md animate-pulse mb-4"></div>
                  {/* Excerpt placeholder */}
                  <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-100 rounded-md animate-pulse"></div>
                    <div className="h-4 w-2/3 bg-gray-100 rounded-md animate-pulse"></div>
                  </div>
                  {/* Tags placeholder */}
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 w-16 bg-blue-50 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 bg-blue-50 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-10 bg-gray-100 rounded-md animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
