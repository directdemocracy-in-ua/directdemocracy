var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

const testDir = './js/test';
// Instantiate a Mocha instance.
var mocha = new Mocha();


if (process.argv.length < 3) {
	discoverAllTests();
} else {
	mocha.addFile(path.join(testDir, process.argv[2]));
}


// Run the tests.
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});

function discoverAllTests() {
	
	// Add each .js file to the mocha instance
	fs.readdirSync(testDir).filter(function(file){
	    // Only keep the .js files
		//console.log(file);
		const suffix = '.test.js'
	    return file.substr(-1 * suffix.length) === suffix;

	}).forEach(function(file){
	    mocha.addFile(
	        path.join(testDir, file)
	    );
	});
}