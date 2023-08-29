import allowComments from '../components/allowComments';

export default {
	title: 'Account Header',
	name: 'accountHeader',
	type: 'document',
	fields: [
		{
			title: 'Test',
			name: 'test',
			type: 'string',
		},
		...allowComments,
	],
	preview: {
		prepare() {
			return {
				title: `Account Header`,
			};
		},
	},
};
