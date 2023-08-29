import allowComments from '../components/allowComments'

export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Light Mode',
      name: 'lightMode',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'images',
      name: 'images',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'imageVal',
          type: 'reference',
          to: [{type: 'imageStorage'}],
        },
      ],
    },
    {
      title: 'Custom Padding',
      name: 'customPadding',
      type: 'customPadding',
    },
    ...allowComments,
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: `Gallery Section - "${!selection.title ? 'Unset' : selection.title}"`,
      }
    },
  },
}
