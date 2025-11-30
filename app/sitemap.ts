import { MetadataRoute } from 'next';
import { prisma } from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.thehammittgroup.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/submit-resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/positions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // Industry pages
  const industries = [
    'automotive',
    'aerospace-defense',
    'food-beverage',
    'oil-gas',
    'electronics',
    'industrial-machinery',
    'plastics-packaging',
    'metal-fabrication',
  ];

  const industryPages = industries.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Position pages
  const positions = [
    'plant-managers',
    'production-supervisors',
    'manufacturing-engineers',
    'quality-control',
    'maintenance-technicians',
    'supply-chain',
    'safety-coordinators',
    'production-workers',
  ];

  const positionPages = positions.map((slug) => ({
    url: `${baseUrl}/positions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog posts
  let blogPosts: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
      },
    });

    blogPosts = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  return [
    ...staticPages,
    ...industryPages,
    ...positionPages,
    ...blogPosts,
  ];
}
