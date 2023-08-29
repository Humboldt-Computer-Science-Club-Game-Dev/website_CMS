import allowComments from '../components/allowComments';

export default {
	title: 'Map at Location',
	name: 'mapAtLocation',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Latitude',
			name: 'latitude',
			type: 'string',
		},
		{
			title: 'Longitude',
			name: 'longitude',
			type: 'string',
		},
		{
			title: 'Link to directions',
			name: 'linkToDirections',
			type: 'url',
		},
		{
			title: 'API key',
			description:
				'Its probobly pk.eyJ1IjoiZGVsYWlyZWJjIiwiYSI6ImNrdzJnYXk3MjAxemcybm1uMHo2dnc1ZGQifQ.UA0cuo0xrr7iFXKLOxekOA',
			name: 'apiKey',
			type: 'string',
			initialValue:
				'pk.eyJ1IjoiZGVsYWlyZWJjIiwiYSI6ImNrdzJnYXk3MjAxemcybm1uMHo2dnc1ZGQifQ.UA0cuo0xrr7iFXKLOxekOA',
		},
		{
			title: 'Style Url',
			description: "Don't wory about this field. It most likely dosen't matter",
			name: 'styleURL',
			type: 'url',
		},
		...allowComments,
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			return {
				title: `Map called - "${!selection.title ? 'Unset' : selection.title}"`,
			};
		},
	},
};
