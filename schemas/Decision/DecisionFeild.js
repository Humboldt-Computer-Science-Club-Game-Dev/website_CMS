export default {
   title: 'Decision Feild',
   name: 'decisionFeild',
   type: 'object',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
      },
      {
         name: 'texts',
         title: 'texts',
         type: 'array',
         of: [{ type: 'text' }],
      },
      {
         name: 'actionButton',
         title: 'Action Button',
         type: 'genericActionButton',
      },
      {
         name: 'bgImage',
         title: 'Background Image',
         type: 'image',
      },
   ],
};
