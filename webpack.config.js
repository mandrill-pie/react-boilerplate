const dirname = __dirname;
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
	require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
	require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');
	console.log(isProduction ? 'Production build' : 'Development build');

	return {
		entry: [
			'babel-polyfill',
			'./src/app.js'
		],
		output: {
			path: path.join(dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			loaders: [{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				query: {
					presets: [
						'env',
						'react',
						//'es2015'
					],
					plugins: [
						'transform-class-properties',
						'transform-object-rest-spread'
					]
				}
			}, {
				use: CSSExtract.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}),
				test: /\.s?css$/
			}]
		},
		plugins: [
			CSSExtract,
			new webpack.DefinePlugin({
				'process.env.FIREBASE_API_KEY': 						JSON.stringify(process.env.FIREBASE_API_KEY),
				'process.env.FIREBASE_AUTH_DOMAIN': 				JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
				'process.env.FIREBASE_DATABASE_URL': 				JSON.stringify(process.env.FIREBASE_DATABASE_URL),
				'process.env.FIREBASE_PROJECT_ID': 					JSON.stringify(process.env.FIREBASE_PROJECT_ID),
				'process.env.FIREBASE_STORAGE_BUCKET': 			JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
				'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
			})
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(dirname, 'public'),
			historyApiFallback: true, // no 404 for missing pages
			publicPath: '/dist/' // access to assets
		}
	};
};