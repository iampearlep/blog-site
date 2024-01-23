import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  type: "document",
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
              name: "caption",
              type: 'string',
              title: "Image caption",
              description: "caption displayed below the image",
            },
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
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    
  ]
})