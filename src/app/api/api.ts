import { client } from '@/lib/contentful/client'

import { unstable_cache as cache } from 'next/cache'

export const getPosts = cache(
	async () => {
		try {
			const response = await client.getEntries({
				content_type: 'post',
				include: 2, // Include linked assets
				order: '-sys.createdAt', // Add ordering to ensure latest posts appear first
			})

			if (!response?.items) {
				throw new Error('Failed to fetch posts')
			}

			return {
				props: {
					posts: response.items,
				},
			}
		} catch (error) {
			console.error('Error fetching posts:', error)
			return {
				props: {
					posts: [],
				},
			}
		}
	},
	['posts'], // Simplified cache key
	{
		tags: ['posts'], // Matching tag for revalidation
		revalidate: 3600, // Fallback revalidation in seconds (1 hour)
	},
)

export const getFeaturedPosts = cache(
	async () => {
		try {
			const response = await client.getEntries({
				content_type: 'post',
				include: 2, // Include linked assets

				order: '-sys.createdAt', // Add ordering to ensure latest posts appear first
				limit: 3,
				'fields.featured': true,
			})

			if (!response?.items) {
				throw new Error('Failed to fetch posts')
			}

			return {
				props: {
					posts: response.items,
				},
			}
		} catch (error) {
			console.error('Error fetching posts:', error)
			return {
				props: {
					posts: [],
				},
			}
		}
	},
	['featuredPosts'], // Simplified cache key
	{
		tags: ['featuredPosts'], // Matching tag for revalidation
		revalidate: 3600, // Fallback revalidation in seconds (1 hour)
	},
)
