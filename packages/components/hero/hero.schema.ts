import { defineField, defineType } from 'sanity';

export const heroSchema = defineType({
	name: 'hero',
	title: 'hero',
	type: 'object',
	fields: [
		defineField({
			name: 'heading',
			title: 'Heading',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'subheading',
			title: 'Subheading',
			type: 'text',
		}),
		defineField({
			name: 'image',
			title: 'Background Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),
			],
		}),
		defineField({
			name: 'cta',
			title: 'Call to Action',
			type: 'object',
			fields: [
				defineField({
					name: 'label',
					title: 'Button Label',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: 'link',
					title: 'Button Link',
					type: 'url',
					validation: (Rule) => Rule.required(),
				}),
			],
		}),
	],
	preview: {
		select: {
			title: 'heading',
			subtitle: 'subheading',
			media: 'image',
		},
	},
});
