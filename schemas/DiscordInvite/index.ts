/* Discord Invite Schema */

export default {
  title: 'Discord Invite',
  name: 'discordInvite',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: any) {
      return {
        title: `${title} (Discord Invite)`,
      }
    },
  },
}
