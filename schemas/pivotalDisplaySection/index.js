import allowComments from '../components/allowComments';

export default [
	{
		name: 'pivotalDisplay',
		title: 'Pivotal Display',
		type: 'document',
		fields: [
			{
				name: 'title',
				title: 'Pivotal Display Title',
				type: 'string',
			},
			{
				title: 'Light Mode',
				name: 'lightMode',
				type: 'boolean',
				initialValue: false,
			},
			{
				name: 'text',
				title: 'text',
				type: 'string',
			},
			{
				name: 'actionButton',
				title: 'Action Button',
				type: 'landingScreenActionButton',
			},
			{
				name: 'orientation',
				title: 'Orientation',
				type: 'string',
				options: {
					list: [
						{ title: 'Left to Right', value: 'ltr' },
						{ title: 'Right to Left', value: 'rtl' },
					],
				},
			},
			{
				name: 'imgSrc',
				title: 'Display Image',
				type: 'image',
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
					title: `Pivital Display - "${!selection.title ? 'Unset' : selection.title}"`,
				};
			},
		},
	},
];
