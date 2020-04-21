
const pkg = require('./package.json');
module.exports={
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs'},
		{ file: pkg.module, format: 'es'}
	]
};
