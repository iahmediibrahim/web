import { client } from '@/lib/contentful/client'

export async function getPosts() {
	try {
		const response = await client.getEntries({
			content_type: 'post', // Replace with your content type
			order: '-sys.createdAt',
			limit: 10,
		})

		return {
			props: {
				posts: response.items,
			},
		}
	} catch (error) {
		console.error('Contentful fetch error:', error)
		return []
	}
}
export async function getFeaaturedPosts() {
	try {
		const response = await client.getEntries({
			content_type: 'post', // Replace with your content type
			order: '-sys.createdAt',
			limit: 3,
			'fields.featured': true,
		})
		return {
			props: {
				posts: response.items,
			},
		}
	} catch (error) {
		console.error('Contentful fetch error:', error)
		return []
	}
}

// Cache configuration
export const postKeys = {
	all: ['posts'],
	lists: () => [...postKeys.all, 'list'],
	featured: () => [...postKeys.all, 'featured'],
}
