
const DEFAULT_RSA_KEY_LENGTH = 2048;

exports.generateKeys = generateKeys;
function generateKeys(password, options) {
	if (!password) {
		throw new Error("Password is required to generate new key pair");
	}
	var length = options.length ? options.length : DEFAULT_RSA_KEY_LENGTH;
	return new Promise((resolve, reject) => {
		// run following command
		// openssl genrsa -aes128 -passout stdin 1024
		var process = openssl(['genrsa', '-aes128', '-passout', 'stdin', length], (error, stdout, stderr) => {
			if (error) {
				console.log(stderr);
				reject(error);
			}
			resolve(new Key(stdout));
		}); 
		process.stdin.write(password);
		process.stdin.write('\n');
	});
}

exports.Key = Key
function Key(data) {
	this._data = data;
}


const path = require('path');
const execFile = require('child_process').execFile;
const spawn = require('child_process').spawn;
const opensslFile = path.resolve(__dirname, '../bin/openssl');

function openssl(args, callback) {
	return execFile(opensslFile, args, {}, callback);
}

/*
 * 
 * 

.\openssl genrsa  -aes128 -out private.pem -passout stdin 1024

.\openssl rsa -in private.pem -out public.pem -outform PEM -pubout

echo 'too many secrets' > file.txt


.\openssl rsautl -encrypt -inkey public.pem -pubin -in file.txt -out file.ssl

.\openssl rsautl -decrypt -inkey private.pem -in file.ssl -out decrypted.txt

copy decrypted.txt con
*/
