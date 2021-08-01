const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: 'file-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "./src/pwa/manifest.json", to: "" },
				{ from: "./src/pwa/icon-maskable.png", to: "" },
				{ from: "./src/pwa/icon-large.png", to: "" },
				{ from: "./src/pwa/icon-512.png", to: "" },
				{ from: "./src/pwa/icon-256.png", to: "" },
				{ from: "./src/pwa/icon-128.png", to: "" },
				{ from: "./src/pwa/icon-64.png", to: "" },
				{ from: "./src/pwa/icon-32.png", to: "" },
			],
		}),
		new HtmlWebpackPlugin({
			title: 'Silver Nabla',
			template: 'public/index.html'
		}),
		new WorkboxWebpackPlugin.InjectManifest({
			swSrc: "./src/pwa/worker.js",
			swDest: "worker.js",
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
}