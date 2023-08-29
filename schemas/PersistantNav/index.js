export default {
	title: 'Persistant Nav',
	name: 'persistantNav',
	type: 'document',
	description: 'These pages will always be displayed on the top of the navbar',
	fields: [
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
			validation: Rule => Rule.required().max(2),
		},
	],
	preview: {
		prepare() {
			return {
				title: `Persistant Nav`,
			};
		},
	},
};
