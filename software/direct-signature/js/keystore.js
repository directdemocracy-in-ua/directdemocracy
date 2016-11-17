
var NodeRSA = require('node-rsa');

exports.importPKCS8 = importPKCS8;
function importPKCS8(keyDataInPKCS8Format) {
	var rsa = new NodeRSA();
	rsa.importKey(keyDataInPKCS8Format, "pkcs8-private-pem");
	return new KeyStore(rsa);
}

exports.importPKCS1 = importPKCS1;
function importPKCS1(keyDataInPKCS1Format) {
	var rsa = new NodeRSA(keyDataInPKCS1Format);
	return new KeyStore(rsa);
}


function KeyStore(rsaKey) {
	this._rsaKey = rsaKey;
}

KeyStore.prototype = {
	getLength: function() {
		return this._rsaKey.keyPair.cache.keyBitLength;
	}
};