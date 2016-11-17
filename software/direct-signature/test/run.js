var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();
var testDir = './test';
// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file){
    // Only keep the .js files
	console.log(file);
	const suffix = '.test.js'
    return file.substr(-1 * suffix.length) === suffix;

}).forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});

// Run the tests.
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});