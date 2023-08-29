import allowComments from '../components/allowComments';

export default {
	name: 'featuredVideo',
	title: 'Featured Video',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'leadSpeaker',
			title: 'Lead Speaker',
			type: 'string',
		},
		{
			name: 'date',
			title: 'Date Created',
			type: 'date',
		},
		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
		},
		{
			name: 'includePlayIcon',
			title: 'Include Play Icon',
			type: 'boolean',
			initialValue: false,
		},
		{
			title: 'Video Type',
			name: 'videoType',
			type: 'string',
			options: {
				list: [
					{ title: 'Live', value: 'live' },
					{ title: 'Last Video', value: 'lastVideo' },
					{ title: 'Static', value: 'static' },
				],
			},
			initialValue: 'live',
		},
		{
			name: 'channelID',
			title: 'Channel ID',
			description: "It's probably UCB-ayLSNq0ebhSOE9sBzIBw",
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.videoType) return true;
				if (parent.videoType === 'lastVideo' || parent.videoType === 'live') return false;
				return true;
			},
			initialValue: 'UCB-ayLSNq0ebhSOE9sBzIBw',
		},
		{
			name: 'apiKey',
			title: 'API Key',
			description: "It's probably AIzaSyAUlKvh2aR71HpbUdPnlNXFqKybW9K5DxM",
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.videoType) return true;
				if (parent.videoType === 'lastVideo' || parent.videoType === 'live') return false;
				return true;
			},
			initialValue: 'AIzaSyAUlKvh2aR71HpbUdPnlNXFqKybW9K5DxM',
		},
		{
			name: 'url',
			title: 'Youtube video URL',
			type: 'url',
			hidden: ({ parent }) => {
				if (!parent || !parent.videoType) return true;
				if (parent.videoType === 'static') return false;
				return true;
			},
		},
		{
			title: 'Subtitle',
			name: 'subtitle',
			type: 'string',
		},
		{
			title: 'Texts',
			name: 'texts',
			type: 'array',
			of: [{ type: 'text' }],
		},
		{ title: 'Rich Text', name: 'richText', type: 'standardRichText' },
		...allowComments,
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			return {
				title: `Featured Video - "${!selection.title ? 'Unset' : selection.title}"`,
			};
		},
	},
};
