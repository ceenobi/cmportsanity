export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [
        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
      ],
    },
  ],
}
