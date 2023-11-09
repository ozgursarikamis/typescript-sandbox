module.exports = function(source) {
	if(this.mode === 'production' && source.indexOf('console.log')) {
		this.emitError('console.log is not allowed in production');
	}
	console.log('============================loader is running', source);
	return source; // we could modify the source before returning it
}