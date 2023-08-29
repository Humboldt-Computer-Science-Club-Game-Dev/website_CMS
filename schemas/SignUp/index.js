export default {
   title: 'Sign Up',
   name: 'signUp',
   type: 'object',
   fields: [
      {
         title: 'Title',
         initialValue: 'Sign Up',
         name: 'title',
         type: 'string',
      },
   ],
   preview: {
      prepare() {
         return { title: 'Sign Up' };
      },
   },
};
