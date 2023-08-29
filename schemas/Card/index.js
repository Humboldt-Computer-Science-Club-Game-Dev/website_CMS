export default {
  title: 'Card',
  name: 'card',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
    },
    {
      title: 'Color 1',
      name: 'color1',
      type: 'string',
    },
    {
      title: 'Color 2',
      name: 'color2',
      type: 'string',
    },
    {
      title: 'Fixed Height',
      name: 'fixedHeight',
      type: 'string',
      InitialValue: '15rem',
    },
    {
      title: 'Background Image',
      name: 'BGImage',
      type: 'image',
    },
    {
      title: 'Foreground Image',
      name: 'forgroundImage',
      type: 'image',
    },
    {
      name: 'actionButton',
      title: 'Action Button',
      type: 'genericActionButton',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `"${title}" Card`,
      }
    },
  },
}
