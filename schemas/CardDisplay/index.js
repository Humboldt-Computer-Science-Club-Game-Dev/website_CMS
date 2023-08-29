import MarginAndPadding from '../components/MarginAndPadding';

export default {
	title: 'Card Display',
	name: 'cardDisplay',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Cards',
			name: 'cards',
			type: 'array',
			of: [
				{
					title: 'Card',
					name: 'card',
					type: 'card',
				},
				{
					title: 'Card Refrence',
					name: 'cardRefrence',
					type: 'reference',
					to: [{ type: 'card' }],
				},
			],
		},
		{
			title: 'Light Mode',
			name: 'lightMode',
			type: 'boolean',
			initialValue: true,
		},
		MarginAndPadding,
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: `"${title}" Card Display`,
			};
		},
	},
};
