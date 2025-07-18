import { defineType, defineField } from 'sanity'

export const peopleSchema = defineType({
  name: 'people',
  title: 'People',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'text',
    },
  },
}) 