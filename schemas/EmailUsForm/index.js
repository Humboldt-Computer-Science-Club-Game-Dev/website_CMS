import allowComments from '../components/allowComments';

export default {
	title: 'Email Us Form',
	name: 'emailUsForm',
	type: 'object',
	fields: [
		{
			title: 'Display Title',
			name: 'displayTitle',
			type: 'string',
		},
		{
			title: 'Action Button Name',
			name: 'actionButtonName',
			type: 'string',
		},
		...allowComments,
	],
};
