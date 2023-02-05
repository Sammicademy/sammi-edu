module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-addon-next'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: config => {
		const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
		fileLoaderRule.exclude = /\.svg$/;

		config.module.rules.push({
			test: /\.svg$/,
			enforce: 'pre',
			loader: require.resolve('@svgr/webpack'),
		});

		return config;
	},
};
