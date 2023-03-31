export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'string',
        options: {
          list: [
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' },
            { title: 'Not specified', value: 'not_specified' },
          ],
          layout: 'radio',
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
      },
      {
        name: 'ratings',
        title: 'Ratings',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'tvShow',
                title: 'TV Show',
                type: 'reference',
                to: [{ type: 'tvShow' }],
              },
              {
                name: 'rating',
                title: 'Rating',
                type: 'number',
                validation: (Rule) => Rule.min(1).max(5),
              },
              {
                name: 'comment',
                title: 'Comment',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  };