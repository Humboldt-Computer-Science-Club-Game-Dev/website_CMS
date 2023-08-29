import landingActionButton from './actionButton';
import allowComments from '../components/allowComments';

const SLUG = 'landingScreen';

export default [
	{
		name: SLUG,
		title: 'LandingScreen',
		type: 'document',
		fields: [
			{
				name: 'title',
				title: 'Landing Page Title',
				type: 'string',
			},
			{
				name: 'subtitles',
				title: 'Subtitles',
				type: 'array',
				of: [{ type: 'string' }],
			},
			{
				name: 'iconSrc',
				title: 'Icon img',
				type: 'image',
			},
			{
				name: 'actionButtons',
				title: 'Action Buttons',
				type: 'array',
				of: [{ type: `${SLUG}ActionButton` }],
				validation: Rule => Rule.max(2).error("You can't create more than two action buttons"),
			},
			{
				name: 'videoBackground',
				title: 'Video Background',
				type: 'file',
			},
			...allowComments,
		],
		preview: {
			prepare() {
				return {
					title: 'Landing Screen',
				};
			},
		},
	},
	landingActionButton({ SLUG: SLUG }),
];
