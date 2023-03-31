export default {
    name: 'tvShow',
    title: 'TV Show',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'poster',
        title: 'Poster',
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
                name: 'user',
                title: 'User',
                type: 'reference',
                to: [{ type: 'user' }],
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