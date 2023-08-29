export default {
	title: 'Horizontal Rule',
	name: 'horizontalRule',
	type: 'object',
	fields: [
		{
			title: 'Enabeld',
			name: 'enabeld',
			type: 'boolean',
			initialValue: true,
			readOnly: true,
		},
		{
			title: 'Light Mode',
			name: 'lightMode',
			type: 'boolean',
			initialValue: false,
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Horizontal Rule',
			};
		},
	},
};
