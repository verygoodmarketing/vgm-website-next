import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const pricingDirectory = path.join(process.cwd(), 'content/pricing')

export interface PricingFeature {
  title: string
  description: string
}

export interface DiscountBundle {
  price: number
  note: string
}

export interface ServicePricing {
  title: string
  setupPrice: number
  recurringPrice: number
  recurringPeriod: string
  description: string
  features: PricingFeature[]
  note?: string
  discountBundle?: DiscountBundle
  ctaText: string
  ctaUrl: string
}

export interface BundleFeatureRaw {
  name: string
  serviceId: string
  included: boolean
}

export interface BundleFeature extends BundleFeatureRaw {
  price?: number
}

export interface BundleDataRaw {
  title: string
  features: BundleFeatureRaw[]
  ctaText: string
  ctaUrl: string
  popular: boolean
}

export interface BundlePricing {
  title: string
  features: BundleFeature[]
  setupPrice: number
  recurringPrice: number
  savings: number
  ctaText: string
  ctaUrl: string
  popular: boolean
}

export interface BundlesDataRaw {
  bundles: BundleDataRaw[]
}

export interface BundlesData {
  bundles: BundlePricing[]
}

export function getServicePricing(service: string): ServicePricing | null {
  try {
    const fullPath = path.join(pricingDirectory, `${service}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return data as ServicePricing
  } catch (error) {
    console.error(`Error loading pricing for service "${service}":`, error)
    return null
  }
}

export function getAllServicePricing(): ServicePricing[] {
  try {
    const fileNames = fs.readdirSync(pricingDirectory)
    const servicePricingFiles = fileNames.filter(
      fileName => fileName.endsWith('.md') && fileName !== 'bundles.md'
    )
    
    return servicePricingFiles.map(fileName => {
      const service = fileName.replace(/\.md$/, '')
      const pricing = getServicePricing(service)
      return pricing as ServicePricing
    }).filter(Boolean)
  } catch (error) {
    console.error('Error loading all service pricing:', error)
    return []
  }
}

export function getBundlePricing(): BundlesData | null {
  try {
    // Get the raw bundle data
    const fullPath = path.join(pricingDirectory, 'bundles.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    const rawBundleData = data as BundlesDataRaw
    
    // Get all service pricing to calculate bundle prices
    const allServices = getAllServicePricing().reduce<Record<string, ServicePricing>>((acc, service) => {
      const serviceId = getServiceIdFromFilename(service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
      acc[serviceId] = service
      return acc
    }, {})
    
    // Calculate bundle pricing based on included services
    const bundles = rawBundleData.bundles.map(bundle => {
      let setupPrice = 0
      let regularRecurringPrice = 0
      let discountedRecurringPrice = 0
      let totalSavings = 0
      
      // Get the website service as it's the baseline for discounts
      const websiteIncluded = bundle.features.some(f => f.serviceId === 'website' && f.included)
      
      // Calculate prices and enhance features with pricing
      const features = bundle.features.map(feature => {
        const service = allServices[feature.serviceId]
        let standardPrice = 0
        let discountedPrice = 0
        
        if (feature.included && service) {
          setupPrice += service.setupPrice || 0
          standardPrice = service.recurringPrice
          
          // Determine if this service has a discount when bundled
          if (websiteIncluded && service.discountBundle && feature.serviceId !== 'website') {
            discountedPrice = service.discountBundle.price
            totalSavings += (standardPrice - discountedPrice)
          } else {
            discountedPrice = standardPrice
          }
          
          regularRecurringPrice += standardPrice
          discountedRecurringPrice += discountedPrice
        }
        
        return {
          ...feature,
          price: feature.included ? discountedPrice : 0
        }
      })
      
      return {
        title: bundle.title,
        features,
        setupPrice,
        recurringPrice: discountedRecurringPrice,
        savings: totalSavings,
        ctaText: bundle.ctaText,
        ctaUrl: bundle.ctaUrl,
        popular: bundle.popular
      }
    })
    
    return { bundles }
  } catch (error) {
    console.error('Error loading bundle pricing:', error)
    return null
  }
}

function getServiceIdFromFilename(title: string): string {
  const simplified = title.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
  
  if (simplified.includes('website')) return 'website'
  if (simplified.includes('google')) return 'google-ads'
  if (simplified.includes('facebook') || simplified.includes('instagram')) {
    return simplified.includes('management') ? 'social-media' : 'social-ads'
  }
  if (simplified.includes('social')) {
    return simplified.includes('management') || simplified.includes('marketing') 
      ? 'social-media' 
      : 'social-ads'
  }
  
  return simplified
}