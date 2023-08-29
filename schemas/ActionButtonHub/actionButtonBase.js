import SchemaDuper from '../SchemaDuper';

export default () => {
   let actionButtonSchema = new SchemaDuper({
      name: 'actionButton',
      title: 'Action Button',
      type: 'object',
      fields: [
         {
            name: 'title',
            title: 'Title new',
            type: 'string',
         },
         {
            name: 'onClick',
            title: 'On Click',
            type: 'string',
            options: {
               list: [
                  { title: 'Link', value: 'link' },
                  { title: 'Action', value: 'action' },
                  { title: 'Page Change', value: 'pageChange' },
               ],
            },
            initialValue: 'link',
         },
         {
            name: 'link',
            title: 'Link',
            type: 'string',
            hidden: ({ parent }) => {
               if (!parent || !parent.onClick) return true;
               if (parent.onClick === 'link') return false;
               return true;
            },
         },
         {
            name: 'action',
            title: 'Action Should be replaced',
            type: 'string',
            hidden: ({ parent }) => {
               if (!parent || !parent.onClick) return true;
               if (parent.onClick === 'action') return false;
               return true;
            },
         },
         {
            name: 'pageChange',
            title: 'Change Page To',
            type: 'reference',
            to: { type: 'page' },
            hidden: ({ parent }) => {
               if (!parent || !parent.onClick) return true;
               if (parent.onClick === 'pageChange') return false;
               return true;
            },
         },
      ],
   });

   return actionButtonSchema;
};
