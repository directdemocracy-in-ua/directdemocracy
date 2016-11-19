
const assert = require('assert');
const openssl = require("../openssl");

var NodeRSA = require('node-rsa');

const PASSWORD = "1234";

describe('openssl', () => {
	var KEY = null;
	before('generate new key', (done) => {
		openssl.generateKeys(PASSWORD, {length: 256}).then((key) => {
			//console.log(KEY._data);
			KEY = key;
			done();
		});
	});
	it('key is generated',  () => {
		assert.ok(KEY);
	});
	it('key is openssl.Key object',  () => {
		assert.ok(KEY instanceof openssl.Key);
	});
	it('key is RSA private key', () => {
		
		assert.ok(/^(-+)(BEGIN RSA PRIVATE KEY)(-+)\n(Proc-Type: 4,ENCRYPTED)\n.+/.test(KEY._data));
	});
});