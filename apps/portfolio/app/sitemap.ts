import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://eneascaccabarozzi.xyz',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://eneascaccabarozzi.xyz/about',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: 'https://eneascaccabarozzi.xyz/contacts',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
	]
}
