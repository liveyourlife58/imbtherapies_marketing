import { MetadataRoute } from 'next'

export default function storeProductsSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://imbtherapies.com'
  
  return [
    {
      url: `${baseUrl}/#vibrant-tests`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#fullscript-supplements`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
