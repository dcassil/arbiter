const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const config = {
	entry: [
		'webpack-dev-server/client?http://localhost:8082',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: [
				'react-hot-loader',
				'babel-loader'
			]
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'

			})
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader', 'eslint-loader']
		}],
	},
	output: {
		path: __dirname + '/dist', // eslint-disable-line no-path-concat
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.css'],
		modules: [
			path.resolve('./src'),
			path.resolve('./node_modules')
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		})
	],
	devServer: {
		contentBase: './dist',
		historyApiFallback: true
	}
};

if (process.env.NODE_ENV === 'production') {
	config.devtool = 'cheap-module-source-map';
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
		new ExtractTextPlugin({
			filename: 'bundle.css',
			disable: false,
			allChunks: true
		}),
		new webpack.optimize.AggressiveMergingPlugin({
			minSizeReduce: 1,
			moveToParents: true

		})
	);

} else {
	config.devtool = 'cheap-module-eval-source-map';
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
		new ExtractTextPlugin({ disable: true })
	);
}

module.exports = config;
