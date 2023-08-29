export default {
	title: 'Tithe History',
	name: 'titheHistory',
	type: 'document',
	fields: [
		{
			title: 'test',
			name: 'test',
			type: 'string',
		},
	],
	preview: {
		prepare() {
			return {
				title: `Tithe History`,
			};
		},
	},
};
