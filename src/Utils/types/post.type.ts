import { Document } from '@contentful/rich-text-types'

export interface PostFields {
	title: string
	slug: string
	excerpt: string
	coverImage: {
		fields: {
			file: {
				url: string
				details: {
					image: {
						width: number
						height: number
					}
				}
			}
		}
	}
	author: {
		fields: {
			name: string
			picture: {
				fields: {
					file: {
						url: string
					}
				}
			}
		}
	}
	date: string
	content: Document
}
export interface PostProps {
	fields: PostFields
}
