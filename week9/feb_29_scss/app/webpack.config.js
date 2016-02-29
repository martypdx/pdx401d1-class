const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve( __dirname, '../server/public' ),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html'
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
					presets: ['es2015'],
					cacheDirectory: true,
					plugins: [ 'transform-runtime' ]
			    }
			},
			/* keep this if you need to directly import (require) .css files */
			// { 	
			// 	test: /\.css$/,
            //     loader: 'style!css'
			// },
			{ 	
				test: /\.scss$/,
				exclude: /node_modules/,
				// scss -> css -> style loader
                loader: 'style!css?sourceMap!sass?sourceMap'
				// custom name for easier debug:
				//loader: 'style!css?modules&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]!sass?sourceMap'
				// use "css modules", see https://github.com/css-modules/css-modules
				//loader: 'style!css?modules&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]!sass?sourceMap'
			},
			{ 	
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html'
			}
		]
	},
    sassLoader: {
        includePaths: [ './src/scss', './src/scss/colors' ]
    }
};