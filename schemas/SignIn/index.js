export default {
   title: 'Sign In',
   name: 'signIn',
   type: 'object',
   fields: [
      {
         title: 'Title',
         initialValue: 'Sign In',
         name: 'title',
         type: 'string',
      },
   ],
   preview: {
      prepare() {
         return { title: 'Sign In' };
      },
   },
};
