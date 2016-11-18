

exports.generateKeys = generateKeys;
//.\openssl genrsa 256 -pass 213
function generateKeys() {
	return new Promise((resolve, reject) => {
		openssl(['genrsa', '256', '-pass' ,'213'], (error, stdout, stderr) => {
			if (error) {
				reject(error);
			}
			resolve(stdout);
		}); 
	});
}

const path = require('path');
const execFile = require('child_process').execFile;
const opensslFile = path.resolve(__dirname, '../bin/openssl');

function openssl(args, callback) {
	return execFile(opensslFile, args, {}, callback);
}