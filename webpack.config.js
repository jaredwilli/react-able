const path = require('path');
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		main: './src/index.js'
	},
	output: {
		library: 'react-able',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				exclude: /node_modules/,
				options: { extract: true }
			}
		]
	},
	resolve: {
		alias: {
			utils: path.resolve(__dirname, 'src/utils')
		}
	},
	plugins: [new SpriteLoaderPlugin()],
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
		'prop-types': 'prop-types',
		radium: 'radium'
	}
};
