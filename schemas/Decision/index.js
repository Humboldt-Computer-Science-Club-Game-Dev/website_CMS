import allowComments from '../components/allowComments';

export default {
	name: 'decision',
	title: 'Decision Section',
	type: 'document',
	fields: [
		{
			name: 'decitions',
			title: 'Decitions',
			type: 'array',
			of: [{ type: 'decisionFeild' }],
			validation: Rule =>
				Rule.max(3)
					.error("You can't create more than three decision feilds")
					.min(3)
					.error('You must have 3 decision feilds'),
		},
		{
			title: 'Custom Padding',
			name: 'customPadding',
			type: 'customPadding',
		},
		...allowComments,
	],
	preview: {
		prepare() {
			return {
				title: 'Decition Section',
			};
		},
	},
};
