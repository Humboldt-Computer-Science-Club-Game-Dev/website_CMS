export default {
	title: 'Footer',
	name: 'footer',
	type: 'document',
	fields: [
		{
			title: 'Subtitle',
			name: 'subtitle',
			type: 'standardRichText',
		},
		{
			title: 'Social',
			name: 'social',
			type: 'array',
			of: [
				{
					title: 'Social Media Link',
					name: 'socialMediaLink',
					type: 'object',
					fields: [
						{
							title: 'Social Media Name',
							name: 'socialMediaName',
							type: 'string',
						},
						{
							title: 'Social Media URL',
							name: 'url',
							type: 'url',
						},
						{
							title: 'Social Media Icon',
							name: 'icon',
							type: 'image',
						},
					],
				},
			],
		},
		{
			title: 'footerItems',
			name: 'footerItems',
			type: 'array',
			of: [
				{
					title: 'Page',
					name: 'page',
					type: 'reference',
					to: [
						{
							type: 'page',
						},
					],
				},
			],
		},
	],
	preview: {
		prepare: () => {
			return {
				title: `Footer`,
			};
		},
	},
};
