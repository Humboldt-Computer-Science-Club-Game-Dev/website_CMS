export default {
   title: 'Image Storage',
   name: 'imageStorage',
   type: 'document',
   fields: [
      {
         title: 'Image Name',
         name: 'imageName',
         type: 'string',
      },
      {
         title: 'Image',
         name: 'image',
         type: 'image',
      },
      {
         title: 'Description',
         name: 'description',
         type: 'text',
      },
      {
         title: 'Is Wide?',
         name: 'isWide',
         description: 'Is the image wider than it is tall',
         type: 'boolean',
         initialValue: true,
      },
   ],
   preview: {
      select: {
         title: 'imageName',
         media: 'image',
      },

      prepare({ media, title }) {
         return {
            title: `Image - "${title ? title : 'unnamed'}"`,
            media: media,
         };
      },
   },
};
