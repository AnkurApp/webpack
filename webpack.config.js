const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry: '/src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},

	resolve: {
		alias: {
			webComp: path.resolve(__dirname, 'src/Components'),		
		}
		// extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		compress: true,
		port: 3010
		// hot: true,
		// proxy: {
		// 	'/api': 'http://localhost:3000',
		//   },
	},

	stats: 'errors-only',

	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			})
		]
	},

	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: './src/index.html'
		// }),
		new MiniCssExtractPlugin({ filename: 'index_bundle.css' }),
		new CompressionPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ]
					}
				}
			},
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			// {
			// 	test: /\.html$/,
			// 	use: [ 'html-loader' ]
			// },
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images'
					}
				}
			}
		]
	}
};
