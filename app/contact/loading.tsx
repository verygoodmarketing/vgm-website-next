import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Loading header placeholder */}
        <div className="mb-12 text-center">
          <div className="h-10 w-64 bg-gray-200 rounded-md animate-pulse mx-auto mb-4"></div>
          <div className="h-4 w-full max-w-2xl bg-gray-100 rounded-md animate-pulse mx-auto"></div>
        </div>
        
        {/* Loading tabs placeholder */}
        <div className="flex justify-center mb-8">
          <div className="grid w-full max-w-md grid-cols-2 gap-1 h-10 bg-gray-100 rounded-md overflow-hidden">
            <div className="bg-gray-200 animate-pulse"></div>
            <div className="bg-gray-100 animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading content placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form placeholder */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="p-6 bg-white">
              <div className="space-y-6">
                <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
                  <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
                  <div className="h-24 bg-gray-100 rounded-md animate-pulse"></div>
                  <div className="h-12 w-32 bg-blue-100 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact info placeholder */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
            <div className="p-6">
              <div className="h-6 w-48 bg-gray-200 rounded-md animate-pulse mb-6"></div>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start">
                    <div className="h-6 w-6 bg-blue-100 rounded-full animate-pulse mr-3 mt-1"></div>
                    <div>
                      <div className="h-5 w-24 bg-gray-200 rounded-md animate-pulse mb-2"></div>
                      <div className="h-4 w-40 bg-gray-100 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
        </div>
      </div>
    </div>
  )
}
