const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const Define = require( 'webpack' ).DefinePlugin;
const path = require( 'path' );

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve( __dirname, '../server/public' ),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new Define({
			API_URL: JSON.stringify( process.env.API_URL || '' )
		})	
	],
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
			    //   plugins: ['transform-runtime']
			    }
			},
			{
				test: /\.css$/,
				loader: 'style!css'	
			},
			{ 	
				test: /\.scss$/,
				exclude: /node_modules/,
                loader: 'style!css?sourceMap!sass?sourceMap'
			},
			{ 	
				test: /\.html$/, 
				loader: 'html'
			}
		]
	},
	sassLoader: {
		includePaths: [ './src/scss' ]
	}
};