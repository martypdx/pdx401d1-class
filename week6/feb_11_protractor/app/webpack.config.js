const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve( __dirname, '../server/public' ),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	plugins: [new HtmlWebpackPlugin({
		template: './index.html'
	})],
	module: {
		preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
			    query: {
			      presets: ['es2015'] //,
			      // cacheDirectory: true,
			      // plugins: ['transform-runtime']
			    }
			},
			{ 	
				test: /\.css$/, 
				loader: 'style!css'
			},
			{ 	
				test: /\.html$/, 
				loader: 'html'
			}
		]
	}
};