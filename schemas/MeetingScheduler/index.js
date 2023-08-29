import marginAndPadding from '../components/MarginAndPadding';

import allowComments from '../components/allowComments';

export default {
	title: 'Meeting Scheduler',
	name: 'meetingScheduler',
	type: 'document',
	fields: [
		{
			title: 'Calendy Title',
			name: 'calendyTitle',
			type: 'string',
		},
		{
			title: 'Calendy Route ID',
			name: 'calendyRouteID',
			type: 'string',
			desctiption:
				'This is the route ID of the calendy page. This is used to create the link to the calendy embed.',
		},
		{
			title: 'Fixed Calendy Height Desktop',
			name: 'fixedCalendyHeightDesktop',
			type: 'number',
			description: 'This is the height, in px, of the calendy embed on desktop. ',
			initialValue: 1042,
		},
		{
			title: 'Fixed Calendy Height Mobile',
			name: 'fixedCalendyHeightMobile',
			type: 'number',
			description: 'This is the height, in px, of the calendy embed on mobile. ',
			initialValue: 1181,
		},
		{
			title: 'Phone Number Title',
			name: 'phoneNumberTitle',
			type: 'string',
		},
		{
			title: 'Phone Number',
			name: 'phoneNumber',
			type: 'string',
		},
		{
			title: 'Phone Number Subtitle',
			name: 'phoneNumberSubtitle',
			type: 'string',
		},
		{
			title: 'Phone Number Instructions',
			name: 'phoneNumberInstructions',
			type: 'array',
			of: [
				{
					title: 'Title Subtitle Pair',
					name: 'titleSubtitlePair',
					type: 'object',
					fields: [
						{
							title: 'Title',
							name: 'title',
							type: 'string',
						},
						{
							title: 'Subtitle',
							name: 'subtitle',
							type: 'text',
						},
					],
				},
			],
		},
		marginAndPadding,
		...allowComments,
	],
	preview: {
		select: {
			title: 'calendyTitle',
		},
		prepare({ title }) {
			return {
				title: `Meeting Scheduler - ${title}`,
			};
		},
	},
};
