import allowComments from '../components/allowComments';

export default {
	title: 'Standalone Text',
	name: 'standaloneText',
	type: 'document',
	fields: [
		{
			title: 'Light Mode',
			name: 'lightMode',
			type: 'boolean',
			initialValue: true,
		},
		{
			title: 'Titile',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Subtitle',
			name: 'subtitle',
			type: 'string',
		},
		{
			title: 'Texts',
			name: 'texts',
			type: 'array',
			of: [{ type: 'text' }],
		},
		{
			title: 'Rich Text',
			name: 'richText',
			type: 'standardRichText',
		},
		...allowComments,
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			return {
				title: `Standalone Text - "${!selection.title ? 'Unset' : selection.title}"`,
			};
		},
	},
};
