import { defineField, defineType } from "sanity";
import { format, parseISO } from 'date-fns'
import { BookIcon } from '@sanity/icons'
import authorType from './author'

export default defineType({
  name: "post",
  type: "document",
  icon: BookIcon,
  title: "Post",
  fields: [
    defineField({
      name: 'title',
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'slug',
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
    }),
    defineField( {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt'
    }),
   defineField( {
      name: 'description',
      type: 'text',
      title: 'Description'
    }),
    defineField({
      name: 'content',
      type: "array",
      title: "Content",
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields:[
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
           ],
        },
      ]
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [
        {
          type: 'category',
        },
      ]
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, date }) {
      const subtitles = [
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
