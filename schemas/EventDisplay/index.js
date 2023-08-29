import allowComments from '../components/allowComments';

export default {
	title: 'Event Display',
	name: 'eventDisplay',
	type: 'document',
	fields: [
		{
			title: 'Enable Light Mode',
			name: 'lightMode',
			type: 'boolean',
			initialValue: false,
		},
		{
			title: 'Events',
			name: 'events',
			type: 'array',
			of: [{ type: 'event' }, { type: 'reference', to: [{ type: 'event' }] }],
		},
		...allowComments,
	],
	preview: {
		prepare() {
			return {
				title: 'Event display',
			};
		},
	},
};
