var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withStandaloneEntry('bootstrap-layout-scrollable')
	.withLibrary('BootstrapLayoutScrollable')
	.withAlias({
		'bootstrap-layout-scrollable': path.resolve(__dirname, '..')
	})
	.webpack({
		sassLoader: {
			importer: require('sass-importer-npm')
		},
		sassImportLoader: {
			base: './src/sass/_variables.scss'
		},
		externals: [{
			'jquery': {
				root: '$',
				commonjs2: 'jquery',
				commonjs: 'jquery',
				amd: 'jquery'
			}
		}]
	})
	.use('extract')

module.exports = config