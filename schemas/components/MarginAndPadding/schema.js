import cssUnits from '../CSSUnits';

//Note, this is not an array of feild objects but a schema for a feild

export default {
	title: 'margin And Padding',
	name: 'marginAndPadding',
	type: 'object',
	fields: [
		{
			title: 'Apply Custom Margin?',
			name: 'applyCustomMargin',
			type: 'boolean',
		},
		{
			title: 'Margin Units',
			name: 'marginUnits',
			type: 'string',
			initialValue: 'rem',
			options: {
				list: [...cssUnits],
			},
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomMargin) return true;
			},
		},
		{
			title: 'Margin Top',
			name: 'marginTop',
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomMargin) return true;
			},
			initialValue: '0',
		},
		{
			title: 'Margin Right',
			name: 'marginRight',
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomMargin) return true;
			},
			initialValue: '0',
		},
		{
			title: 'Margin Bottom',
			name: 'marginBottom',
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomMargin) return true;
			},
			initialValue: '0',
		},
		{
			title: 'Margin Left',
			name: 'marginLeft',
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomMargin) return true;
			},
			initialValue: '0',
		},
		{
			title: 'Apply Custom Padding?',
			name: 'applyCustomPadding',
			type: 'boolean',
		},
		{
			title: 'Padding Units',
			name: 'paddingUnits',
			type: 'string',
			initialValue: 'rem',
			options: {
				list: [...cssUnits],
			},
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomPadding) return true;
			},
		},
		{
			title: 'Padding Top',
			name: 'paddingTop',
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomPadding) return true;
			},
			initialValue: '0',
		},
		{
			title: 'Padding Right',
			name: 'paddingRight',
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomPadding) return true;
			},
			initialValue: '0',
		},
		{
			title: 'Padding Bottom',
			name: 'paddingBottom',
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomPadding) return true;
			},
			initialValue: '0',
		},
		{
			title: 'Padding Left',
			name: 'paddingLeft',
			type: 'string',
			hidden: ({ parent }) => {
				if (!parent || !parent.applyCustomPadding) return true;
			},
			initialValue: '0',
		},
	],
};
