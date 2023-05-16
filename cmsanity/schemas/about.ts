export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'descA',
      title: 'DescA',
      type: 'text',
    },
    {
      name: 'descB',
      title: 'DescB',
      type: 'text',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [
        {
          name: 'stack',
          title: 'Stack',
          type: 'string',
        },
      ],
    },
    {
      type: 'array',
      name: 'cloudinaryList',
      description: 'This asset is served from Cloudinary',
      of: [{type: 'cloudinary.asset'}],
    },
  ],
}
