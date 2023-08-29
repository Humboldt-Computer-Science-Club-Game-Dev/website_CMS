import actionButtonBase from '../ActionButtonHub/actionButtonBase';

export default ({ SLUG } = {}) => {
   let actionButtonSchema = actionButtonBase();
   actionButtonSchema.setKeyValue('name', `${SLUG}ActionButton`);

   actionButtonSchema.setFeildOfNameToValue('action', {
      name: 'action',
      title: 'Landing page specific Action, This is a test',
      type: 'string',
      options: {
         list: [
            { title: 'Link', value: 'link' },
            { title: 'Action', value: 'action' },
         ],
      },
      hidden: ({ parent }) => {
         if (!parent || !parent.onClick) return true;
         if (parent.onClick === 'action') return false;
         return true;
      },
   });

   return actionButtonSchema;
};
