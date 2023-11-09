class HelloWorldPlugin {
	apply(compiler) { // `apply` method is called once by the webpack compiler

		//compiler.hooks.done: When the compilation has finished
		compiler.hooks.done.tap('Hello World Plugin', (
			stats /* stats is passed as argument when done hook is tapped.  */
		) => {
			console.log();
			console.log();
			console.log('Hello World! Building has finished!');
			console.log();
			console.log();
		});
	}
}

module.exports = HelloWorldPlugin;