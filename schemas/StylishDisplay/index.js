import marginAndPadding from '../components/MarginAndPadding';

import allowComments from '../components/allowComments';

export default {
	title: 'Stylish Display',
	name: 'stylishDisplay',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Subtitle',
			name: 'subtitle',
			type: 'string',
		},
		{
			title: 'Light Mode',
			name: 'lightMode',
			type: 'boolean',
			initialValue: true,
		},
		{
			title: 'Background Image Desktop',
			name: 'BGImageDesktop',
			type: 'image',
		},
		{
			title: 'Background Image Mobile',
			name: 'BGImageMobile',
			type: 'image',
		},
		{
			title: 'Forground Image',
			name: 'forgroundImage',
			type: 'image',
		},
		{
			title: 'Display Image',
			name: 'displayImage',
			type: 'image',
		},
		{
			title: 'Orientation',
			name: 'orientation',
			type: 'string',
			initialValue: 'ltr',
			options: {
				list: [
					{ title: 'Left to Right', value: 'ltr' },
					{ title: 'Right to Left', value: 'rtl' },
				],
			},
		},
		marginAndPadding,
		...allowComments,
	],
	preview: {
		select: {
			title: 'title',
		},

		prepare({ title }) {
			return {
				title: `Stylish Display - "${title ? title : 'unnamed'}"`,
			};
		},
	},
};
