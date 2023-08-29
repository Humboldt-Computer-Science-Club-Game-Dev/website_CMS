import allowComments from '../components/allowComments';

export default {
	title: 'Give Payment',
	name: 'givePayment',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		...allowComments,
	],
	preview: {
		prepare() {
			return { title: 'Give Payment' };
		},
	},
};
