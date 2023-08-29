export default {
	name: 'standardRichText',
	title: 'Rich Text',
	description: `Make sure that if your include a settings block, it is inculded at the top of this feild`,
	type: 'array',
	of: [
		{
			type: 'block',
			name: 'richTextBlock',
		},
		{
			type: 'image',
			fields: [
				{
					type: 'text',
					name: 'alt',
					title: 'Alternative text',
					description: `Some of your visitors cannot see images, 
               be they blind, color-blind, low-sighted; 
               alternative text is of great help for those 
               people that can rely on it to have a good idea of 
               what\'s on your page.`,
					options: {
						isHighlighted: true,
					},
				},
			],
		},
		{
			type: 'object',
			title: 'Settings',
			name: 'settings',
			fields: [
				{
					title: 'Alignment',
					name: 'alignment',
					type: 'string',
					description:
						'So this tool I use to make these feilds dose not have an option to edit the alignment of rich text. To get around this I created this custom feild for alignment. Also. Plese make sure that this feild is placed at the top of the rich text.',
					options: {
						list: [
							{ title: 'left', value: 'left' },
							{ title: 'center', value: 'center' },
							{ title: 'right', value: 'right' },
						],
					},
				},
			],
		},
	],
};
