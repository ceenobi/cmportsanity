export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'text',
    },
    {
      type: 'array',
      name: 'cloudinaryList',
      description: 'This asset is served from Cloudinary',
      of: [{type: 'cloudinary.asset'}],
    },
    {
      name: 'github',
      title: 'Github',
      type: 'string',
    },
    {
      name: 'site',
      title: 'Site',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
  ],
}
