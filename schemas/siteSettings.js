export default {
   name: 'siteSettings',
   title: 'Site Settings',
   type: 'document',
   __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
   fields: [
      {
         name: 'title',
         title: 'Site Title',
         type: 'string',
      },
      {
         title: 'Site Icon',
         name: 'siteIcon',
         type: 'image',
      },
      {
         title: 'Site Logo',
         name: 'siteLogo',
         type: 'image',
      },
      {
         name: 'description',
         title: 'Site Description',
         type: 'text',
      },
      {
         title: 'Site URL',
         name: 'siteURL',
         type: 'string',
      },
   ],
};
