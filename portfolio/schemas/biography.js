export default {
    name: 'biography',
    title: 'Biography',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'intro',
        title: 'Title 1',
        type: 'string',
      },
      {
        name: 'descintro',
        title: 'Body 1',
        type: 'blockContent',
      },
      {
        name: 'interests',
        title: 'Title 2',
        type: 'string',
      },
      {
        name: 'descinterests',
        title: 'Body 2',
        type: 'blockContent',
      },
      {
        name: 'hire',
        title: 'Title 3',
        type: 'string',
      },
      {
        name: 'deschire',
        title: 'Body 3',
        type: 'blockContent',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }