module.exports = {

	entry: "./app-client.js",
	output: {
		filename: "./webpack_bundle/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules | app-server.js)/,
				loader: "babel",
				query: {
					presets:["react","es2015"],
					compact: false
				}
			}
		]
	}
};