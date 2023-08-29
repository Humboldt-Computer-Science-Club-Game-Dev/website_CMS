export default {
	title: 'Main Nav Menu',
	name: 'mainNavMenu',
	type: 'document',
	fields: [
		{
			title: 'Main Nav Menu',
			name: 'mainNavMenu',
			type: 'reference',
			to: [
				{
					type: 'navMenu',
				},
			],
		},
		{
			title: 'Persistant Nav Items',
			name: 'persistantNavItems',
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
	__experimental_actions: ['update', 'publish'],
	preview: {
		prepare() {
			return {
				title: `Main Nav Menu`,
			};
		},
	},
};
