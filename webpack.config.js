module.exports = {
	entry: "./src/main.tsx",
	
	output: {
		path: "./dist",
		publicPath: "/dist",
		filename: "bundle.js"
	},

	devtool: "source-map",

	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},

	module: {
		preLoaders: [
			{ test: /\.js$/, loader: "source-map-loader" }
		],

		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	},

	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"react-redux": "ReactRedux"
	}
};