export default {
	title: 'Event',
	name: 'event',
	type: 'document',
	fields: [
		{
			title: 'Event Name',
			name: 'eventName',
			type: 'string',
		},
		{
			title: 'Thumbnail',
			name: 'thumbnail',
			type: 'reference',
			to: [{ type: 'imageStorage' }],
		},
		{
			title: 'Event Date',
			name: 'eventDate',
			type: 'date',
		},
		{
			title: 'Time Range',
			name: 'timeRange',
			type: 'string',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Action Button',
			name: 'actionButton',
			type: 'genericActionButton',
		},
	],
	preview: {
		select: {
			title: 'eventName',
			date: 'eventDate',
		},
		prepare: ({ title, date }) => {
			return {
				title: `${title} Event on ${date}`,
			};
		},
	},
};
