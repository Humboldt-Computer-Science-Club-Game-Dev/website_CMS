export default {
	title: 'Nav Menu',
	name: 'navMenu',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Menu Items',
			name: 'menuItems',
			type: 'array',
			of: [
				{
					title: 'Page',
					name: 'page',
					type: 'reference',
					fields: [
						{
							title: 'Hide',
							name: 'hide',
							type: 'boolean',
						},
					],
					to: [
						{
							type: 'page',
						},
					],
				},
				{
					title: 'Nav Menu',
					name: 'navMenu',
					type: 'reference',

					to: [
						{
							type: 'navMenu',
						},
					],
				},
			],
		},
	],
};
