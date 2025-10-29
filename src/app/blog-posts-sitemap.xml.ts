import { MetadataRoute } from 'next'

export default function blogPostsSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://imbtherapies.com'
  
  return [
    {
      url: `${baseUrl}/blog/vibrant-wellness-gut-zoomer-complete-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/wheat-zoomer-gluten-sensitivity-testing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/food-sensitivity-complete-200-foods`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/gut-microbiome-health-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fullscript-supplements-digestive-health`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
