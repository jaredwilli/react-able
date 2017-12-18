const path = require('path');

module.exports = {
    title: 'react-able',
    showCode: true,
	showUsage: true,
    highlightTheme: 'pastel-on-dark',
    ignore: [
        '**/*/*Styles.js',
        '**/*.spec.js',
        '**/*/*hexValues.js'
    ],
    getExampleFilename(componentPath) {
		const parts = componentPath.split('/');
		const componentName = parts[parts.length - 1];
		return componentPath.replace(
			`/${componentName}`,
			`/docs/${componentName.replace('.js', '')}.md`
		);
	},
	sections: [
        {
            name: 'Introduction',
			content: 'docs/introduction.md'
		},
		{
            name: 'Installation',
			content: 'docs/installation.md'
		},
		{
			name: 'Colors',
			content: 'docs/colors.md'
		},
		{
			name: 'Spacing',
			content: 'docs/spacing.md'
		},
		{
			name: 'Icons',
			content: 'docs/icons.md'
		},
		{
			name: 'Themes',
			content: 'docs/themes.md',
			sections: [
				{
					name: 'Themer',
					content: 'src/styles/themer/docs/themer.md'
				},
				{
					name: 'withTheme HOC',
					content: 'src/styles/themer/docs/withTheme.md'
				}
			]
		},
		{
			name: 'Components',
			content: 'docs/components.md',
			sections: [
				{
					name: 'Buttons',
					components: 'src/components/Buttons/[A-Z]*.js'
				},
				{
					name: 'Forms',
					content: 'docs/forms.md',
					components: 'src/components/Forms/[A-Z]*.js'
				},
				{
					name: 'Grid',
					components: 'src/components/Grid/[A-Z]*.js'
				},
				{
					name: 'Icon',
					components: 'src/components/Icon/Icon.js'
				},
				{
					name: 'Link',
					components: 'src/components/Link/Link.js'
				},
				{
					name: 'NavigationPills',
					components: 'src/components/NavigationPills/[A-Z]*.js'
				},
				{
					name: 'ScrollTrack',
					components: 'src/components/ScrollTrack/[A-Z]*.js'
				}
			]
		}
	],
	styles: {
		StyleGuide: {
			content: {
				maxWidth: '1600px'
			}
		},
		ReactComponent: {
			root: {
				marginBottom: '48px',
				backgroundColor: '#fff',
				padding: '16px'
			}
		}
	},
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'lib/styleguide/Wrapper')
	},
	styleguideDir: path.join(__dirname, 'docs'),
	theme: {
		color: {
			base: '#333',
			light: '#999',
			lightest: '#ccc',
			link: '#43B02A',
			linkHover: '#43B02A',
			border: '#BDBDBD',
			name: '#FF467E',
			type: '#5FCA44',
			error: '#fff',
			baseBackground: '#f7f7f7',
			errorBackground: '#E6003D',
			codeBackground: '#fff',
			sidebarBackground: '#fff'
		},
		fontFamily: {
			base: [
                'Open Sans',
                'Helvetica Neue',
                'Helvetica',
                'sans-serif'
            ]
		}
	}
};