export default {
   name: 'sectionTitle',
   title: 'Section Title',
   type: 'object',
   fields: [
      {
         name: 'title',
         title: 'Section Title',
         type: 'string',
      },
      {
         name: 'textColor',
         title: 'Text Color',
         type: 'string',
         initialValue: 'white',
         options: {
            list: [
               { title: 'Transparent', value: 'transparent' },
               { title: 'Light', value: 'white' },
               { title: 'Dark', value: 'black' },
               { title: 'Light Sea Green', value: '#25b89f' },
            ],
         },
      },
      {
         name: 'backgroundColor',
         title: 'Background Color',
         type: 'string',
         initialValue: 'black',
         options: {
            list: [
               { title: 'Transparent', value: 'transparent' },
               { title: 'Light', value: '#F9DDC8' },
               { title: 'Dark', value: 'black' },
            ],
         },
      },
      {
         title: 'Custom Padding',
         name: 'customPadding',
         type: 'customPadding',
      },
   ],
   preview: {
      select: {
         title: 'title',
      },
      prepare(selection) {
         return {
            title: `Title - "${!selection.title ? 'Unset' : selection.title}"`,
         };
      },
   },
};
